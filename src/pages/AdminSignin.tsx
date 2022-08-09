import { useEffect, useState } from 'react';
import logo from '../images/icons/logo-icon-small.png'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../api/base'

import { useDispatch } from 'react-redux'
import { setLoggedInUser } from "../features/loggedInUserSlice";
import { validateInput } from '../components/Utils';
import InputErrorCheck from '../components/InputErrorCheck';

const AdminSignin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // @ts-ignore
    // const loggedInUser = useSelector(state => state.loggedInUser.current)

    const dispatch = useDispatch()


    const { signin } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [errorToggle, setErrorToggle] = useState('off')
    const [validatedResult, setValidatedResult] = useState([])

    const [loading, setLoading] = useState(false)

    const [admins, setAdmins] = useState([])

    if (loading) {
        
    }

    const fetchAdmins = async () => {
        try {
            const res = await api.get('/admins')
            setAdmins(res.data)
            
        } catch (e) {
            // @ts-ignore
            console.log(e.message)
        }
    }

    // @ts-ignore
    const handleSignin = async (e) => {
        e.preventDefault()

        // fetchAdmins()

        try {
            setError('')
            setLoading(true)
            
            // console.log(admins)

            for (const admin of admins) {
                // @ts-ignore
                if (admin.email === email) {
                    await signin(email, password)
                    dispatch(setLoggedInUser(admin))
                    navigate('/admin/dashboard')
                    return
                }
            }

           
        } catch (err) {
            setError('Faild to login.')
            console.log(error)

        }

        const result = validateInput({ type: 'logincheck', value: 'failed' })

        if (result.length > 0) {
            // @ts-ignore
            setValidatedResult(result)
            setErrorToggle('on')
            return
        }

        setLoading(false)
    }


    useEffect(() => {
        fetchAdmins()
        
    }, [])




    return (
        <main className="adminauth__pagewrapper">

            <InputErrorCheck errorToggle={errorToggle} setErrorToggle={setErrorToggle} validatedResult={validatedResult} />

            <section className="adminauth__content-wrapper">

                <div className="adminauth__logoandtitle">
                    <img src={logo} alt="infinity watches logo" />
                    <h1>admin panel</h1>
                </div>


                <form onSubmit={handleSignin}>

                    <div className='adminauth__inputfields'>
                        <label htmlFor='email'>Email</label>
                        {/* @ts-ignore */}
                        <input type='text' id='email' onChange={e => setEmail(e.target.value)}  required />
                    </div>

                    <div className='adminauth__inputfields'>
                        <label htmlFor='password'>password</label>
                        {/* @ts-ignore */}
                        <input type='password' id='password' onChange={e => setPassword(e.target.value)} required />
                    </div>

                    <div className='adminauth__button-wrapper'>
                        <button type='submit'>login</button>
                    </div>

                </form>


            </section>




        </main>

    )};

export default AdminSignin;


