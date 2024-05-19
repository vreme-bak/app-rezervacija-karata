//import { useState } from "react";
import "../css/Menu.css";
function Menu() {
  // const [aboutMeState, setAboutMeState] = useState(false);
  return (
    <>
      <div className="menuContent">
        <div className="logoWrap">
          <div className="logoMenu"></div>
          <div className="searchSideNavBar-menu">
            <input
              className="searchNavBar-menu"
              placeholder="Šta želite da gledate?"
              onClick={() => {}}
            />
            <div className="searchGlass-menu">
              <svg
                fill="#181818"
                stroke="none"
                height="1em"
                width="1em"
                viewBox="-3 -3 24 24"
                // eslint-disable-next-line react/no-unknown-property
                class="Icon__Svg-sc-c28a1244-0 euDQey"
              >
                <path
                  d="M14.3 13l3.4 3.3a1 1 0 0 1-1.4 1.4l-3.4-3.4a8 8 0 1 1 1.4-1.4zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                  fill="currentColor"
                  // eslint-disable-next-line react/no-unknown-property
                  fill-rule="evenodd"
                  stroke="none"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="menuLine"></div>

        <div className="wrapContentMenu">
          <p className="aboutMe">O nama</p>
          <p className="tekst">
            Mi se bavimo organizaciom i prodajom karata za razne koncerte i
            dogadjaje, partneri su nam sve velike firme za turneje i mi
            osiguravamo sva najvažnija dešavanja na koja bi hteli da idete. Ovo
            je samo primer kako bi izgledala ovakva sekcija.
          </p>
        </div>
      </div>
    </>
  );
}

export default Menu;
