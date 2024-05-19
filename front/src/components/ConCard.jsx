/* eslint-disable react/prop-types */
import "../css/ConCard.css";
function ConCard({ conData }) {
  const background = "../assets/menu.jpg";
  return (
    <>
      <div className="conCard">
        <div
          className="disPic"
          style={{ backgroundImage: `url("../assets/menu.jpg")` }}
        >
          {conData.conImage != "" ? "" : ""}
        </div>
        <div className="conName">{conData.conName}</div>
        <div className="conDate">{conData.conDate}</div>
        <div className="conPrice">Od: {conData.conPrice} RSD</div>
      </div>
    </>
  );
}
export default ConCard;
