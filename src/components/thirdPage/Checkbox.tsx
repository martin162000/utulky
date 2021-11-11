import React from 'react'
import { useSelector } from 'react-redux'




const Checkbox = (getAll:any) => {
    const showState = useSelector((state:any) => state)

    return (
        <div className="reCheckbox">
        {getAll.err.consent && <span className="errorCheckbox zoomIn">{getAll.err.consent}</span>}
        <input type="checkbox"  name="consent" defaultChecked={showState.data.consent === "yes" ? true : false } value="yes"  onChange={getAll.handleChange}/>
        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1L6 12L1 7" stroke="#AB7455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        <label>Súhlasím so spracovaním mojich osobných údajov</label>
    </div>
    )
}

export default Checkbox
