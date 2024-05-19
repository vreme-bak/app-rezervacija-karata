/* eslint-disable react/prop-types */
import "../css/NavBar.css";
import toast from "react-hot-toast";
function NavBar({ menuOpen, setMenuOpen, setAccountModal }) {
  return (
    <>
      <div id="NavBar">
        <div className="mainNavWrap">
          <div className="leftSideNavBar">
            <div
              className="navBarBtn menuBtn"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <svg
                className="svgNavBar barsIcon"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // eslint-disable-next-line react/no-unknown-property
                  fill-rule="evenodd"
                  // eslint-disable-next-line react/no-unknown-property
                  clip-rule="evenodd"
                  d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                className={`svgNavBar arrow ${menuOpen ? "rotateArrow" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
              </svg>
            </div>
            <div className="logoNavBar"></div>
          </div>
          <div className="searchSideNavBar">
            <input
              className="searchNavBar"
              placeholder="Šta želite da gledate?"
              onClick={() => {
                setMenuOpen(false);
              }}
            />
            <div className="searchGlass">
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
          <div className="rightSideNavBar">
            <div
              className="support"
              onClick={() => {
                setMenuOpen(false);
                toast.error("Currently unavailable", {
                  style: {
                    backgroundColor: "rgb(255, 129, 129)",
                  },
                });
              }}
            >
              Support
            </div>
            <div
              className="navBarBtn profileBtn"
              onClick={() => {
                setMenuOpen(false);
                setAccountModal(true);
              }}
            >
              <svg
                className="svgNavBar"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // eslint-disable-next-line react/no-unknown-property
                  fill-rule="evenodd"
                  // eslint-disable-next-line react/no-unknown-property
                  clip-rule="evenodd"
                  d="M8.28041 12.7082C6.8913 11.6093 6 9.90875 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 9.90875 17.1087 11.6093 15.7196 12.7082C19.3311 14.1179 22 17.4467 22 21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21C20 17.4457 16.2678 14 12 14C7.73216 14 4 17.4457 4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21C2 17.4467 4.66891 14.1179 8.28041 12.7082ZM12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="navLine"></div>
      </div>
    </>
  );
}

export default NavBar;
