import React from "react";

const Footerbanner = (props) => {
  const { appgalery, appstore, googleplay } = props;
  return (
    <>
      <div className="footerbanner">
        <div>
          <img className="img-fluid" src={props.footerimage}></img>
        </div>
        <div className="footer-center-heading" >
          <h3>TRY THE OLX APP</h3>
          <h5>
            Buy, sell and find just about anything using the app on your mobile.
          </h5>
        </div>
        <div className="list-footer">
          <p>GET YOUR APP TODAY</p>
          <div className="list-banner">
            <img src={appstore}></img>
            <img src={googleplay}></img>
            <img src={appgalery}></img>
          </div>
          
        </div>
      </div>
      
    </>
  );
};

export default Footerbanner;
