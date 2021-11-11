import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';


const ResponsePage = () => {
    const {t} = useTranslation();
    const showState = useSelector((state:any) => state)
    const dispatch = useDispatch();
    const index = showState.utulky.findIndex( (x:any) => x.name ===showState.data.utulok);
    const [responseState, setResponseState] = useState("Loading")


    useEffect(() => {
        axios.post('https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute', { 
            firstName: showState.data.name,
            lastName: showState.data.lastname,
            email: showState.data.email,
            value: showState.data.amount + showState.data.customAmount,
            phone: showState.data.mobile,
            shelterID: showState.utulok ? showState.utulky[index].id : 0
        }).then(response => {
               // console.log(response)
               setResponseState("ResponseTrue")
            })
            .catch(error => {
               // console.error('ERROR', error);
               setResponseState("ResponseFalse")
            }); 
    }, [showState,index])




    const handleAgain = () => {
        dispatch({
            type: "SET_CURRENTPAGE",
            data: 1
        });

        dispatch({
            type: "ADD_DATA",
            data: false
        });
    }

    if(responseState === "ResponseTrue") {
        return ( 
        <>
        <Helmet>‍
            <title>{t('seoFourthPageTitleTrue')}</title>‍
            <meta name="description" content={t('seoFourthPageDescTrue')} />
            <meta property="og:title" content={t('fourthPageTitleTrue')} />
            <meta property="og:site_name" content={t('seoFourthPageTitleTrue')}/>
            <meta property="og:locale" content={t('seoLocale')} />
            <meta property="og:type" content={t('seoType')}  />
        </Helmet>
        
            <div className="mainColumn zoomOutIn">
                <h1>{t('responseSuccessfullyTitle')}</h1>
                <div className="review">
                        <h3>{t('responseSuccessfullyText')}</h3>
                        <button className="againBtn" onClick={handleAgain}> {t('responseSuccessfullyButton')} </button>
                </div>
            </div>
        </>
        )
    } else if(responseState === "ResponseFalse") {
        return ( 
        <>
        <Helmet>‍
            <title>{t('seoFourthPageTitleFalse')}</title>‍
            <meta name="description" content={t('seoFourthPageDescFalse')} />
            <meta property="og:title" content={t('fourthPageTitleFalse')} />
            <meta property="og:site_name" content={t('seoFourthPageTitleFalse')}/>
            <meta property="og:locale" content={t('seoLocale')} />
            <meta property="og:type" content={t('seoType')}  />
        </Helmet>

        <div className="mainColumn zoomOutIn">
                <h1>{t('responseFalseTitle')}</h1>
                <div className="review">
                        <h3>{t('responseFalseText')}</h3>
                        <button className="againBtnErr" onClick={handleAgain}> {t('responseFalseButton')}</button>
                </div>
            </div>
        </>
        )
    } else {
        return (
        <>
        <Helmet>‍
            <title>{t('seoFourthPageTitle')}</title>‍
            <meta name="description" content={t('seoFourthPageDesc')} />
            <meta property="og:title" content={t('fourthPageTitle')} />
            <meta property="og:site_name" content={t('seoFourthPageTitle')}/>
            <meta property="og:locale" content={t('seoLocale')} />
            <meta property="og:type" content={t('seoType')}  />
        </Helmet>

             <div>
                {t('responseLoading')}
            </div>
        </>
        )
    }

}

export default ResponsePage
