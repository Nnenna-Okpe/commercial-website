import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/nav.jsx";
import LandingPage from "./components/landingPage.jsx";
import CategoriesSection from "./components/categories.jsx";
import "./App.css";

function App() {
  const [hover, setHover] = useState(false);

  return (
    <div className="App" style={{ fontFamily: '"Playfair Display", serif' }}>
      {/* <Navbar />
      <LandingPage /> */}
      <CategoriesSection />
    </div>
  );
}

export default App;
