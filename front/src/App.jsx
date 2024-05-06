import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import "./css/App.css";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="websiteContainer">
      <Menu />
      <div id="content" className={`${menuOpen ? "contentDown" : ""}`}>
        <div className="sectionOne">
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <p className="titleOne">Karte za koncerte</p>
          <p className="titleTwo">Sve na jednom mestu</p>
          <div className="sectionLine"></div>
          <p className="titleThree">
            Najpovoljnije, sve odmah. Maturski rad Luka Vučetić.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
