/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import axios from "axios";
import toast from "react-hot-toast";
import "../css/Show.css";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
function Show({
  setShowModal,
  conData,
  userEmail,
  // eslint-disable-next-line no-unused-vars
  accountModal,
  setAccountModal,
}) {
  const [currentImg, setCurrentImg] = useState(1);
  const placeholderColors = [
    "linear-gradient(135deg, #e7edf3, #f8e3e3)",
    "linear-gradient(135deg, #e7edf3, #e6e6fa)",
    "linear-gradient(135deg, #e7edf3, #d1f0f6)",
    "linear-gradient(135deg, #e7edf3, #fdebd3)",
  ];

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    }
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //implentacija mejla
  //baza
  //search

  return (
    <div className="show-wrap">
      <div
        className="show-bg"
        onClick={() => {
          setShowModal(false);
        }}
      ></div>
      <div className="show-container">
        <div
          className="showCloseBtn"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <svg
            className="showCloseBtnIcon"
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
        <div className="showTitle">{conData.conName}</div>
        <div className="midSectionWrap">
          <div className="showImgs">
            <div className="showCurrentImg">
              <div
                className="imgIndicator"
                style={
                  currentImg === 1
                    ? { backgroundColor: "rgba(0, 0, 0, 0.655)" }
                    : {}
                }
              ></div>
              <div
                className="imgIndicator"
                style={
                  currentImg === 2
                    ? { backgroundColor: "rgba(0, 0, 0, 0.655)" }
                    : {}
                }
              ></div>
              <div
                className="imgIndicator"
                style={
                  currentImg === 3
                    ? { backgroundColor: "rgba(0, 0, 0, 0.655)" }
                    : {}
                }
              ></div>
            </div>
            <div
              className="showBtnScroll showBtnScrollLeft"
              onClick={() => {
                if (currentImg === 1) {
                  setCurrentImg(3);
                  return;
                }
                setCurrentImg(currentImg - 1);
                return;
              }}
            >
              <svg
                className="showBtnScrollSvg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </div>
            {currentImg === 1 ? (
              <div
                className="showImgOne showImg"
                style={
                  conData.conImage != ""
                    ? { backgroundImage: `url(${conData.conImage})` }
                    : {
                        background: `${
                          placeholderColors[conData.conPrice % 4]
                        }`,
                      }
                }
              ></div>
            ) : (
              ""
            )}
            {currentImg === 2 ? (
              <div
                className="showImgTwo showImg"
                style={
                  conData.conImageShow1
                    ? { backgroundImage: `url(${conData.conImageShow1})` }
                    : {
                        background: `${
                          placeholderColors[conData.conPrice % 4]
                        }`,
                      }
                }
              ></div>
            ) : (
              ""
            )}
            {currentImg === 3 ? (
              <div
                className="showImgThree showImg"
                style={
                  conData.conImageShow2
                    ? { backgroundImage: `url(${conData.conImageShow2})` }
                    : {
                        background: `${
                          placeholderColors[conData.conPrice % 4]
                        }`,
                      }
                }
              ></div>
            ) : (
              ""
            )}
            <div
              className="showBtnScroll showBtnScrollRight"
              onClick={() => {
                if (currentImg === 3) {
                  setCurrentImg(1);
                  return;
                }
                setCurrentImg(currentImg + 1);
                return;
              }}
            >
              <svg
                className="showBtnScrollSvg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
          </div>
          <div className="innerMid">
            <div className="namedate-wrap">
              <div className="groupName">Rammstein</div>
              <div className="concertDate">({conData.conDate})</div>
            </div>
            <div className="concertDesc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              tenetur sed nisi numquam minima aliquid, quam aut blanditiis
              consectetur consequuntur.
            </div>
            <div className="concertLocation">Lokacija: Usce Park</div>
            <div className="cenaKarteIndijanac">
              Cena Karte: {conData.conPrice} RSD
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="cenaKarte">Cena Karte: {conData.conPrice} RSD</div>
          {!userEmail ? (
            <div
              className="loginDugme dugme"
              onClick={() => {
                setAccountModal(true);
              }}
            >
              Log in
            </div>
          ) : (
            <div
              className="reserveDugme dugme"
              onClick={() => {
                axios
                  .post(
                    "http://localhost:3000/api/send/",
                    {
                      email: userEmail,
                      body: "test",
                    },
                    {
                      validateStatus: function () {
                        return true;
                      },
                    }
                  )
                  .then((res) => {
                    if (res.status !== 200) toast.error("Server error");
                    else {
                      toast.success("Uspešno rezervisano.");
                    }
                  });
              }}
            >
              Rezerviši
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Show;
