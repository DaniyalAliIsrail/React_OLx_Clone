import React from "react";

function Categories(props) {
  const { img1 , text1 } =
    props;

  return (
    <>
      <div className="container-custom ">
        <div className="card-circle-wrapper">
          <div className="card-circle">
            <img src={img1}></img>
            <h6>{text1}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
