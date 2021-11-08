import React from 'react'



const InputLastName = (getAll:any) => {
    return (
    <div className="selectInputInfo" /*style={{marginTop:  '25px'}} */ style={ getAll.err.email ? { marginTop: '25px'} : {}}>
        {getAll.err.lastname && <span className="spanError">{getAll.err.lastname}</span>}
        <label className="titileLabel">Priezvisko</label>
        <input className="inputInfo" type="text"  name="lastname" minLength={2} maxLength={30}  placeholder="Zadajte Vaše priezvisko" onChange={getAll.handleChange} value={getAll.values.lastname}/>
    </div>
    )
}

export default InputLastName
