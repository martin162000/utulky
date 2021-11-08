import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const useForm = (validateForm:any) => {

    const dispatch = useDispatch();


    const [values, setValues] = useState({
        typeHelp: '',
        utulok: '',
        amount: '',
        customAmount: ''

    })


 const [isSubmit, setIsSubmit] = useState(false)   


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
    setIsSubmit(true)
}

useEffect(() => {

    if(Object.keys(errors).length === 0 && isSubmit === true) {
        dispatch({
            type: "ADD_DATA",
            data: values
        });
        setIsSubmit(false)
    } 
}, [isSubmit,errors,values,dispatch])


    return {handleChange, values, handleSubmit, errors}

}

export default useForm