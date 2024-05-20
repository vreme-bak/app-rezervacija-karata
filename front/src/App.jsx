import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Concerts from "./components/Concerts";
import "./css/App.css";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [userEmail, setUserEmail] = useState();

  const [baza, setBaza] = useState();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const [accountModal, setAccountModal] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrollTop(document.documentElement.scrollTop);
      if (window.screen.height <= 530 && scrollTop >= 150) setMenuOpen(false);
      if (window.screen.height > 530 && scrollTop >= 250) setMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    setUserEmail(Cookies.get("email"));
    axios
      .get("http://localhost:3000/api", {
        validateStatus: function () {
          return true;
        },
      })
      .then((res) => {
        setBaza(JSON.parse(res.data.everything));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <></>;
  }

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
        <Concerts activeConcerts={baza} />
      </div>
      <Toaster containerClassName="toaster-wrapper" />
      {accountModal ? (
        <Modal setAccountModal={setAccountModal} setUserEmail={setUserEmail} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
