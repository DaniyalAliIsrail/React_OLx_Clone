import './App.css'   
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Searchbar from './components/Searchbar';
import Mynavbar from './components/Mynavbar';
import Ads from './components/Ads';
import Categories from './components/Categories';
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

function App() {
  return (
    <>
      <Banner />
      <Searchbar />
      <Mynavbar />
      <Ads />
      <Categories img1 = {BAG} img2={MOB} img3={BIKE} img4={BOOK}  img5={CAR}  img6={CHAIR}  img7={HENCE} img8={NIGHTY} img9={PUZZEL} img10={SERVICES} />
      
    </>
  )
}

export default App
