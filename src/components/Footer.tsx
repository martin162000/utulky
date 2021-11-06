import React from 'react'

import logoFooter from '../assets/img/logoFooter.png'

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logoFooter} alt="Good boy logo" />
            </div>

            <div>
                <h2>Nadácia Good boy</h2>
                <ul>
                <li><a href="https://www.goodrequest.com/about-us" target = "_blank" rel = "noopener noreferrer"> O projekte</a></li>
                <li><a href="https://www.goodrequest.com/sk/sluzby" target = "_blank" rel = "noopener noreferrer"> Ako na to</a></li>
                <li><a href="https://www.goodrequest.com/contact" target = "_blank" rel = "noopener noreferrer"> Kontakt</a></li>
                </ul>
            </div>

            <div>
                <h2>Nadácia Good boy</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.
                </p>
            </div>

            <div>
                <h2>Nadácia Good boy</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.
                </p>
            </div>
              
        </footer>
    )
}

export default Footer
