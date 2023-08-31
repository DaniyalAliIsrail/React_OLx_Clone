import React from "react";
import LOGO from "../assets/OLX-Logo.jpg";
import HOME from "../assets/asset 13.svg";
import PROPERTY from "../assets/asset 14.svg";

const Banner = () => {
  return (
    <>
       <div style={{backgroundColor:"#f7f8f8"}}>
      <div className="container-custom">
     
        <div className="d-flex justify-content-start p-1  gap-4 align-item-center  mq-custom w-100 ">
          <div>
            <img className="logo-olx " src={LOGO} alt="img"></img>
          </div>
          <div>
            <img src={HOME} alt="img"></img>
          </div>
          <div>
            <img src={PROPERTY} alt="img"></img>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Banner;
