import i18n  from '../i18n';


const validateForm = (values:any, whichPage:any) => {
    let errors:any = {};

    if(whichPage === "first") {
        if(!values.typeHelp) {
            errors.typeHelp = i18n.t('showErrorHelp')
        }

        if((!values.utulok && !values.typeHelp) || (!values.utulok && values.typeHelp === "utulok")) {
            errors.utulok = i18n.t('showErrorShelter')
        }

        if(!values.amount && !values.customAmount ) {
            errors.amount= i18n.t('showErrorAmount')
        } else if(parseFloat(values.customAmount) < 1) {
            errors.amount= i18n.t('showErrorAmountLess1')
        }

    } else if(whichPage === "second") {
        let pattern = /[^+0-9]+$/;
        if(!values.email) {
            errors.email= i18n.t('showErrorEmail')
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email= i18n.t('showErrorEmailBad')
        }
        
        if(!values.lastname.trim()) {
            errors.lastname = i18n.t('showErrorLastname')
        }


        if(values.mobile.length < 2) {
            errors.mobile = i18n.t('showErrorMobile')
        } else if((values.mobile.substr(0,4) !== "+421") && (values.mobile.substr(0,4) !== "+420")) {
            errors.mobile = i18n.t('showErrorMobileBadFormat')
        } else if(values.mobile.length !== 13) {
            errors.mobile = i18n.t('showErrorMobileShort')
        } else if(pattern.test(values.mobile)) {
            console.log(pattern.test(values.mobile))
            errors.mobile = i18n.t('showErrorMobilePattern')
        }
    } else if(whichPage === "third") {
        if(!values.consent) {
            errors.consent = i18n.t('showErrorConsent')
        } 
    }

    return errors;
}

export {validateForm}
