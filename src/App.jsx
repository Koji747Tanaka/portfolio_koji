import Home from './components/Home.jsx';
import React, { useRef, useState, useEffect } from 'react';
import { Box, Tabs, Tab, AppBar } from '@mui/material';

function App() {
    const [sectionValue, setSectionValue] = useState(0);
    const [tabPosition, setTabPosition] = useState('static');
    const [placeholderHeight, setPlaceholderHeight] =useState(0);
    const [scrollY, setScrollY] = useState(0);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);
    const sectionRefs = [homeRef, aboutRef, experienceRef, contactRef];
    const appBarRef = useRef(null);

    useEffect(() => {
      const appBarHeight = appBarRef.current.clientHeight;
      if (window.scrollY > homeRef.current.clientHeight) {
        setTabPosition('fixed');
        setPlaceholderHeight(appBarHeight);
        
      }else{
        setTabPosition('static');
        setPlaceholderHeight(0);
      }
    }, [scrollY])
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollThrough = (event, section) => {
        sectionRefs[section].current.scrollIntoView(
            { 
            behavior: 'smooth'
            }
        );
    };

    const handleScroll = () => {
      const currentSection = sectionRefs.findIndex((ref) => {
        if (!ref.current) return false;
        const rect = ref.current.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const totalHeight = ref.current.clientHeight;
        const isVisibleEnough = (visibleHeight / totalHeight) > 0.7;
        return isVisibleEnough;
      })
      if (currentSection !== -1) {
        setSectionValue(currentSection);
      }
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
  };

  return (
    <>
        <Home ref={homeRef} />
        <AppBar 
        ref={appBarRef}
        position={tabPosition}
        sx=
        {{
          background: 'white', 
          // boxShadow: 'none', 
          color: 'black',
          '@media (min-width: 600px)': { 
              fontSize: '80px'
          }
        }}
        >
          <Tabs value={sectionValue} onChange={scrollThrough} variant="fullWidth">
              <Tab label="Home"/>
              <Tab label="About" />
              <Tab label="Experience" />
              <Tab label="Contact" />
          </Tabs>
        </AppBar>
        <div style={{ height: `${placeholderHeight}px` }}></div>
        <Box ref={aboutRef} style={{ height: '100vh', backgroundColor: 'blue'}}>About</Box>
        <Box ref={experienceRef} style={{ height: '100vh', backgroundColor: 'red' }}>Experience</Box>
        <Box ref={contactRef} style={{ height: '100vh', backgroundColor: 'green' }}>Contact</Box>

    </>
  )
}

export default App
