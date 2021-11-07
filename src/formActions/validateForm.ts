
const validateForm = (values:any) => {
    let errors:any = {};

    /*if(!values.email) {
        errors.email = '*Povinné';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'E-mail adresa je nesprávna';
      }
    */

    if(!values.typeHelp) {
        errors.typeHelp = '*Povinné';
    }

    if((!values.utulok && !values.typeHelp) || (!values.utulok && values.typeHelp === "utulok")) {
        errors.utulok = '*Povinné';
    }

    if(!values.amount && !values.customAmount) {
        errors.amount = '*Povinné';
    }


    return errors;
}

export {validateForm}
