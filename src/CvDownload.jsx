import React, { useEffect, useState } from "react";

const CvDownload = () => {
  const [show, setShow] = useState(false);

  const downloadCv=()=>{
    const link = document.createElement("a");
    link.download = "Venkit Suresh.pdf";
    link.href = "Venkit Suresh.pdf"; 
    link.click();

  }


  useEffect(()=>{
    const onHandle=()=>{
        if (window.scrollY > 300) {
            setShow(true);
          }
           else {
            setShow(false);
          }
    }
    window.addEventListener('scroll', onHandle);

    return(()=>{
        window.removeEventListener('scroll', onHandle);
    })
  },[])
    
 if(show===true){
  return (
    <div className="cv" onClick={downloadCv} >
      <label class="label">
        
        <input class="input" type="checkbox" />
        
        <span class="circle">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="icon"
          >
            <path
              d="M12 19V5m0 14-4-4m4 4 4-4"
              stroke-width="1.5"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
            ></path>
          </svg>
          <div class="square"></div>
        </span>
        <p class="title"> Download CV</p>
        <p class="title">Downloaded</p>
      </label>
    </div>
  );}
  else{
    return null;
  }
};

export default CvDownload;
