import React from 'react'

import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";



const InputEmail = (getAll:any) => {
    const { t }: {t: TFunction} = useTranslation()
    return (
    <div className={(getAll.err.email) ? "selectInputInfo inputInfoError errorOutline" : "selectInputInfo "}>
        {getAll.err.email && <span className="spanError zoomIn">{getAll.err.email}</span>}
        <label className="titileLabel">{t('inputEmail')}</label>
        <input className="inputInfo" type="email"  name="email" placeholder={t('inputEmailPlaceholder')} onChange={getAll.handleChange} value={getAll.values.email}/>
    </div>
    )
}

export default InputEmail
