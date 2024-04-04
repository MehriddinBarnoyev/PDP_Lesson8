// Header.js
import React, { Component } from 'react';
import './Header.css';
import ThemeContext from '../../Contexts/ThemeContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { Instagram, LinkedinIcon, YoutubeIcon } from 'lucide-react';
// import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'

export default class Header extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => {
          return (
            <header className={`shadow ${theme}`}>
              <div className="container py-3 d-flex align-items-center align-items-center justify-content-between">
                <div className='py-4 d-flex align-items-center align-items-center justify-content-between '>
                  <div>

                    <h5>Barnoyev Mehriddin</h5>
                  </div>
                  <div className='d-flex'>

                    <h6  className={`info ${this.context.theme} ms-3`}>Section 1</h6>
                    <h6  className={`info ${this.context.theme} ms-3`}>Section 1</h6>
                    <h6  className={`info ${this.context.theme} ms-3`}>Section 1</h6>
                   
                  </div>
                </div>
                <div className='d-flex gap-2 align-items-center'  >
                  <Instagram />
                  <LinkedinIcon />
                  <YoutubeIcon />
                  <button className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"
                    }`}
                    onClick={toggleTheme}
                  >
                    {theme === "dark" ? "Day" : "Night"}
                  </button>
                </div>
              </div>
            </header>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
