import React, { useEffect } from 'react';
import DisplayPic from './assets/Designer1.png'
import './Home.css';



function Section() {
  useEffect(() => {
    const spans = document.querySelectorAll('.animated-text span');

    spans.forEach((span) => {
      span.addEventListener('animationend', () => {
        span.classList.add('animation-complete');
      });
    });
  }, []);

  return (
    <main className='section'>
      
      <div className="animated-text">                     
        <span>Hey...!!!</span>
        <span>Its me Venkitt....</span>
        <span>I'm a web developer</span>
      </div>
      <div className="container">
        <div className="photo">
        <img className='photo img' src={DisplayPic} alt="Photo"></img>
        </div>
        </div>
    </main>
  );
}

export default Section;