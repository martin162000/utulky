import { TFunction } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'



const InputName = (getAll:any) => {
    const { t }: {t: TFunction} = useTranslation()
    return (
    <div className="selectInputInfo">
        <label className="titileLabel">{t('inputName')}</label>
        <input className="inputInfo" type="text"  name="name"  minLength={2} maxLength={20} placeholder={t('inputNamePlaceholder')} onChange={getAll.handleChange} value={getAll.values.name} />
    </div>
    )
}

export default InputName
