/* eslint-disable react/prop-types */
import { useState } from "react";
import "../css/Category.css";
import CatScroller from "./CatScroller";
import ConCard from "./ConCard";
function Category({ sepConcerts }) {
  const [navStatus, setNavStatus] = useState(1);
  return (
    <>
      <div className="catWrap">
        <div className="catHeader">
          <div className="catName">{sepConcerts.catName}</div>
          <div className="catScroll">
            <CatScroller navStatus={navStatus} setNavStatus={setNavStatus} />
          </div>
        </div>
        <div className="slider">
          {Object.values(sepConcerts.concerts).map((e) => (
            <ConCard key={e.conName} conData={e} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Category;
