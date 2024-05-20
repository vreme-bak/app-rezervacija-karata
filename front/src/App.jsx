import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Concerts from "./components/Concerts";
import "./css/App.css";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
function App() {
  const testjson = {
    cat1: {
      catName: "Metal",
      concerts: {
        con1: {
          conName: "BMTH avenue",
          conDate: "May 25",
          conPrice: "19200",
          conImage: "/src/assets/concertImages/1.jpg",
        },
        con2: {
          conName: "Arena lol",
          conDate: "Apr 16",
          conPrice: "14200",
          conImage: "",
        },
        con3: {
          conName: "Topciderfs",
          conDate: "Jul 23",
          conPrice: "3290",
          conImage: "",
        },
        con4: {
          conName: "Topciderza",
          conDate: "Jul 23",
          conPrice: "3290",
          conImage: "",
        },
        con5: {
          conName: "Topcidexcr",
          conDate: "Jul 23",
          conPrice: "3290",
          conImage: "",
        },
      },
    },
    cat2: {
      catName: "Pop",
      concerts: {
        con1: {
          conName: "BMTH avenavsue",
          conDate: "May 25",
          conPrice: "19200",
          conImage: "/src/assets/concertImages/1.jpg",
        },
        con2: {
          conName: "BMTH avenvsue",
          conDate: "May 25",
          conPrice: "19200",
          conImage: "/src/assets/concertImages/1.jpg",
        },
        con3: {
          conName: "BMTH avengsue",
          conDate: "May 25",
          conPrice: "19200",
          conImage: "",
        },
      },
    },
  };

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
        <Concerts activeConcerts={testjson} />
      </div>
      <Toaster containerClassName="toaster-wrapper" />
      {accountModal ? <Modal setAccountModal={setAccountModal} /> : ""}
    </div>
  );
}

export default App;
