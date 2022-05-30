import React, { useRef } from "react";
import './App.css';
import Header from './components/Header';
import About from './components/About';

function App () {
  const aboutRef = useRef();

  const discover = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
}

  return (
    <div className="App">
      <Header onClickDiscover={discover} />
      <About ref={aboutRef} />
    </div>
  );
}

export default App;
