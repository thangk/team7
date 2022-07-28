import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const randomIndex = Math.floor(Math.random() * 8) + 1;

  const background = {
    backgroundImage: `url(${require(`../images/error_images/ei${randomIndex}.jpg`)})`
  }

  return (
    <main className="errorpage-wrapper" style={background}>

      <section className="error-text-wrapper">
        <h1>404 Error</h1>
        <p>Sorry, the page you're trying to visit doesn't exist.</p>

        <button className="backbutton" onClick={() => navigate(-2)}>
          Go Back
        </button>
      </section>
    </main>
  );
}

export default ErrorPage;
