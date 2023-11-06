import "./Navbar.css"
import { useEffect, useRef, useState } 
	from "react"; 

export const Navbar = () => {
  const lastScrollTop = useRef(0); 
  const [ isNavbarVisible, setIsNavBarVisible] = 
    useState(true); 

// handlescroll - Offset code 

  const handleScroll = () => {
    const { pageYOffset } = window; 
    if (
	pageYOffset > lastScrollTop.current 
    ) {	
	setIsNavbarVisible(false);
    } 
    else if (pageYOffset < lastScrollTop.current
    ) { 
	setIsNavbarVisible(true); 
    }	
    lastScrollTop.current = pageYOffset; 	    
}


useEffect(() => {
  window.addEventListener(
    "scroll", 
    handleScroll, 
    { passive: true } 
  );

  return window.removeEventListener(
    "scroll", handleScroll)
}, []); 


return (
  <>
	<nav className={`${ 
	  isNavbarVisible ? "visible" : ""}`}>
	<img src={logo} />
	<div className="nav-items">
	  <a>Portfolio</a>
	  <a>Skills</a>
	  <a>About</a>
	</div>
	</nav>
  </>
  );
};
