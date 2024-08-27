import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/Video";
import Video from "./components/Video";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <List titulo = 'Minha tela'/>

      <Video />

      <Footer />
    </>
  );
}

export default App;
