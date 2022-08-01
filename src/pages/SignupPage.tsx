import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from '../api/base'
import { isDuplicateAccount, validateInput } from "../components/Utils";

export default function SignupPage() {

  const [errorToggle, setErrorToggle] = useState('off');
  // const [errors, setErrors] = useState([]);

  const [validateResult, setValidatedResult] = useState([]);

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const [customers, setCustomers] = useState();

  // @ts-ignore
  const handleSignup = (e) => {
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
    
    console.log(`no errors`)
  }


  useEffect(() => {
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

  fetchCustomers()

  }, [errorToggle])

  return (

        <main className="loginsignuppage__page-wrapper">

          <div className={`loginsignuppage__validation_error loginsignuppage__${errorToggle}`}>

            <h1 className="loginsignuppage__error_title">Error</h1>

            <div className="loginsignuppage__error_content">

              {/* @ts-ignore */}
              {validateResult.map((item, index) => {

                return (
                  <div className="loginsignuppage__error_content_item" key={index}>
                    {/* @ts-ignore */}
                    <h1 className="loginsignuppage__error_content_error">{item.errMessage}</h1>
                    {/* @ts-ignore */}
                    <h1 className="loginsignuppage__error_content_valid">{item.valid}</h1>
                  </div>
                )
              })}

            </div>

              <div className="loginsignup__error_buttonwrapper">
                <button onClick={() => setErrorToggle('off')}>OK</button>
              </div>

          </div>
          
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
