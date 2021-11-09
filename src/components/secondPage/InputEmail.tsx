import React from 'react'



const InputEmail = (getAll:any) => {
    return (
    <div className={(getAll.err.email) ? "selectInputInfo inputInfoError" : "selectInputInfo "}>
        {getAll.err.email && <span className="spanError">{getAll.err.email}</span>}
        <label className="titileLabel">E-mailová adresa</label>
        <input className="inputInfo" type="email"  name="email" placeholder="Zadajte Váš e-mail" onChange={getAll.handleChange} value={getAll.values.email}/>
    </div>
    )
}

export default InputEmail
