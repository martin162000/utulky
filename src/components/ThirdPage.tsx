import React from 'react'
import PageSteps from './PageSteps'


const ThirdPage = () => {
    return (
        <div className="mainColumn">
        <PageSteps page={3}/>
        <h1>Skontrolujte si zadané údaje</h1>
        <form>
        <div className="review">

            <div className="reInfo">
                <h2>Akou formou chcem pomôcť</h2>
                <p>Chcem finančne prispieť celej nadácii</p>
            </div>

            <div className="reInfo">
                <h2>Najviac mi záleží na útulku</h2>
                <p>Mestský útulok, Žilina</p>
            </div>

            <div className="reInfo">
                <h2>Suma ktorou chcem pomôcť</h2>
                <p>50€</p>
            </div>

            <div className="reInfo">
                <h2>Meno a priezvisko</h2>
                <p>Peter Reguli</p>
            </div>


            <div className="reInfo">
                <h2>E-mailová adresa</h2>
                <p>peter.reguli@goodrequest.com</p>
            </div>

            <div className="reInfo">
                <h2>Telefónne číslo</h2>
                <p>+421 902 237 207</p>
            </div>

            <div className="reCheckbox">
                <input type="checkbox"  name="horns"/>
                <label>Horns</label>
            </div>

            <div className="btnGroup">
                <button className="continueBtn back"> Späť </button>
                <button className="continueBtn btnSetRight" type="submit"> Odoslať formulár </button>
            </div>

        </div>
        </form>
    </div>
    )
}

export default ThirdPage
