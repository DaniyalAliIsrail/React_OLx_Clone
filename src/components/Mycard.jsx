// import Card from "react-bootstrap/Card";
// import { AiOutlineHeart } from "react-icons/ai";

const Mycard = (props) => {
  const { cimg } = props;
  return (
    <>
      {/* <div className="container-custom">
        <div className="card-wrapper">
          <Card style={{ width: "17rem" }}> */}
            <img src={cimg}></img>
            {/* <Card.Body className="pos-icon-chng">
              <Card.Title>Rs 23,000</Card.Title>
              <div className="card-icon">
                <AiOutlineHeart />
              </div>
              <Card.Text className="h-50 overflow-hidden ">
                Some quick example text title and make up Lorem ipsum dolor sit
                amet consectetur .
              </Card.Text>
              <Card.Text>Karchi , Saddar</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div> */}
    </>
  );
};
            {/* <Card.Img variant="top" className={d} src={cimg} /> */}


export default Mycard;
