import React from 'react'

import fbIcon from '../assets/img/header/fbIcon.png';
import igIcon from '../assets/img/header/igIcon.png';

const Header = () => {
    return (
        <nav className="header">
          <ul>
            <li>Nadácia Good Boy</li>
            <li> <img src={igIcon} alt="instagram icon"  className="igIcon"/></li>
            <li> <img src={fbIcon} alt="facebook icon"  className="fbIcon"/></li>
          </ul>
        </nav>
    )
}

export default Header
