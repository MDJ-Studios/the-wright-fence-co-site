import { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  function handleMediaQueryChangeSmaller(mediaQuery) {
    if (mediaQuery.matches) {
      setIsSmallerScreen(true);
    } else {
      setIsSmallerScreen(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener('change', handleMediaQueryChangeSmaller);
    handleMediaQueryChangeSmaller(mediaQuery);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChangeSmaller);
    };
  }, []);

  return (
    <div className="layout">
      <Navbar
        isNavVisible={isNavVisible}
        setNavVisibility={setNavVisibility}
        isSmallScreen={isSmallScreen}
        setIsSmallScreen={setIsSmallScreen}
        isSmallerScreen={isSmallerScreen}
        setIsSmallerScreen={setIsSmallerScreen}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
      {children}
      <Footer />
    </div>
  );
}