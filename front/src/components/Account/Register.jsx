/* eslint-disable react/prop-types */
import "../../css/LoginForms.css";
function Register({ loginRegister, setLoginRegister }) {
  return (
    <>
      <div className="loginForm">
        <h1 className="loginTitle">Register</h1>
        <div className="prompt">
          <input className="loginField" type="text" placeholder="E-mail:" />
          <input
            className="loginField"
            type="password"
            placeholder="Password:"
          />
          <input
            className="loginField"
            type="password"
            placeholder="Repeat Password:"
          />
          <div className="toggleLink">
            <p
              className="swapToRegister swapToLogin"
              onClick={() => {
                setLoginRegister(!loginRegister);
              }}
            >
              Log-in instead
            </p>
          </div>
          <button className="submitBtn">Register</button>
        </div>
      </div>
    </>
  );
}
export default Register;
