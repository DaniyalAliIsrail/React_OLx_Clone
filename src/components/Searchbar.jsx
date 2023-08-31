import React from "react";
import OLXBLACKLOGO from "../assets/asset 12.svg";
import SEARCHLOGO from "../assets/asset 16.svg";

const Searchbar = () => {
  return (
    <>
      <div className="container-custom">
        <div className="d-flex justify-content-start align-items-center text-center border border-1 p-1">
          <div>
            <img
              className="olx-black-logo"
              src={OLXBLACKLOGO}
              alt="balcklogo"
            ></img>
          </div>

          <div >
            <select className="drop-down-bar" name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="search-bar">
            <input
              className="search-bar-second"
              type="text"
              placeholder="Find cars mobile phones and more"
            />
            <img src={SEARCHLOGO} alt="iamge"></img>
          </div>

          {/* <div className="search-bar">
            <input
              className="search-second"
              type="text"
              placeholder="Find cars mobile phones and more"
            />
            <img src={SEARCHLOGO} />
          </div> */}

          <div>
            <a>LogIn</a>
          </div>

          <div>
            <a>SignUp</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
