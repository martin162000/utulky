import React from 'react'



const Review = (getAll:any) => {
    return (
        <div>
            
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
        </div>
    )
}

export default Review
