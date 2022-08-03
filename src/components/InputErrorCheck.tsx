


// @ts-ignore
const InputErrorCheck = ({ errorToggle, setErrorToggle, validatedResult }) => {

    
    return (
        <div className={`loginsignuppage__validation_error loginsignuppage__${errorToggle}`}>

            <h1 className="loginsignuppage__error_title">Error</h1>

            <div className="loginsignuppage__error_content">

              {/* @ts-ignore */}
              {validatedResult.map((item, index) => {

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
    )};

export default InputErrorCheck;