import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../formActions/useForm'
import { validateForm } from '../formActions/validateForm'
import PageSteps from './PageSteps'
import Checkbox from './thirdPage/Checkbox'
import Review from './thirdPage/Review'


const ThirdPage = () => {

    const {handleChange, values, handleSubmit, errors} = useForm(validateForm)
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch({
            type: "SET_CURRENTPAGE",
            data: 2
        });
    }

    if (true) {
        return (
            <div className="mainColumn">
            <PageSteps page={3}/>
            <h1>Skontrolujte si zadané údaje</h1>
            <form onSubmit={e => handleSubmit(e, "third")}>
            <div className="review">
                    <Review values={values}/>
                    <Checkbox handleChange={handleChange} err={errors} values={values}/>
    
    
    
                <div className="btnGroup">
                    <button className="continueBtn back" onClick={handleBack}> Späť </button>
                    <button className="continueBtn btnSetRight" type="submit"> Odoslať formulár </button>
                </div>
    
    
            </div>
            </form>
        </div>
        )
    }

    if(false) {
        return (
            <div className="mainColumn">
                <h1>Ďakujeme, že ste podporili nadáciu.</h1>
                <div className="review">
                        <h3>Ak chcete znovu finančne pomôcť konkretnému útulku alebo nadácií, kliknite na "Znovu pomôcť"</h3>
                        <button className="againBtn" type="submit"> Znovu pomôcť </button>
                </div>
            </div>
        )
    }


   if(false) return (
        <div className="mainColumn">
            <h1>Ospravedlňujeme sa, nastala chyba.</h1>
            <div className="review">
                    <h3>Nastala chyba pri spracovaní údajov. Ak chcete znovu vyplniť formulár a pomôcť nadácií, kliknie na "Znovu vyplinť"</h3>
                    <button className="againBtnErr" type="submit"> Znovu vyplinť </button>
            </div>
        </div>
    )
}

export default ThirdPage


