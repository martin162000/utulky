import React from 'react'
import { useTranslation } from 'react-i18next';

import logoFooter from '../assets/img/logoFooter.png'

const Footer = () => {

    const {t} = useTranslation();
    
    return (
        <footer>
            <div>
                <img src={logoFooter} alt="Good boy logo" />
            </div>

            <div>
                <h2>{t('footerFirstTitle')}</h2>
                <ul>
                <li><a href="https://www.goodrequest.com/about-us" target = "_blank" rel = "noopener noreferrer"> {t('footerAboutProject')}</a></li>
                <li><a href="https://www.goodrequest.com/sk/sluzby" target = "_blank" rel = "noopener noreferrer"> {t('footerHowTo')}</a></li>
                <li><a href="https://www.goodrequest.com/contact" target = "_blank" rel = "noopener noreferrer"> {t('footerContact')}</a></li>
                </ul>
            </div>

            <div>
                <h2>{t('footerSecondTitle')}</h2>
                <p>
                    {t('footerSecondText')}
                </p>
            </div>

            <div>
                <h2>{t('footerSecondTitle')}</h2>
                <p>
                     {t('footerThirdText')}
                </p>
            </div>
              
        </footer>
    )
}

export default Footer
