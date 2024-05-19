/* eslint-disable react/prop-types */
import { useState } from "react";
import "../css/Category.css";
import CatScroller from "./CatScroller";
function Category({ catName }) {
  const [navStatus, setNavStatus] = useState(1);
  return (
    <>
      <div className="catWrap">
        <div className="catHeader">
          <div className="catName">{catName}</div>
          <div className="catScroll">
            <CatScroller navStatus={navStatus} setNavStatus={setNavStatus} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
