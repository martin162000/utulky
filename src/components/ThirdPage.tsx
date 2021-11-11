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

        const elm = document.querySelector<HTMLElement>('.mainColumn')!;
        elm.classList.add("rightFadeOut");
        elm.classList.remove("leftFadeIn");


        setTimeout(() => {
            elm.style.display = 'none';
          }, 230);
      

        setTimeout(() => {
            dispatch({
                type: "SET_CURRENTPAGE",
                data: 2
            });
        }, 250);
    }


        return (
            <div className="mainColumn leftFadeIn">
            <PageSteps page={3}/>
            <h1>Skontrolujte si zadané údaje</h1>
            <form onSubmit={e => handleSubmit(e, "third")}>
            <div className="review">
                    <Review values={values}/>
                    <Checkbox handleChange={handleChange} err={errors} values={values}/>
    
    
    
                <div className="btnGroup">
                    <button className="continueBtn back" type="button" onClick={handleBack}> Späť </button>
                    <button className="continueBtn btnSetRight" type="submit"> Odoslať formulár </button>
                </div>
    
    
            </div>
            </form>
        </div>
        )
    
}
export default ThirdPage
