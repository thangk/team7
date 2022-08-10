import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRefUrl } from "../features/refSlice";

export default function LoginPage() {

    // @ts-ignore
    const refUrl = useSelector(state => state.ref.url)

    const dispatch = useDispatch()

    const navigate = useNavigate()


    useEffect(() => {
      if (refUrl !== '/signup') {
          navigate('/signup')
      }

      dispatch(setRefUrl(''))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
 

  return (

        <main className="loginsignuppage__page-wrapper">

          
          <form>
            
            <h1 className="loginsignuppage__page-title">Sign Up Success!</h1>

            <div className="loginsignup-button">
              <Link to='/account'>Go to Dashboard</Link></div>

          </form>

        </main>
  );
}
