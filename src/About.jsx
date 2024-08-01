import React from 'react';
import ReactjsPic from './assets/react.svg';
import HtmlPic from './assets/html.svg';
import CssPic from './assets/css.svg';
import JsPic from './assets/javascript.svg';
import BootstrapPic from './assets/bootstrap.svg';
import JavaPic from './assets/java.svg';
import SpringbootPic from './assets/spring.svg';
import Sql from './assets/sql.svg';
import './About.css';

const About = () => {
  return (
    
    <div className="about-container" id='about'>
      <div className='header'>
        <h1>Hello, I'm Venkitt Suresh</h1>
        <h2>A Passionate Web Developer Ready to Make an Impact</h2>
      </div>
      <section className="about-content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; I am a recent Computer Science graduate with a strong passion for web development. My journey into coding began with a curiosity for how websites work, 
          and it quickly grew into a love for creating beautiful, functional web applications.
        </p>
        <div className='header'>
        <h2>TECHNOLOGIES</h2>
        </div>
        <div className="skills-container">
          <div className="skill-card">
            <div className="skill-image">
              <img src={HtmlPic} alt="HTML logo" />
            </div>
            <h3>HTML</h3>
            
          </div>
          <div className="skill-card">
            <div className="skill-image">
              <img src={CssPic} alt="CSS logo" />
            </div>
            <h3>CSS</h3>
            
          </div>
          <div className="skill-card">
            <div className="skill-image">
              <img src={JsPic} alt="JavaScript logo" />
            </div>
            <h3>JavaScript</h3>
            
          </div>
          <div className="skill-card">
            <div className="skill-image">
              <img src={ReactjsPic} alt="React.js logo" />
            </div>
            <h3>React</h3>
            
          </div>
          <div className="skill-card">
            <div className="skill-image">
              <img src={BootstrapPic} alt="Bootstrap logo" />
            </div>
            <h3>Bootstrap</h3>
            
          </div>
          <div className="skill-card">
            <div className="skill-image">
              <img src={JavaPic} alt="JAVA logo" />
            </div>
            <h3>JAVA</h3>
            
          </div>
          <div className="skill-card">
            <div className="skill-image">
              <img src={Sql} alt="SQL logo" />
            </div>
            <h3>MySQL</h3>
            
          </div>
          <div className="skill-card">
            <div className="skill-image">
              <img src={SpringbootPic} alt="Springboot logo" />
            </div>
            <h3>Spring Boot</h3>
            
         
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;