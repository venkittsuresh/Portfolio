import React, { useEffect, useState } from 'react';

function Header() {
  const [isScroll,setIsScroll]=useState(false);

  const downloadCv=()=>{
    const link = document.createElement("a");
    link.download = "Venkit Suresh.pdf";
    link.href = "Venkit Suresh.pdf"; 
    link.click();

  }

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY>80){
        setIsScroll(true);
      }else{
        setIsScroll(false);
      };
      };
      window.addEventListener('scroll', handleScroll)

      return ()=>{
        window.removeEventListener('scroll',handleScroll)
      }
  },[]);
  

  return (
    <header className={isScroll?"nav-color":""}>
      <nav  >
        
        <div className="nav-bar">
        <a href="#" className={isScroll?"nav-buttons":"nav-button"}>Home</a>
        <a href="#about" className={isScroll?"nav-buttons":"nav-button"}>About</a>
        <a href='' onClick={downloadCv} className={isScroll?"nav-buttons":"nav-button"}>Download</a>
        <a href="#contact" className={isScroll?"nav-buttons":"nav-button"}>Contact</a>
        </div>
        
      </nav>
    </header>
  );
}

export default Header;
