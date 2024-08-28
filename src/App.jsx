import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApiRickAndMorty from "./pages/ApiRickAndMorty";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<ApiRickAndMorty />} />
       {/* /* <Route path="/" element={<Home />} />*/}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
