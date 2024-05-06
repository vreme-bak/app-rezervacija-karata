import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import "./css/App.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="websiteContainer">
      <Menu />
      <div id="content">
        <div className={`sectionOne ${menuOpen ? "contentDown" : ""}`}>
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <p className="titleOne">Karte za koncerte</p>
          <p className="titleTwo">Sve na jednom mestu</p>
          <div className="sectionLine"></div>
          <p className="titleThree">
            Najpovoljnije, sve odmah. Maturski rad Luka Vučetić.
          </p>
        </div>
        <div className="egdiv">test</div>
      </div>
      <Toaster containerClassName="toaster-wrapper" />
    </div>
  );
}

export default App;
