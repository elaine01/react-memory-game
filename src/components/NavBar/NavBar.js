import React from 'react';
import './NavBar.css';


const NavBar = props => (
  <div className="container">
    <div className="row navbar-fixed-top">
      <div className="col-xs-4">
        Memory Game
      </div>
      <div className="col-xs-4">
        <span> {props.currentMessage} </span>
      </div>
      <div className="col-xs-4">
       <span> Score: {props.currentCount} | Top Score: {props.topScore}</span>
      </div>
    </div>
  </div>
);

export default NavBar;