import React, { useRef } from "react";
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Team from "./components/Team";
import Community from "./components/Community";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
import Menu from "./components/Menu";
import { Container, Row, Col } from 'react-bootstrap';


function App () {
  const aboutRef = useRef();

  const discover = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
}

  return (
    <div className="App">
      <div className="fixed-bg bg-right">
        <Header onClickDiscover={discover} />
        {/* <Menu /> */}
        <About ref={aboutRef} />
      </div>
      <div className="fixed-bg bg-left">
        <Team />
      </div>
      <div className="fixed-bg bg-right">
        <Community />
      </div>
      <div className="fixed-bg bg-left">
        <Roadmap />
      </div>
      <div className="fixed-bg bg-right">
        <FAQ />
      </div>
    </div>
  );
}

export default App;
