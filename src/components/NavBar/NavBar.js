import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <div className="container">
    <div className="row navbar">
      <div className="col-xs-4">
        Clicky Game
      </div>
      <div className="col-xs-4">
        <span>Click an image to begin!</span>
      </div>
      <div className="col-xs-4">
        Score: <span>0</span> | Top Score: <span>0</span>
      </div>
    </div>
  </div>
);

export default NavBar;