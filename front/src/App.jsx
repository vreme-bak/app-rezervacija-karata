import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Concerts from "./components/Concerts";
import "./css/App.css";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const [accountModal, setAccountModal] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrollTop(document.documentElement.scrollTop);
      if (window.screen.height <= 530 && scrollTop >= 150) setMenuOpen(false);
      if (window.screen.height > 530 && scrollTop >= 250) setMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="websiteContainer">
      <Menu />
      <div id="content">
        <div className={`sectionOne ${menuOpen ? "contentDown" : ""}`}>
          <NavBar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            accountModal={accountModal}
            setAccountModal={setAccountModal}
          />
          <p className="titleOne">Karte za koncerte</p>
          <p className="titleTwo">Sve na jednom mestu</p>
          <div className="sectionLine"></div>
          <p className="titleThree">
            Najpovoljnije, sve odmah. Maturski rad Luka Vučetić.
          </p>
        </div>
        <Concerts />
      </div>
      <Toaster containerClassName="toaster-wrapper" />
      {accountModal ? <Modal setAccountModal={setAccountModal} /> : ""}
    </div>
  );
}

export default App;
