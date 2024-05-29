/* eslint-disable react/prop-types */
import { useRef, createRef } from "react";
import "../css/Concerts.css";
import Category from "./Category";
function Concerts({ activeConcerts, setMenuOpen }) {
  let refsSpin = useRef([createRef()]);
  function updateLength(value) {
    refsSpin.current = refsSpin.current.splice(0, value);
    for (let i = 0; i < value; i++) {
      refsSpin.current[i] = refsSpin.current[i] || createRef();
    }
    refsSpin.current = refsSpin.current.map((item) => item || createRef());
  }
  updateLength(Object.values(activeConcerts).length);
  return (
    <>
      <div className="concertsWrap">
        {Object.values(activeConcerts).map((e, i) => (
          <Category
            pass={refsSpin.current[i]}
            key={e.catName}
            sepConcerts={e}
            setMenuOpen={setMenuOpen}
          />
        ))}
      </div>
    </>
  );
}

export default Concerts;
