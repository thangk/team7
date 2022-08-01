import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const navigate = useNavigate()

    // @ ts-ignore
    const gotoDashboard = (e: any) => {
        e.preventDefault()

        navigate('/account')
    }

  return (

        <main className="loginsignuppage__page-wrapper">

          
          <form onSubmit={gotoDashboard}>
            
            <h1 className="loginsignuppage__page-title">Sign Up Success!</h1>

            <button className="loginsignup-button">Go to Dashboard</button>

          </form>

        </main>
  );
}
