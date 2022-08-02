import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {


  const handleLogin = () => {

  }

  return (

        <main className="loginsignuppage__page-wrapper">

          
          <form onSubmit={handleLogin}>
            
            <h1 className="loginsignuppage__page-title">Login</h1>
            
            <div className="loginsignup-form-item-right">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" required />
            </div>

            <div className="loginsignup-form-item-right">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>

            <div className="loginsignup-form-item-right">
              <input type="checkbox" id="rememberme" />
              <label htmlFor="rememberme">Remember me</label>
            </div>
            

            <button type="submit" className="loginsignup-button">Log In</button>

            <div className="loginsignup-form-item-center">Forgot password?<Link to='/reset-password' className="form-bottom-link">Reset here.</Link></div>

          </form>

        </main>
  );
}
