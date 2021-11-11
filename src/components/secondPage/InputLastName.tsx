import React from 'react'
import { TFunction, useTranslation } from 'react-i18next';



const InputLastName = (getAll:any) => {
    const { t }: {t: TFunction} = useTranslation()
    return (
    <div className={(getAll.err.lastname) ? "selectInputInfo inputInfoError errorOutline" : "selectInputInfo "}>
        {getAll.err.lastname && <span className="spanError zoomIn">{getAll.err.lastname}</span>}
        <label className="titileLabel">{t('inputLastname')}</label>
        <input className="inputInfo" type="text"  name="lastname" minLength={2} maxLength={30} placeholder={t('inputLastnamePlaceholder')} onChange={getAll.handleChange} value={getAll.values.lastname}/>
    </div>
    )
}

export default InputLastName
