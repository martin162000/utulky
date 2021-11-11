import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'



const Review = (getAll:any) => {
    const {t} = useTranslation();
    const showState = useSelector((state:any) => state)

    const help = () => {
        if(showState.data.typeHelp === "nadacia") {
            return (<p>{t('foundnationHelp')}</p> )
        } else if (showState.data.typeHelp === "utulok") {
            return (<p>{t('shelterHelp')}</p> )
        } else {
            return (<p>{t('reviewNotShelter')}</p>)
        }
    }

    const tel = () => {
        if(showState.data.mobile) {
            let numberBeautify = (showState.data.mobile.substr(0,4) +" "+ showState.data.mobile.substr(4,3) + " " + showState.data.mobile.substr(7,3) + " " + showState.data.mobile.substr(10,3))
            return (<p> {numberBeautify} </p>)
        } else {
            return (<p>{t('reviewNotMobile')}</p>)
        }
    }





    return (
        <div>
            
            <div className="reInfo">
                <h2>{t('infoHelp')}</h2>
                {help()}
            </div>

            <div className="reInfo">
                <h2>{t('infoShelter')}</h2>
                <p>{showState.data.utulok ? showState.data.utulok : t('notShelterMessage')}</p>
            </div>

            <div className="reInfo">
                <h2>{t('infoAmount')}</h2>
                <p>{(showState.data.amount || showState.data.customAmount)   ? (showState.data.amount + showState.data.customAmount) + " " + t('currency') : t('notAmount')}</p>
            </div>

            <div className="reInfo">
                <h2>{t('infoNameLastname')}</h2>
                <p>{showState.data.name} {showState.data.lastname ? showState.data.lastname : t('notLastname')}</p>
            </div>


            <div className="reInfo">
                <h2>{t('infoEmail')}</h2>
                <p>{showState.data.email ? showState.data.email : t('notEmail')}</p>
            </div>

            <div className="reInfo">
                <h2>{t('infoMobile')}</h2>
                {tel()}
            </div>
        </div>
    )
}

export default Review
