import React from 'react';
import './Intro.css';

const Intro = props => (
  <div className="parent-container">
    <div className="container">
      <div className="intro-msg animated rubberBand">
        Click on an image to earn points, but don't click on any more than once!
      </div>
    </div>
    
    <div className="container">
      <div className="element" />
    </div>  
  </div>
)

export default Intro;