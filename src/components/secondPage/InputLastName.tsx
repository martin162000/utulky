import React from 'react'



const InputLastName = (getAll:any) => {
    return (
    <div className={(getAll.err.lastname) ? "selectInputInfo inputInfoError errorOutline" : "selectInputInfo "}>
        {getAll.err.lastname && <span className="spanError zoomIn">{getAll.err.lastname}</span>}
        <label className="titileLabel">Priezvisko</label>
        <input className="inputInfo" type="text"  name="lastname" minLength={2} maxLength={30}  placeholder="Zadajte Vaše priezvisko" onChange={getAll.handleChange} value={getAll.values.lastname}/>
    </div>
    )
}

export default InputLastName
