import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import Header from './components/Header';
import About from './components/About';
import Team from "./components/Team";
import Community from "./components/Community";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
import Menu from "./components/Menu";

import './App.css';

function App () {
  const[showMenu, setShowMenu] = useState(false);
  const[currentSection, setCurrentSection] = useState('Header');
  
  const menuRef = useRef();
  const headerRef = useRef();
  const aboutRef = useRef();
  const teamRef = useRef();
  const communityRef = useRef();
  const roadmapRef = useRef();
  const faqRef = useRef();

  const refs = {
    "Header": headerRef,
    "About": aboutRef,
    "Team": teamRef,
    "Community": communityRef,
    "Roadmap": roadmapRef,
    "FAQ": faqRef,
  };

  const sectionHeight = (name) => {
    if(name === 'About'){
      return aboutRef.current.scrollHeight;
    }
    if(name === 'Team'){
      return aboutRef.current.scrollHeight +
        teamRef.current.scrollHeight;
    }
    if(name === 'Community'){
      return aboutRef.current.scrollHeight +
        teamRef.current.scrollHeight +
        communityRef.current.scrollHeight;
    }
    if(name === 'Roadmap'){
      return aboutRef.current.scrollHeight +
        teamRef.current.scrollHeight +
        communityRef.current.scrollHeight +
        roadmapRef.current.scrollHeight;
    }
    if(name === 'FAQ'){
      return aboutRef.current.scrollHeight +
        teamRef.current.scrollHeight +
        communityRef.current.scrollHeight +
        roadmapRef.current.scrollHeight +
        faqRef.current.scrollHeight;
    }
  }

  const scrollTo = (name) => {
    if(refs[name].current){
      scrollToRef(refs[name]);
    }
  };

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  };
  
  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    const headerBottom = headerRef.current.scrollHeight - 100; // Add little correction
    if(!showMenu && currentScrollY >= headerBottom){
      setShowMenu(true);
    } else if(showMenu && currentScrollY < headerBottom){
      setShowMenu(false);
    }

    // Check current section
    if (currentScrollY < headerRef.current.scrollHeight) {
      setCurrentSection('Header');
    }
    else if (currentScrollY < sectionHeight('About')) {
      setCurrentSection('About');
    }
    else if(currentScrollY <  sectionHeight('Team')){
      setCurrentSection('Team');
    }
    else if(currentScrollY <  sectionHeight('Community')){
      setCurrentSection('Community');
    }
    else if(currentScrollY <  sectionHeight('Roadmap')){
      setCurrentSection('Roadmap');
    }
    else if(currentScrollY <  sectionHeight('FAQ')){
      setCurrentSection('FAQ');
    }
  };
  
  return (
    <div className="App" onScroll={onScroll}>
      <CSSTransition in={showMenu} timeout={300} classNames="side-menu" unmountOnExit nodeRef={menuRef}>
        <Menu scrollTo={scrollTo} currentSection={currentSection} ref={menuRef}/>
      </CSSTransition>
      <div>
        <figure className="image-container bg-header-right bg-right" />
        <div className="content">
          <Header onClickDiscover={() => scrollToRef(aboutRef)} ref={headerRef}/>
          <About ref={aboutRef} />
        </div>
      </div>
      <div>
        <figure className="image-container bg-team bg-left" />
        <div className="content">
          <Team ref={teamRef} />
        </div>
      </div>
      <div>
        <figure className="image-container bg-community bg-right" />
        <div className="content">
          <Community ref={communityRef} />
        </div>
      </div>
      <div>
        <figure className="image-container bg-roadmap bg-left" />
        <div className="content">
          <Roadmap ref={roadmapRef} />
        </div>
      </div>
      <div>
        <figure className="image-container bg-faq bg-right" />
        <div className="content">
          <FAQ ref={faqRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
