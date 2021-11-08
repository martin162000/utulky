import React from 'react'
import PageSteps from './PageSteps'
import SelectDonate from './firstPage/SelectDonate'
import SelectHelp from './firstPage/SelectHelp'
import SelectUtulky from './firstPage/SelectUtulky'
import useForm from '../formActions/useForm'
import { validateForm } from '../formActions/validateForm'



const FirstPage = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validateForm)
    return (

        <div className="mainColumn">
            <PageSteps page={1}/>
            <h1>Vyberte si možnosť, ako chcete pomôcť</h1>
            <form onSubmit={handleSubmit}>
                <SelectHelp handleChange={handleChange} err={errors}/>
                <SelectUtulky handleChange={handleChange} err={errors} values={values} />
                <SelectDonate handleChange={handleChange} err={errors} values={values}  />
                <button className="continueBtn" type="submit"> Pokračovať </button>
            </form>
        </div>
    )
}

export default FirstPage
