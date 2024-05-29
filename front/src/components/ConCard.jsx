/* eslint-disable react/prop-types */
import "../css/ConCard.css";
import Show from "./Show";
import { useState } from "react";
function ConCard({
  conData,
  pass,
  setMenuOpen,
  userEmail,
  accountModal,
  setAccountModal,
}) {
  const [showModal, setShowModal] = useState(false);
  const placeholderColors = [
    "linear-gradient(135deg, #e7edf3, #f8e3e3)",
    "linear-gradient(135deg, #e7edf3, #e6e6fa)",
    "linear-gradient(135deg, #e7edf3, #d1f0f6)",
    "linear-gradient(135deg, #e7edf3, #fdebd3)",
  ];
  return (
    <>
      <div className={`conCard`} ref={pass}>
        <div
          onClick={() => {
            setMenuOpen(false);
            setShowModal(true);
          }}
          className="disPic"
          style={
            conData.conImage != ""
              ? { backgroundImage: `url(${conData.conImage})` }
              : {
                  background: `${placeholderColors[conData.conPrice % 4]}`,
                }
          }
        ></div>
        <div
          className="conName"
          onClick={() => {
            setMenuOpen(false);
            setShowModal(true);
          }}
        >
          {conData.conName}
        </div>
        <div
          className="conDate"
          onClick={() => {
            setMenuOpen(false);
            setShowModal(true);
          }}
        >
          {conData.conDate}
        </div>
        <div
          className="conPrice"
          onClick={() => {
            setMenuOpen(false);
            setShowModal(true);
          }}
        >
          Od: {conData.conPrice} RSD
        </div>
      </div>
      {showModal ? (
        <Show
          setShowModal={setShowModal}
          conData={conData}
          userEmail={userEmail}
          accountModal={accountModal}
          setAccountModal={setAccountModal}
        />
      ) : (
        ""
      )}
    </>
  );
}
export default ConCard;
