import React from 'react'
import { useTranslation } from 'react-i18next';

import fbIcon from '../assets/img/header/fbIcon.png';
import igIcon from '../assets/img/header/igIcon.png';

const Header = () => {
  const {t} = useTranslation();
    return (
        <nav className="header">
          <ul>
            <li> <a href="/">{t('headerTextTitle')}</a></li>
            <li> <a href="https://www.instagram.com/goodrequest/" target = "_blank" rel = "noopener noreferrer"> <img src={igIcon} alt="instagram icon"  className="igIcon"/></a></li>
            <li> <a href="https://www.facebook.com/GoodRequestCom" target = "_blank" rel = "noopener noreferrer"> <img src={fbIcon} alt="facebook icon"  className="fbIcon"/></a></li>
          </ul>
        </nav>
    )
}

export default Header
