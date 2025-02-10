import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './style.css';
import Home from "./Home";
import LoveQuote from "./LoveQuote";
import CoupleAnimation from "./CoupleAnimation";
import FullAnimation from "./FullAnimation";
import FlowerAnimation from "./FlowerAnimation";
import KissAnimation from "./KissAnimation";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/loveQuote" element={<LoveQuote/>}/>
            <Route path="/coupleAnimation" element={<CoupleAnimation/>}/>
            <Route path="/romanticAnimation" element={<FullAnimation></FullAnimation>}/>
            <Route path="/flowerAnimation" element={<FlowerAnimation></FlowerAnimation>}/>
            <Route path="/kissAnimation" element={<KissAnimation></KissAnimation>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;