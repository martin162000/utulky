import React, { useEffect, useState } from 'react'
import skFlag from '../../assets/img/slovakia.png'
import czFlag from '../../assets/img/czech.png'
import { useSelector } from 'react-redux'


const InputNumber = (getAll:any) => {
    
    const showState = useSelector((state:any) => state)
    const [stateNumber, setStateNumber] = useState(getAll.values.mobile)


    const handleMobile = (e:any) => {
        let pattern = /[^+0-9\.]+$/;
        if(!pattern.test(e.target.value) && e.target.value.length < 14){
                setStateNumber(e.target.value)
        }
    }

    const handleFlag = () => {
        if(stateNumber.substring(0, 4) === "+421"){
            return skFlag
        } else if (stateNumber.substring(0, 4) === "+420") {
            return czFlag
        }
        return skFlag
    }

    useEffect(() => {


        if(stateNumber.length < 5) {
            if(stateNumber.substr(0,1) !== "+") {
                setStateNumber(stateNumber.replace(/[^+]{1}/g, ''))
            } else if(stateNumber.substr(0,2) !== "+4") {
                setStateNumber(stateNumber.replace(/[^4]{2}/g, '+'))

            } else if(stateNumber.substr(0,3) !== "+42") {
                setStateNumber(stateNumber.replace(/[^2]{3}/g, '+4'))
                
            } else if(stateNumber.substr(0,4) !== "+421" || stateNumber.substr(0,4) !== "+420") {
                setStateNumber(stateNumber.replace(/[^10]{4}/g, '+42'))
            }
    }

            if(showState.data.mobile.length > 2) {
             setStateNumber(getAll.values.mobile)

        }

    }, [stateNumber, showState, getAll])


    return (
    <div className="selectInputInfo" /*style={{marginTop:  '25px'}} */ style={ getAll.err.email ? { marginTop: '25px'} : {}}>
        {getAll.err.mobile && <span className="spanError">{getAll.err.mobile}</span>}
        <label className="titileLabel">Telefónne číslo</label>
        <img src={handleFlag()} alt="countryFlag" />
        <input className="inputInfo inputPhone" type="tel" name="mobile" placeholder="+421 | +420" maxLength={13}  onChange={e => { handleMobile(e); getAll.handleChange(e) }}  value={stateNumber}/>
    </div>
    )
}

export default InputNumber
