
const validateForm = (values:any, whichPage:any) => {
    let errors:any = {};

    if(whichPage === "first") {
        if(!values.typeHelp) {
            errors.typeHelp = '*Povinné';
        }

        if((!values.utulok && !values.typeHelp) || (!values.utulok && values.typeHelp === "utulok")) {
            errors.utulok = '*Povinné';
        }

        if(!values.amount && !values.customAmount ) {
            errors.amount = '*Povinné';
        } else if(parseFloat(values.customAmount) < 1) {
            errors.amount = 'Minimálna suma je 1$';
        }

    } else if(whichPage === "second") {
        let pattern = /[^+0-9]+$/;
        if(!values.email) {
            errors.email = '*Povinné';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'E-mail adresa je nesprávna';
        }
        
        if(!values.lastname.trim()) {
            errors.lastname = '*Povinné';
        }


        if(values.mobile.length < 2) {
            errors.mobile = '*Povinné';
        } else if((values.mobile.substr(0,4) !== "+421") && (values.mobile.substr(0,4) !== "+420")) {
            errors.mobile = 'Akceptujeme len formát s predvoľbou +421 | +420';
        } else if(values.mobile.length !== 13) {
            errors.mobile = 'Číslo je príliš krátke';
        } else if(pattern.test(values.mobile)) {
            console.log(pattern.test(values.mobile))
            errors.mobile = 'Použivate nepovolené znaky';
        }
    }

    return errors;
}

export {validateForm}
