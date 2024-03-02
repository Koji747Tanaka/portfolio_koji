import React, { useRef, useState, useEffect } from 'react';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

function App() {
    const [section, setSection] = useState(0);
    const [tabPosition, setTabPosition] = useState('static');
    const [scrollY, setScrollY] = useState(0);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);
    const sectionRefs = [homeRef, aboutRef, experienceRef, contactRef];
    const appBarRef = useRef(null);
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollThrough = (event, section) => {
      if (typeof event === "number"){
        section = event;
        event= null;
      }
      const appBarHeight = appBarRef.current.clientHeight;
      const element = sectionRefs[section].current;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      let offsetPosition = elementPosition - appBarHeight;
      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
    };

    const scrollToAbout = () =>{
      scrollThrough(1)
      
    }

    const handleScroll = () => {
      const currentSection = sectionRefs.findIndex((ref) => {
        if (!ref.current) return false;
        const rect = ref.current.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const totalHeight = window.innerHeight;
        const isVisibleEnough = (visibleHeight / totalHeight) > 0.8;
        return isVisibleEnough;
      })
      if (currentSection !== -1) {
        setSection(currentSection);
      }
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
  };

  const tabHeight = {
    md: '4rem', 
    lg: '4rem', 
    xl: '4rem', 
  }

  const appBarStyles = {
    position: 'sticky',
    top: 0, 
    background: 'white',
    boxShadow: '0px 3px 6px rgb(222, 223, 227)',
    zIndex: 10, 
  };

  return (
    <>
        <Home ref={homeRef} scrollToAbout={scrollToAbout}/>
        <AppBar 
        ref={appBarRef}
        position={tabPosition}
        sx={appBarStyles}
        >
          <Tabs value={section} onChange={scrollThrough} variant="fullWidth"
          sx={{
            '.MuiTab-root': {
              textTransform: 'none', 
              color: '#08090f',
              height:tabHeight, 
              fontSize: {
                xs: '0.8rem', 
                sm: '0.9rem', 
                md: '1rem', 
              },
            },
            '.MuiTabs-indicator': {
              backgroundColor: '#13acd6',
              height: '5px',
            },
            boxShadow: '0px 3px 6px rgb(222, 223, 227)',

          }}>
              <Tab label="Home"/>
              <Tab label="About" />
              <Tab label="Experience" />
              <Tab label="Contact" />
          </Tabs>
        </AppBar>
        <div className="main-container">
          <About ref={aboutRef} />
          <Experience ref={experienceRef} style={{ height: '100vh' }}></Experience>
          <Contact ref={contactRef} style={{ height: '100vh', backgroundColor: '#b8c5f5' }}></Contact>
        </div>
    </>
  )
}

export default App
