import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";


const PasswordResetPage = () => {

  const emailRef = useRef()

  const { resetPassword } = useAuth()

    
    // @ts-ignore
    const handleReoverPassword = (e) => {
        e.preventDefault()

        resetPassword(emailRef)
        alert('Check your email for reset confirmation.')
    }

    return (
        <main className="loginsignuppage__page-wrapper">

          
          <form onSubmit={handleReoverPassword}>
            
            <h1 className="loginsignuppage__page-title">Recover Password</h1>
            
            <div className="flex flex-col justify-center items-center gap-2 w-full">
                <label htmlFor="email">Email:</label>
                {/* @ts-ignore */}
                <input type="text" id="email" ref={emailRef} className="w-full" required />
            </div>
            

            <button type="submit" className="loginsignup-button">Reset</button>

          </form>

        </main>
    )};

export default PasswordResetPage;