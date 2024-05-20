/* eslint-disable react/prop-types */
import "../css/ConCard.css";
function ConCard({ conData, pass }) {
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
          className="disPic"
          style={
            conData.conImage != ""
              ? { backgroundImage: `url(${conData.conImage})` }
              : {
                  background: `${placeholderColors[conData.conPrice % 4]}`,
                }
          }
        ></div>
        <div className="conName">{conData.conName}</div>
        <div className="conDate">{conData.conDate}</div>
        <div className="conPrice">Od: {conData.conPrice} RSD</div>
      </div>
    </>
  );
}
export default ConCard;
