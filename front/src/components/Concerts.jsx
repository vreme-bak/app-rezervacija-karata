import "../css/Concerts.css";
import Category from "./Category";
function Concerts() {
  return (
    <>
      <div className="concertsWrap">
        <Category catName={"test1"} />
        <Category catName={"test2"} />
        <Category catName={"test3"} />
      </div>
    </>
  );
}

export default Concerts;
