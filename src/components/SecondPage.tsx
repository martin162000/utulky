import React, { useEffect, useState } from 'react'
import PageSteps from './PageSteps'

import skFlag from '../assets/img/slovakia.png'
import czFlag from '../assets/img/czech.png'



const SecondPage = () => {

    const [state, setState] = useState("")



    const handleMobile = (e:any) => {

        let pattern = /[^+0-9\.]+$/;
        if(!pattern.test(e.target.value) && e.target.value.length < 14){
                setState(e.target.value)
        }

    }

    const handleFlag = () => {

        if(state.substring(0, 4) === "+421"){
            return skFlag
        } else if (state.substring(0, 4) === "+420") {
            return czFlag
        }

        return skFlag

    }
    useEffect(() => {

        if(state.length < 5) {
            if(state.substr(0,1) !== "+") {
                setState(state.replace(/[^+]{1}/g, ''))
            } else if(state.substr(0,2) !== "+4") {
                setState(state.replace(/[^4]{2}/g, '+'))

            } else if(state.substr(0,3) !== "+42") {
                setState(state.replace(/[^2]{3}/g, '+4'))
                
            } else if(state.substr(0,4) !== "+421" || state.substr(0,4) !== "+420") {
                setState(state.replace(/[^10]{4}/g, '+42'))
            }
    }

    }, [state])

    return (
        <div className="mainColumn">
            <PageSteps page={2}/>
            <h1>Potrebujeme od Vás zopár informácií</h1>
            <form action="">
            <div className="selectInfo">
                <label>O vás</label>

                <div className="selectInputInfo">
                    <label className="titileLabel">Meno</label>
                    <input className="inputInfo" type="text"  name="name" placeholder="Zadajte Vaše meno"/>
                </div>

                <div className="selectInputInfo">
                    <label className="titileLabel">Priezvisko</label>
                    <input className="inputInfo" type="text"  name="lastname" placeholder="Zadajte Vaše priezvisko"/>
                </div>

                <div className="selectInputInfo">
                    <label className="titileLabel">E-mailová adresa</label>
                    <input className="inputInfo" type="email"  name="email" placeholder="Zadajte Váš e-mail"/>
                </div>

                <div className="selectInputInfo">
                    <label className="titileLabel">Telefónne číslo</label>
                    <img src={handleFlag()} alt="countryFlag" />
                    <input className="inputInfo inputPhone" type="tel"  name="mobile" placeholder="+421 | +420" value={state} onChange={handleMobile} />
                </div>


                <button className="continueBtn" type="submit"> Pokračovať </button>

            </div>
            </form>
        </div>
    )
}

export default SecondPage
