import React from 'react'
import PageSteps from './PageSteps'
import SelectDonate from './firstPage/SelectDonate'
import SelectHelp from './firstPage/SelectHelp'
import SelectUtulky from './firstPage/SelectUtulky'



const FirstPage = () => {
    return (

        <div className="mainColumn">
            <PageSteps page={1}/>
            <h1>Vyberte si možnosť, ako chcete pomôcť</h1>
            <SelectHelp />
            <SelectUtulky />
            <SelectDonate />
            <button className="continueBtn" type="submit"> Pokračovať </button>
        </div>
    )
}

export default FirstPage
