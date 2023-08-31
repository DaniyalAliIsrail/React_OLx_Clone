import React from "react";
import OLXBLACKLOGO from "../assets/asset 12.svg";
import SEARCHLOGO from "../assets/asset 16.svg";
import PLUS from "../assets/asset 2.svg";
// import BORDERCOLOR from "../assets/colorful-border.svg";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <>
      <div className="sa-bar">
        <div className="container-custom">
          <div className="p-2 ">
            <div className="navbar-main">
              <div>
                <img
                  className="olx-black-logo"
                  src={OLXBLACKLOGO}
                  alt="balcklogo"
                ></img>
              </div>

              <div>
                <select className="drop-down-bar" name="cars" id="cars">
                  <option value="volvo">Pakistan</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              {/*----------------- search bar ---------*/}

              <div className="search-bar  ">
                <div className=" search-w ">
                  <input
                    className="search-bar-second "
                    type="text"
                    placeholder="Find cars mobile phones and more...."
                  />
                </div>
                <div>
                  <div className=" search-bar-logo  ">
                    <FaSearch />
                  </div>
                </div>
              </div>

              <div>
                <a className=" login-btn fw-bolder text-black text-decoration-none">
                  Login
                </a>
              </div>

              <div className="colorful-border">
                <div>SELL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
