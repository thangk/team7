import { useEffect, useState } from 'react';
import logo from '../images/icons/logo-icon-small.png'
import { useAuthAdmin } from '../contexts/AuthContextAdmin';
import { useNavigate } from 'react-router-dom';
import api from '../api/base'

const AdminSignin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const { signin, setLoggedInAdmin } = useAuthAdmin()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [admins, setAdmins] = useState([])

    console.log(loading)

    // @ts-ignore
    const handleSignin = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signin(email, password)

            for (const item of admins) {
                // @ts-ignore
                if (item.email === email) {
                    setLoggedInAdmin(item)
                }
            }

            navigate('/admin/dashboard')

            
        } catch (err) {
            setError('Faild to login.')
            console.log(error)
        }

        setLoading(false)
    }


    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const res = await api.get('/admins')
                setAdmins(res.data)
                
            } catch (e) {
                // @ts-ignore
                console.log(e.message)
            }
        }
        fetchAdmins()
    }, [])




    return (
        <main className="adminauth__pagewrapper">



            <section className="adminauth__content-wrapper">

                <div className="adminauth__logoandtitle">
                    <img src={logo} alt="infinity watches logo" />
                    <h1>admin panel</h1>
                </div>


                <form onSubmit={handleSignin}>

                    <div className='adminauth__inputfields'>
                        <label htmlFor='email'>Email</label>
                        {/* @ts-ignore */}
                        <input type='text' id='email' onChange={e => setEmail(e.target.value)}  />
                    </div>

                    <div className='adminauth__inputfields'>
                        <label htmlFor='password'>password</label>
                        {/* @ts-ignore */}
                        <input type='password' id='password' onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className='adminauth__button-wrapper'>
                        <button type='submit'>login</button>
                    </div>

                </form>


            </section>




        </main>

    )};

export default AdminSignin;


