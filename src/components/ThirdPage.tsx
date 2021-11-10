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
export default ThirdPage
