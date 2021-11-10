import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const ResponsePage = () => {
    const showState = useSelector((state:any) => state)
    const dispatch = useDispatch();
    const index = showState.utulky.findIndex( (x:any) => x.name ===showState.data.utulok);
    const [responseState, setResponseState] = useState("Loading")


    useEffect(() => {
        axios.post('https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute', { 
            firstName: showState.data.name,
            lastName: showState.data.lastname,
            email: showState.data.email,
            value: showState.data.amount + showState.data.customAmount,
            phone: showState.data.mobile,
            shelterID: showState.utulok ? showState.utulky[index].id : 0
        }).then(response => {
               // console.log(response)
               setResponseState("ResponseTrue")
            })
            .catch(error => {
               // console.error('ERROR', error);
               setResponseState("ResponseFlase")
            }); 
    }, [showState,index])




    const handleAgain = () => {
        dispatch({
            type: "SET_CURRENTPAGE",
            data: 1
        });

        dispatch({
            type: "ADD_DATA",
            data: false
        });
    }

    if(responseState === "ResponseTrue") {
        return (
            <div className="mainColumn">
                <h1>Ďakujeme, že ste podporili nadáciu.</h1>
                <div className="review">
                        <h3>Ak chcete znovu finančne pomôcť konkretnému útulku alebo nadácií, kliknite na "Znovu pomôcť"</h3>
                        <button className="againBtn" onClick={handleAgain}> Znovu pomôcť </button>
                </div>
            </div>
        )
    } else if(responseState === "ResponseFlase") {
        return (
        <div className="mainColumn">
                <h1>Ospravedlňujeme sa, nastala chyba.</h1>
                <div className="review">
                        <h3>Nastala chyba pri spracovaní údajov. Ak chcete znovu vyplniť formulár a pomôcť nadácií, kliknie na "Znovu vyplinť"</h3>
                        <button className="againBtnErr" onClick={handleAgain}> Znovu vyplinť </button>
                </div>
            </div>
        )
    } else {
        return (
             <div>
                ...LOADING
            </div>
        )
    }

}

export default ResponsePage
