import React, { useEffect } from 'react'
import PageSteps from './PageSteps'
import SelectDonate from './firstPage/SelectDonate'
import SelectHelp from './firstPage/SelectHelp'
import SelectUtulky from './firstPage/SelectUtulky'
import useForm from '../formActions/useForm'
import { validateForm } from '../formActions/validateForm'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet';



const FirstPage = () => {
    const {t} = useTranslation();
    const {handleChange, values, handleSubmit, errors} = useForm(validateForm)
    const dispatch = useDispatch();

        useEffect(() => {
            dispatch({
                type: "SET_CURRENTPAGE",
                data: 1
            });
        }, [dispatch])

    return (
        <>
        <Helmet>‍
            <title>{t('seoFirstPageTitle')}</title>‍
            <meta name="description" content={t('seoFirstPageDesc')} />
            <meta property="og:title" content={t('firstPageTitle')} />
            <meta property="og:site_name" content={t('seoFirstPageTitle')}/>
            <meta property="og:locale" content={t('seoLocale')} />
            <meta property="og:type" content={t('seoType')}  />
      </Helmet>
      
        <div className="mainColumn topFadeIn">
            <PageSteps page={1}/>
            <h1>{t('firstPageTitle')}</h1>
            <form onSubmit={e => handleSubmit(e, "first")}>
                <SelectHelp handleChange={handleChange} err={errors}/>
                <SelectUtulky handleChange={handleChange} err={errors} values={values} />
                <SelectDonate handleChange={handleChange} err={errors} values={values}  />

                <div className="btnGroup">
                    <button className="continueBtn btnSetRight" type="submit">{t('continue')}</button>
                </div>
            </form>
        </div>
        </>
        )
}

export default FirstPage
