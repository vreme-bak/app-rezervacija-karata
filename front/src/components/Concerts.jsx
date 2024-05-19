/* eslint-disable react/prop-types */
import "../css/Concerts.css";
import Category from "./Category";
function Concerts({ activeConcerts }) {
  return (
    <>
      <div className="concertsWrap">
        {Object.values(activeConcerts).map((e) => (
          <Category key={e.catName} sepConcerts={e} />
        ))}
      </div>
    </>
  );
}

export default Concerts;
