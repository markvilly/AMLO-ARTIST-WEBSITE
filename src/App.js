import Navbar from "./NAVBAR/Navbar";

import "./styles.css";
import "/src/NAVBAR/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MerchCard from "./MerchCard/MerchCard";
import products from "./Contents/products";
import MusicCard from "./MusicCard/MusicCard";
import BottomCard from "./BottomCard/BottomCard";
import Home from "./Home";
import Audio from "./Audio";
import Visuals from "./Visuals";

export default function App() {
  const productOne = products.find((prod) => prod.id === 1);
  const productTwo = products.find((prod) => prod.id === 2);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="amlo-logo">
          <img src="/img/AMLO_PNG.png" alt="" />
        </div>
        <div className="new-nav">
          <ul className="new-nav-items">
            <li className="nav-item new-nav-item active">
              <Link to="/">HOME</Link>
            </li>
            {/* <li className="nav-item new-nav-item">MUSIC</li> */}
            <li className="nav-item new-nav-item">
              <Link to="/audio"> AUDIO</Link>
            </li>
            <li className="nav-item new-nav-item">
              <Link to="/visuals">VISUALS</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/visuals" element={<Visuals />} />
        </Routes>
      </div>
    </Router>
  );
}
