/* eslint-disable react/prop-types */
import "../css/Category.css";
import CatScroller from "./CatScroller";
import ConCard from "./ConCard";
import { useEffect, useState, useRef, createRef } from "react";
function Category({ sepConcerts, pass, setMenuOpen }) {
  const [loading, setLoading] = useState(true);
  const [navStatus, setNavStatus] = useState(1);
  const [stop, setStop] = useState(false);
  const [horizontalScroll, setHorizontalScroll] = useState(0);
  const creator = Object.values(sepConcerts.concerts);

  let refsClick = useRef([createRef()]);
  function updateLength(value) {
    refsClick.current = refsClick.current.splice(0, value);
    for (let i = 0; i < value; i++) {
      refsClick.current[i] = refsClick.current[i] || createRef();
    }
    refsClick.current = refsClick.current.map((item) => item || createRef());
  }
  updateLength(creator.length);

  useEffect(() => {
    const onScroll = () => {
      setHorizontalScroll(pass.current.scrollLeft);
    };

    pass.current.addEventListener("scroll", onScroll);
    if (horizontalScroll % 300 == 0 && !stop) {
      setNavStatus(Math.floor(horizontalScroll / 300) + 1);
    }

    let clean = pass.current;
    return () => clean.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [horizontalScroll]);

  useEffect(() => {
    if (loading) return;
    refsClick.current[navStatus - 1].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navStatus]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <div className="catWrap">
        <div className="catHeader">
          <div className="catName">{sepConcerts.catName}</div>
          <div className="catScroll">
            {window.screen.width > creator.length * 300 + 56 ? (
              ""
            ) : (
              <CatScroller
                setStop={setStop}
                navStatus={navStatus}
                setNavStatus={setNavStatus}
                catName={sepConcerts.catName}
                noCon={creator.length}
              />
            )}
          </div>
        </div>
        <div className="slider" ref={pass}>
          {creator.map((e, i) => (
            <ConCard
              pass={refsClick.current[i]}
              key={e.conName}
              conData={e}
              setMenuOpen={setMenuOpen}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Category;
