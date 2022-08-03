import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useAuth } from "../contexts/AuthContext";
import { validateInput } from "../components/Utils";
import InputErrorCheck from "../components/InputErrorCheck";
import api from '../api/base'
import { setLoggedInUser } from "../features/loggedInUserSlice";

export default function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // @ts-ignore
  // const loggedInUser = useSelector(state => state.loggedInUser.current)

  const dispatch = useDispatch()

  const { signin } = useAuth()
  const navigate = useNavigate()

  const [errorToggle, setErrorToggle] = useState('off')
  const [validatedResult, setValidatedResult] = useState([])

  const [customers, setCustomers] = useState([])

  const fetchCustomers = async () => {
    try {
        const res = await api.get('/customers')
        setCustomers(res.data)
        
    } catch {
        // @ts-ignore
        console.log('Failed to fetch')
    }
  }

  // @ts-ignore
  const handleLogin = async (e) => {
    e.preventDefault()

    try {

      await signin(email, password)

      for (const customer of customers) {
        // @ts-ignore
        if (customer.email === email) {
            dispatch(setLoggedInUser(customer))
            console.log('this ran?')
        }
      }

      navigate('/account/dashboard')

    } catch {
      const result = validateInput({ type: 'logincheck', value: 'failed' })

            if (result.length > 0) {
                // @ts-ignore
                setValidatedResult(result)
                setErrorToggle('on')
                return
            }
    }
  }

  useEffect(() => {
    fetchCustomers()
  },[])

  return (

        <main className="loginsignuppage__page-wrapper">

          <InputErrorCheck errorToggle={errorToggle} setErrorToggle={setErrorToggle} validatedResult={validatedResult} />
          
          <form onSubmit={handleLogin}>
            
            <h1 className="loginsignuppage__page-title">Login</h1>
            
            <div className="loginsignup-form-item-right">
              <label htmlFor="email">Email</label>
              <input type='text' id='email' onChange={e => setEmail(e.target.value)}  required />
            </div>

            <div className="loginsignup-form-item-right">
              <label htmlFor="password">Password</label>
              <input type='password' id='password' onChange={e => setPassword(e.target.value)} required />
            </div>

            <div className="loginsignup-form-item-right">
              <input type="checkbox" id="rememberme" />
              <label htmlFor="rememberme">Remember me</label>
            </div>
            

            <button type="submit" className="loginsignup-button">Log In</button>

            <div className="loginsignup-form-item-center">Forgot password?<Link to='/reset-password' className="form-bottom-link">Reset here.</Link></div>
            <div className="loginsignup-form-item-center">New to Infinity Watches?<Link to='/signup' className="form-bottom-link">Sign Up here.</Link></div>

          </form>

        </main>
  );
}
