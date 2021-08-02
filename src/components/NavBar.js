import React from 'react';

const NavBar = () => {

    return(
        <nav className="App-nav">
          <p className="App-title"> Start Bootstrap </p>
          <ul className="nav-links">
            <li className="link-item">
              <a className="link"> Services </a>
            </li>
            <li className="link-item">
              <a className="link"> Portfolio </a>
            </li>
            <li className="link-item">
              <a className="link"> About </a>
            </li>
            <li className="link-item">
              <a className="link"> Team </a>
            </li>
            <li className="link-item">
              <a className="link"> Contact </a>
            </li>
          </ul>
        </nav>
    );
};

export default NavBar;