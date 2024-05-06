/* eslint-disable react/prop-types */
import "../../css/LoginForms.css";
function Login({ loginRegister, setLoginRegister }) {
  return (
    <>
      <div className="loginForm">
        <h1 className="loginTitle">Log in</h1>
        <div className="prompt">
          <input className="loginField" type="text" placeholder="E-mail:" />
          <input
            className="loginField"
            type="password"
            placeholder="Password:"
          />
          <div className="toggleLink">
            <p
              className="swapToRegister"
              onClick={() => {
                setLoginRegister(!loginRegister);
              }}
            >
              Register instead
            </p>
          </div>
          <button className="submitBtn">Log in</button>
        </div>
      </div>
    </>
  );
}
export default Login;
