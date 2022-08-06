import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'


function ErrorPage() {
  const navigate = useNavigate();
  const randomIndex = Math.floor(Math.random() * 8) + 1;

  // @ts-ignore
  const errorImages = useSelector(state => state.errorImages.array)

  const background = {
    backgroundImage: `url(${errorImages[randomIndex]})`
  }

  return (
    <main className="errorpage-wrapper" style={background}>

      <section className="error-text-wrapper">
        <h1>404 Error</h1>
        <p>Sorry, the page you're trying to visit doesn't exist.</p>

        <button className="backbutton" onClick={() => navigate(-1)}>
          Go Back
        </button>
        
      </section>
    </main>
  );
}

export default ErrorPage;
