import { useState, useEffect } from "react";

const useForm = (validateForm:any) => {
    const [values, setValues] = useState({
        typeHelp: '',
        utulok: '',
        amount: '',
        customAmount: ''

    })


const [errors, setErrors] = useState({})

const handleChange = (e:any) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })

        if(name === "utulok") {
            e.currentTarget.classList.add("selectedColor")
        } else if (name === "amount") {
            setValues({
                ...values,
                [name]:value,
                "customAmount":""
            })
        } else if (name === "customAmount") {
            setValues({
                ...values,
                [name]:value,
                "amount":""
            }) 
        } else if (name === "typeHelp") {
           const test = document.querySelector<HTMLElement>('.optionsUtulky')!;
           test.classList.remove("selectedColor");
            setValues({
                ...values,
                [name]:value,
                "utulok":""
            }) 
        } 
    }

const handleSubmit = (e:any) => {
    e.preventDefault();
    setErrors(validateForm(values));
}

    return {handleChange, values, handleSubmit, errors}

}

export default useForm