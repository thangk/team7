import React from 'react'

export default function LoginPage() 
{
  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <div className='product-details-wrapper'>
                  <h1 className='page-title product-details-title'>Login</h1>
                  <form action="action_page.php" method="post">
                    <div className="imgcontainer">
                    </div>
                    <div className='product-details-text'>
                      <label htmlFor="uname">Email</label>
                      <input type="text" placeholder="Email" name="uname" required/>
                      <label htmlFor="psw">Password</label>
                      <input type="password" placeholder="Password" name="psw" required/>
                      <label>
                      <input type="checkbox" name="remember"/> Remember me
                      </label>
                      <button type="submit" className='btn'>LOG IN</button>
                      <div className="container">
                        <span className="psw" ><a href="/#">Forgot password?</a></span>
                      </div>
                    </div>
                  </form>
                </div>
              </td>
              <td>
              <div className='product-details-wrapper'>
                  <h1 className='page-title product-details-title'>Register</h1>
                  <form action="action_page.php" method="post">
                    <div className="imgcontainer">
                    </div>
                    <div className='product-details-text'>
                      <label htmlFor="firstnam">First Name</label>
                      <input type="text" placeholder="First Name" name="firstnam" required/>
                      <label htmlFor="lastnam">Last Name</label>
                      <input type="text" placeholder="Last Name" name="lastnam" required/>
                      <label htmlFor="uname">Email Address</label>
                      <input type="text" placeholder="Enter Email, e.g. example@mail.com" name="uname" required/>
                      <label htmlFor="psw">Password</label>
                      <input type="password" placeholder="Enter Password" name="psw" required/>
                      <label htmlFor="psw">Repeat Password</label>
                      <input type="password" placeholder="Enter Password Again" name="psw" required/>
                      <button type="submit" className='btn'>SIGN UP</button>
                      <label>
                      <input type="checkbox" name="news"/> Sign me up to receive advanced notice of sales, exclusive deals, and much more!
                      </label>
                      <div className="container"></div>
                    </div>
                  </form>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
