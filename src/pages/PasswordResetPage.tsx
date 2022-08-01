// import { Link } from "react-router-dom";


const PasswordResetPage = () => {

    
    // @ts-ignore
    const handleReoverPassword = (e) => {
        e.preventDefault()
    }

    return (
        <main className="loginsignuppage__page-wrapper">

          
          <form onSubmit={handleReoverPassword}>
            
            <h1 className="loginsignuppage__page-title">Recover Password</h1>
            
            <div className="flex flex-col justify-center items-center gap-2 w-full">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" className="w-full" required />
            </div>
            

            <button type="submit" className="loginsignup-button">Reset</button>

          </form>

        </main>
    )};

export default PasswordResetPage;