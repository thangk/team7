import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../api/base'
import InputErrorCheck from "../components/InputErrorCheck";
import { isDuplicateAccount, validateInput } from "../components/Utils";
import { setLoggedInUser } from "../features/loggedInUserSlice";
import { useDispatch } from 'react-redux'
import { useAuth } from "../contexts/AuthContext";

export default function SignupPage() {

  const [errorToggle, setErrorToggle] = useState('off');
  // const [errors, setErrors] = useState([]);

  const [validatedResult, setValidatedResult] = useState([]);

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const [customers, setCustomers] = useState();

  const { signup, signin } = useAuth()

  const dispatch = useDispatch()


  const navigate = useNavigate()

  const fetchCustomers = async () => {
    try {
        const res = await api.get('/customers');
        setCustomers(res.data);
    } catch (err) {
        // @ts-ignore
        console.log(err.response.data)
        // @ts-ignore
        console.log(err.response.status)
        // @ts-ignore
        console.log(err.response.headers)
    }
  }

  // @ts-ignore
  const handleSignup = async (e) => {
    e.preventDefault()

    

    

    // @ts-ignore
    const result = validateInput(
      {
      type: 'firstname', 
      // @ts-ignore
      value: firstNameRef.current.value
      },
      {
      type: 'lastname', 
      // @ts-ignore
      value: lastNameRef.current.value
      },
      {
      type: 'email', 
      // @ts-ignore
      value: emailRef.current.value
      },
      {
      type: 'password', 
      // @ts-ignore
      value: passwordRef.current.value
      },
      {
      type: 'confirmpassword', 
      // @ts-ignore
      value: confirmPasswordRef.current.value
      },
      {
      type: 'duplicatecheck', 
      // @ts-ignore
      value: isDuplicateAccount(emailRef.current.value, customers)
      },
    )

    
    console.log(result)
    console.log('length: ' + result.length)
    
    if (result.length > 0) { 
      // @ts-ignore
      setValidatedResult(result)
      setErrorToggle('on')
      return
    }

    const newUser = {
      // @ts-ignore
      firstName: firstNameRef.current.value,
      // @ts-ignore
      lastName: lastNameRef.current.value,
      // @ts-ignore
      email: emailRef.current.value,
      role: 'Customer',
      // @ts-ignore
      password: passwordRef.current.value
    }

    try {
      // @ts-ignore
      await signup(emailRef.current.value, passwordRef.current.value)

      // add to database
      await api.post('/customers', newUser)

      fetchCustomers()

      // @ts-ignore
      for (const customer of customers) {
        // @ts-ignore
        if (customer.email === email) {
            dispatch(setLoggedInUser(customer))
            console.log('this ran?')
        }
    }

      console.log(newUser)

      // @ts-ignore
      await signin(emailRef.current.value, passwordRef.current.value)

      navigate('/signup-success')

      console.log(`no errors`)
    } catch {
      console.log('Sign up failed. Something went wrong.')
    }
    
  }


  useEffect(() => {
    fetchCustomers()

  }, [errorToggle])

  return (

        <main className="loginsignuppage__page-wrapper">

          <InputErrorCheck errorToggle={errorToggle} setErrorToggle={setErrorToggle} validatedResult={validatedResult} />
          
          <form onSubmit={handleSignup}>
            
            <h1 className="loginsignuppage__page-title">Sign Up</h1>

            <div className="loginsignup-form-item-right">
              <label htmlFor="firstname">First Name</label>
              {/* @ts-ignore */}
              <input type="text" id="firstname" ref={firstNameRef} required />
            </div>

            <div className="loginsignup-form-item-right">
              <label htmlFor="lastname">Last Name</label>
              {/* @ts-ignore */}
              <input type="text" id="lastname" ref={lastNameRef} required />
            </div>
            
            <div className="loginsignup-form-item-right">
              <label htmlFor="email">Email</label>
              {/* @ts-ignore */}
              <input type="text" id="email" ref={emailRef} required />
            </div>

            <div className="loginsignup-form-item-right">
              <label htmlFor="password">Password</label>
              {/* @ts-ignore */}
              <input type="password" id="password" ref={passwordRef} required />
            </div>

            <div className="loginsignup-form-item-right">
              <label htmlFor="confirmpassword">Confirm Password</label>
              {/* @ts-ignore */}
              <input type="password" id="confirmpassword" ref={confirmPasswordRef} required />
            </div>
            

            <button type="submit" className="loginsignup-button">Sign Up</button>

            <div className="loginsignup-form-item-center">Already a member?<Link to='/login' className="form-bottom-link underline">Login here.</Link></div>

          </form>

        </main>
  );
}
