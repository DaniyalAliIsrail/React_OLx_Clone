import React from "react";

function Categories(props) {
  const { img1, img2, img3, img4, img5, img6, img7 ,img8 ,img9 ,img10 } = props;
  return (
    <>
      <div className="container-custom border border-4 ">
        <div className="categories-heading">
          <h4>All Categories</h4>
        </div>

        <div className="card-circle-wrapper">
          <div className="card-circle">
            <img src={img1}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img2}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img3}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img4}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img5}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img6}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img7}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img8}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img9}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img10}></img>
            <h6>Heading</h6>
          </div>

          <div className="card-circle">
            <img src={img8}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img9}></img>
            <h6>Heading</h6>
          </div>

          <div className="card-circle">
            <img src={img8}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img9}></img>
            <h6>Heading</h6>
          </div>
          
          <div className="card-circle">
            <img src={img1}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img2}></img>
            <h6>Heading</h6>
          </div>
          <div className="card-circle">
            <img src={img3}></img>
            <h6>Heading</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
