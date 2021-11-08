import React from 'react'



const InputName = (getAll:any) => {
    return (
    <div className="selectInputInfo">
        <label className="titileLabel">Meno</label>
        <input className="inputInfo" type="text"  name="name"  minLength={2} maxLength={20} placeholder="Zadajte Vaše meno" onChange={getAll.handleChange} value={getAll.values.name} />
    </div>
    )
}

export default InputName
