import React from 'react'
import { useSelector } from 'react-redux'



const Review = (getAll:any) => {
    const showState = useSelector((state:any) => state)

    const help = () => {
        if(showState.data.typeHelp === "nadacia") {
            return (<p>Chcem finančne prispieť celej nadácii</p> )
        } else if (showState.data.typeHelp === "utulok") {
            return (<p>Chcem finančne prispieť konkrétnemu útulku</p> )
        } else {
            return (<p> Musíte vybrať formu pomoci (nadácia / útulok)</p>)
        }
    }

    const tel = () => {
        if(showState.data.mobile) {
            let numberBeautify = (showState.data.mobile.substr(0,4) +" "+ showState.data.mobile.substr(4,3) + " " + showState.data.mobile.substr(7,3) + " " + showState.data.mobile.substr(10,3))
            return (<p> {numberBeautify}</p>)
        } else {
            return (<p> Musíte zadať svoje číslo pred odoslaním formuláru</p>)
        }
    }





    return (
        <div>
            
            <div className="reInfo">
                <h2>Akou formou chcem pomôcť</h2>
                {help()}
            </div>

            <div className="reInfo">
                <h2>Najviac mi záleží na útulku</h2>
                <p>{showState.data.utulok ? showState.data.utulok : "Prispievam peniaze pre celú nadáciu"}</p>
            </div>

            <div className="reInfo">
                <h2>Suma ktorou chcem pomôcť</h2>
                <p>{(showState.data.amount || showState.data.customAmount)   ? (showState.data.amount + showState.data.customAmount) + " €" : "Musíte vyplniť sumu"}</p>
            </div>

            <div className="reInfo">
                <h2>Meno a priezvisko</h2>
                <p>{showState.data.name} {showState.data.lastname ? showState.data.lastname : "Musíte zadať priezvisko"}</p>
            </div>


            <div className="reInfo">
                <h2>E-mailová adresa</h2>
                <p>{showState.data.email ? showState.data.email : "Musíte zadať email"}</p>
            </div>

            <div className="reInfo">
                <h2>Telefónne číslo</h2>
                <p>{tel()}</p>
            </div>
        </div>
    )
}

export default Review
