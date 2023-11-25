import React, { useRef, useState, useEffect } from 'react';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';

function App() {
    const [section, setSection] = useState(0);
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
      if (typeof event === "number"){
        section = event;
        event= null;
      }
      
      const appBarHeight = appBarRef.current.clientHeight;
      const element = sectionRefs[section].current;
      // if the page has been scrolled, getBoundingClientRect().top will not account for the scrolled distance, 
      //and will only reflect the distance from the top of the viewport to the element, not the entire document.
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      let offsetPosition = elementPosition - appBarHeight;

      // Adjustment for About section
      if (section ===1){
        offsetPosition -= appBarHeight
      }

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

  return (
    <>
        <Home ref={homeRef} scrollToAbout={scrollToAbout}/>
        <AppBar 
        ref={appBarRef}
        position={tabPosition}
        sx=
        {{
          background: 'white', 
          color: 'black',
          display: 'flex',
          justifyContent: 'center', 
          zIndex: 1100,
        }}
        >
          <Tabs value={section} onChange={scrollThrough} variant="fullWidth" 
          sx={{
            '.MuiTab-root': {
              fontSize: '1.2rem',
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
        <div style={{ height: `${placeholderHeight}px` }}></div>
        <About ref={aboutRef} />
        <Experience ref={experienceRef} style={{ height: '100vh' }}></Experience>
        <Box ref={contactRef} style={{ height: '100vh', backgroundColor: '#b8c5f5' }}>Contact</Box>

    </>
  )
}

export default App
