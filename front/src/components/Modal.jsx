/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import "../css/Modal.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Login from "./Account/Login";
import Cookies from "js-cookie";
import Register from "./Account/Register";
function Modal({ setModal, setUserEmail, logOutModal }) {
  const [loginRegister, setLoginRegister] = useState(true);

  function logOutUser() {
    setUserEmail();
    Cookies.remove("email");
    toast.success("Izlogvan.");
    setModal(false);
  }

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        setModal(false);
      }
    }
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    function handleEnter(e) {
      if (e.key === "Enter") {
        logOutUser();
      }
    }
    if (logOutModal) {
      window.addEventListener("keydown", handleEnter);
    }
    return () => {
      if (logOutModal) {
        window.removeEventListener("keydown", handleEnter);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="modal">
      <div
        className="modalBackground"
        onClick={() => {
          setModal(false);
        }}
      ></div>
      <div
        className={`modalContainer ${logOutModal ? "modalContainer-mod" : ""}`}
      >
        <div
          className="closeBtn"
          onClick={() => {
            setModal(false);
          }}
        >
          <svg
            className="closeBtnIcon"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="modalContent">
          {logOutModal ? (
            <div className="logOut-wrap">
              <div className="logOutTitle">Log Out?</div>
              <p className="logOutText">Would you like to sign out?</p>
              <div className="lgBtns">
                <div
                  className="cancleBtn lgbt"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Cancle
                </div>
                <div
                  className="lgOBtn lgbt"
                  onClick={() => {
                    logOutUser();
                  }}
                >
                  Confirm
                </div>
              </div>
            </div>
          ) : loginRegister ? (
            <Login
              setUserEmail={setUserEmail}
              loginRegister={loginRegister}
              setLoginRegister={setLoginRegister}
              setAccountModal={setModal}
            />
          ) : (
            <Register
              setUserEmail={setUserEmail}
              loginRegister={loginRegister}
              setLoginRegister={setLoginRegister}
              setAccountModal={setModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default Modal;
