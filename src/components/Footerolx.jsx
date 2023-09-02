import React from "react";
import smedia1 from "../assets/asset 5.svg";
import smedia2 from "../assets/asset 6.svg";
import smedia3 from "../assets/asset 7.svg";
import socail1 from "../assets/asset 8.svg";
import socail2 from "../assets/asset 9.svg";
import socail3 from "../assets/asset 10.svg";
import socail4 from "../assets/asset 11.svg";

const Footerolx = () => {
  return (
    <>
      <div>
        <div className="footer-olx footer-bg-clr">
          <div>
            <ul>
              <h6>POPULAR CATEGORIES</h6>
              <li>
                <a>Cars</a>
              </li>
              <li>
                <a>Flats for rent</a>
              </li>
              <li>
                <a>Mobile Phones</a>
              </li>
              <li>
                <a>Jobs</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <h6>TRENDING SEARCHES</h6>
              <li>
                <a>Bikes</a>
              </li>
              <li>
                <a>Watches</a>
              </li>
              <li>
                <a>Books</a>
              </li>
              <li>
                <a>Dogs</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <h6 >ABOUT US</h6>
              <li>
                <a>About EMPG</a>
              </li>
              <li>
                <a>OLX Blog</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>OLX for Businesses</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <h6 >OLX</h6>
              <li>
                <a>Help</a>
              </li>
              <li>
                <a>Sitemap</a>
              </li>
              <li>
                <a>Terms of use</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="socail-wrapper">
            <h5>Follow Us</h5>
            <div className="socialmedia-log">
              <img src={socail1}></img>
              <img src={socail2}></img>
              <img src={socail3}></img>
              <img src={socail4}></img>
            </div>
            <div className="smedia-logo">
              <img src={smedia1}></img>
              <img src={smedia2}></img>
              <img src={smedia3}></img>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Footerolx;
