import React from 'react'
import PageSteps from './PageSteps'
import useForm from '../formActions/useForm'
import { validateForm } from '../formActions/validateForm'
import InputName from './secondPage/InputName'
import InputLastName from './secondPage/InputLastName'
import InputEmail from './secondPage/InputEmail'
import InputNumber from './secondPage/InputNumber'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'




const SecondPage = () => {
    const {t} = useTranslation();
    const {handleChange, values, handleSubmit, errors} = useForm(validateForm)
    const dispatch = useDispatch();

    const handleBack = () => {
        const elm = document.querySelector<HTMLElement>('.mainColumn')!;
        elm.classList.add("rightFadeOut");
        elm.classList.remove("leftFadeIn");

        setTimeout(() => {
            elm.style.display = 'none';
          }, 230);
      
        setTimeout(() => {
            dispatch({
                type: "SET_CURRENTPAGE",
                data: 1
            });
        }, 250);
    
    }



    return (
        <>
        <Helmet>‍
            <title>{t('seoSecondPageTitle')}</title>‍
            <meta name="description" content={t('seoSecondPageDesc')} />
            <meta property="og:title" content={t('secondPageTitle')} />
            <meta property="og:site_name" content={t('seoSecondPageTitle')}/>
            <meta property="og:locale" content={t('seoLocale')} />
            <meta property="og:type" content={t('seoType')}  />
        </Helmet>
        
        <div className="mainColumn leftFadeIn">
        <PageSteps page={2}/>
        <h1>{t('secondPageTitle')}</h1>
        <form onSubmit={e => handleSubmit(e, "second")}>
        <div className="selectInfo">
            <label>{t('secondPageAbout')}</label>

            <InputName handleChange={handleChange} err={errors} values={values} />
            <InputLastName handleChange={handleChange} err={errors} values={values} />
            <InputEmail handleChange={handleChange} err={errors} values={values} />
            <InputNumber handleChange={handleChange} err={errors} values={values} />
            <div className="btnGroup">
                <button className="continueBtn back" type="button" onClick={handleBack}> {t('back')} </button>
                <button className="continueBtn btnSetRight" type="submit"> {t('continue')} </button>
            </div>

        </div>
        </form>
    </div>
        </>
    )
}

export default SecondPage
