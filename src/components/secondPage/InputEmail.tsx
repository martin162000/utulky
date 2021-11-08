import React from 'react'



const InputEmail = (getAll:any) => {
    return (
    <div className="selectInputInfo" /*style={{marginTop:  '25px'}} */ style={ getAll.err.email ? { marginTop: '25px'} : {}}>
        {getAll.err.email && <span className="spanError">{getAll.err.email}</span>}
        <label className="titileLabel">E-mailová adresa</label>
        <input className="inputInfo" type="email"  name="email" placeholder="Zadajte Váš e-mail" onChange={getAll.handleChange} value={getAll.values.email}/>
    </div>
    )
}

export default InputEmail
