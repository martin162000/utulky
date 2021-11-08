
const validateForm = (values:any) => {
    let errors:any = {};

    if(!values.typeHelp) {
        errors.typeHelp = '*Povinné';
    }

    if((!values.utulok && !values.typeHelp) || (!values.utulok && values.typeHelp === "utulok")) {
        errors.utulok = '*Povinné';
    }

    if(!values.amount && !values.customAmount) {
        errors.amount = '*Povinné';
    }

    if(values.typeHelp && ((!values.utulok && !values.typeHelp) || (!values.utulok && values.typeHelp === "utulok")) && (values.amount || values.customAmount)) {
        if(!values.email) {
            errors.email = '*Povinné';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'E-mail adresa je nesprávna';
        }
        
        if(!values.lastname.trim()) {
            errors.lastname = '*Povinné';
        }

        if(values.mobile.length < 9) {
            errors.mobile = '*Povinné';
        } else if ((values.mobile.substr(0,4) !== "+421") && (values.mobile.substr(0,4) !== "+420")) {
            errors.mobile = 'Akceptujeme len formát s predvoľbou +421 | +420';
        }
    }


    return errors;
}

export {validateForm}
