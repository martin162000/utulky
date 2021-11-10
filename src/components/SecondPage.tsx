import React from 'react'
import PageSteps from './PageSteps'
import useForm from '../formActions/useForm'
import { validateForm } from '../formActions/validateForm'
import InputName from './secondPage/InputName'
import InputLastName from './secondPage/InputLastName'
import InputEmail from './secondPage/InputEmail'
import InputNumber from './secondPage/InputNumber'
import { useDispatch } from 'react-redux'




const SecondPage = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validateForm)
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch({
            type: "SET_CURRENTPAGE",
            data: 1
        });
    }


    return (
        <div className="mainColumn">
        <PageSteps page={2}/>
        <h1>Potrebujeme od Vás zopár informácií</h1>
        <form onSubmit={e => handleSubmit(e, "second")}>
        <div className="selectInfo">
            <label>O vás</label>

            <InputName handleChange={handleChange} err={errors} values={values} />
            <InputLastName handleChange={handleChange} err={errors} values={values} />
            <InputEmail handleChange={handleChange} err={errors} values={values} />
            <InputNumber handleChange={handleChange} err={errors} values={values} />
            <div className="btnGroup">
                <button className="continueBtn back" onClick={handleBack}> Späť </button>
                <button className="continueBtn btnSetRight" type="submit"> Pokračovať </button>
            </div>

        </div>
        </form>
    </div>

    )
}

export default SecondPage
