import React from 'react'
import logo from '../../../public/images/logo.png';

var NewComponent = React.createClass({
    render: function() {
      return (
  
        <header className="header">
          <div className="header-logo">
            <a href="index.html">
            <a id="logo"><img className="logo" src="images/logo.png" alt="logo" /></a>
            alt="Homepage" 
            </a>
          </div>
          <div className="header-content">
            <nav className="row header-nav-wrap">
              <ul className="header-nav">
                <li><a className="smoothscroll" href="#hero" title="Intro">Home</a></li>
                <li><a className="smoothscroll" href="#about" title="About">About</a></li>
                <li><a className="smoothscroll" href="#services" title="Portfolio">Services</a></li>
                <li><a className="smoothscroll" href="#portfolio" title="Contact/Resume">Works</a></li>
             
              </ul>
            </nav> {/* end header-nav-wrap */}
            <a href="#0" className="btn btn--stroke btn--small">Download My Resume</a>
          </div> {/* end header-content */}
          <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
        </header>
      );
    }
  });
export default header
