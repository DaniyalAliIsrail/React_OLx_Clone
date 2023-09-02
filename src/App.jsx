import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Searchbar from "./components/Searchbar";
import Mynavbar from "./components/Mynavbar";
import Ads from "./components/Ads";
import Categories from "./components/Categories";
import BAG from "./assets/bag1.png";
import BIKE from "./assets/bike1.png";
import BOOK from "./assets/book1.png";
import CAR from "./assets/car1.png";
import CHAIR from "./assets/chair1.png";
import HENCE from "./assets/hence1.png";
import MOB from "./assets/mob1.png";
import NIGHTY from "./assets/nighty1.png";
import PUZZEL from "./assets/puzzel1.png";
import SERVICES from "./assets/services1.png";
import TRACTOR from "./assets/tractor1.png";
import Mycard from "./components/Mycard";
import CARD1 from "./assets/bb.jpg";
import CARD2 from "./assets/aa.jpeg";
import CARD3 from "./assets/cc.jpeg";
import CARD4 from "./assets/dd.jpeg";
import CARD5 from "./assets/ee.jpeg";
import CARD6 from "./assets/qq.jpeg";
import CARD7 from "./assets/gg.jpeg";
import CARD8 from "./assets/hh.jpeg";
import CARD9 from "./assets/ii.jpeg";
import CARD10 from "./assets/jj.jpeg";
import Card from "react-bootstrap/Card";
import { AiOutlineHeart } from "react-icons/ai";
import Footerbanner from "./components/Footerbanner";
import FOOTERBANNERIMAGE from "./assets/asset 4.jpeg";
import APPSTORE from "./assets/asset 5.svg";
import GOOGLEPLAY from "./assets/asset 6.svg";
import APPGALERY from "./assets/asset 7.svg";
import Footerolx from "./components/Footerolx";
import Certified from "./components/Certified";







function App() {
  return (
    <>
      <Banner />
      <Searchbar />
      <Mynavbar />
      <Ads />

      <div className="container-custom ">
        <div className="categories-heading">
          <h4>All Categories</h4>
        </div>
        <div className="card-circle-wrapper">
          <div className="card-circle">
            <Categories img1={BAG} text1="Jobs" />
          </div>

          <div className="card-circle">
            <Categories img1={BIKE} text1="Bikes" />
          </div>

          <div className="card-circle">
            <Categories img1={BOOK} text1="Books & sports" />
          </div>

          <div className="card-circle">
            <Categories img1={CAR} text1="Vehicels" />
          </div>

          <div className="card-circle">
            <Categories img1={CHAIR} text1="Furniture" />
          </div>

          <div className="card-circle">
            <Categories img1={HENCE} text1="Animals" />
          </div>

          <div className="card-circle">
            <Categories img1={MOB} text1="Mobiles" />
          </div>

          <div className="card-circle">
            <Categories img1={CHAIR} text1="Furniture" />
          </div>

          <div className="card-circle">
            <Categories img1={BOOK} text1="Books & sports" />
          </div>

          <div className="card-circle">
            <Categories img1={CAR} text1="Vehicels" />
          </div>

          <div className="card-circle">
            <Categories img1={NIGHTY} text1="Fashion & Beauty" />
          </div>

          <div className="card-circle">
            <Categories img1={PUZZEL} text1="Kids" />
          </div>

          <div className="card-circle">
            <Categories img1={SERVICES} text1="Services" />
          </div>

          <div className="card-circle">
            <Categories
              img1={TRACTOR}
              text1="Business Industrial Agriculture"
            />
          </div>

          <div className="card-circle">
            <Categories img1={PUZZEL} text1="Kids" />
          </div>
        </div>
      </div>

      {/* Card-section */}
      <div className="container-custom">
        <div className="card-wrapper">
         

         

        

          <Card className="setWidth-responsive" style={{ width: "17rem"  }}>
            <Mycard cimg={CARD1} />
            <Card.Body className="pos-icon-chng">
              <Card.Title>Rs 23,000</Card.Title>
              <div className="card-icon">
                {" "}
                <AiOutlineHeart />
              </div>
              <Card.Text className="h-50 overflow-hidden ">
                Some quick example text title and make up Lorem ipsum dolor sit
                amet consectetur .
              </Card.Text>
              <Card.Text>Karchi , Saddar</Card.Text>
            </Card.Body>
          </Card>

          <Card className="setWidth-responsive" style={{ width: "17rem"  }}>
           <Mycard  cimg={CARD3} />
           
            <Card.Body className="pos-icon-chng">
              <Card.Title>Rs 23,000</Card.Title>
              <div className="card-icon">
                {" "}
                <AiOutlineHeart />
              </div>
              <Card.Text className="h-50 overflow-hidden ">
                Some quick example text title and make up Lorem ipsum dolor sit
                amet consectetur .
              </Card.Text>
              <Card.Text>Karchi , Saddar</Card.Text>
            </Card.Body>
          </Card>
          <Card className="setWidth-responsive" style={{ width: "17rem"  }}>
            <Mycard cimg={CARD1} />
            <Card.Body className="pos-icon-chng">
              <Card.Title>Rs 23,000</Card.Title>
              <div className="card-icon">
                {" "}
                <AiOutlineHeart />
              </div>
              <Card.Text className="h-50 overflow-hidden ">
                Some quick example text title and make up Lorem ipsum dolor sit
                amet consectetur .
              </Card.Text>
              <Card.Text>Karchi , Saddar</Card.Text>
            </Card.Body>
          </Card>
          <Card className="setWidth-responsive" style={{ width: "17rem"  }}>
            <Mycard cimg={CARD1} />
            <Card.Body className="pos-icon-chng">
              <Card.Title>Rs 23,000</Card.Title>
              <div className="card-icon">
                {" "}
                <AiOutlineHeart />
              </div>
              <Card.Text className="h-50 overflow-hidden ">
                Some quick example text title and make up Lorem ipsum dolor sit
                amet consectetur .
              </Card.Text>
              <Card.Text>Karchi , Saddar</Card.Text>
            </Card.Body>
          </Card>
          <Card className="setWidth-responsive" style={{ width: "17rem"  }}>
            <Mycard cimg={CARD1} />
            <Card.Body className="pos-icon-chng">
              <Card.Title>Rs 23,000</Card.Title>
              <div className="card-icon">
                {" "}
                <AiOutlineHeart />
              </div>
              <Card.Text className="h-50 overflow-hidden ">
                Some quick example text title and make up Lorem ipsum dolor sit
                amet consectetur .
              </Card.Text>
              <Card.Text>Karchi , Saddar</Card.Text>
            </Card.Body>
          </Card>
          <Card className="setWidth-responsive" style={{ width: "17rem"  }}>
            <Mycard cimg={CARD1} />
            <Card.Body className="pos-icon-chng">
              <Card.Title>Rs 23,000</Card.Title>
              <div className="card-icon">
                {" "}
                <AiOutlineHeart />
              </div>
              <Card.Text className="h-50 overflow-hidden ">
                Some quick example text title and make up Lorem ipsum dolor sit
                amet consectetur .
              </Card.Text>
              <Card.Text>Karchi , Saddar</Card.Text>
            </Card.Body>
          </Card>
          <Card className="setWidth-responsive" style={{ width: "17rem"  }}>
            <Mycard cimg={CARD1} />
            <Card.Body className="pos-icon-chng">
              <Card.Title>Rs 23,000</Card.Title>
              <div className="card-icon">
                {" "}
                <AiOutlineHeart />
              </div>
              <Card.Text className="h-50 overflow-hidden ">
                Some quick example text title and make up Lorem ipsum dolor sit
                amet consectetur .
              </Card.Text>
              <Card.Text>Karchi , Saddar</Card.Text>
            </Card.Body>
          </Card>
          <Card className="setWidth-responsive" style={{ width: "17rem"  }}>
            <Mycard cimg={CARD1} />
            <Card.Body className="pos-icon-chng">
              <Card.Title>Rs 23,000</Card.Title>
              <div className="card-icon">
                {" "}
                <AiOutlineHeart />
              </div>
              <Card.Text className="h-50 overflow-hidden ">
                Some quick example text title and make up Lorem ipsum dolor sit
                amet consectetur .
              </Card.Text>
              <Card.Text>Karchi,Saddar</Card.Text>
            </Card.Body>
          </Card>
        
          <Footerbanner  footerimage={FOOTERBANNERIMAGE} appstore={APPSTORE} googleplay={GOOGLEPLAY} appgalery={APPGALERY}/>
        </div>
      </div>


      <Footerolx />

      <Certified />
      
    </>
  );
}

export default App;
