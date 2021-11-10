import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useForm = (validateForm:any) => {

    const dispatch = useDispatch();
    const getData = useSelector((state:any) => state)


    const [values, setValues] = useState({
        typeHelp: '',
        utulok: '',
        amount: '',
        customAmount: '',
        name: '',
        lastname: '',
        email: '',
        mobile: '',
        consent: ''

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
        else if (name === "consent") {
                if(e.target.checked) {
                setValues({
                    ...values,
                    [name]:value
                }) 
            } else {
                setValues({
                    ...values,
                    [name]:""
                }) 
            }
         } 
    }

const handleSubmit = (e:any, page:any) => {
    e.preventDefault();
    setErrors(validateForm(values,page));
    setIsSubmit(true)
}


///////////////////// Post data to state only one time when load component 
useEffect(() => {

    if(getData.data !== false) {
        setValues(getData.data);
    }
    
}, [getData])
/////////////////////

useEffect(() => {

    if(Object.keys(errors).length === 0 && isSubmit === true) {
        dispatch({
            type: "ADD_DATA",
            data: values
        });

        if(isSubmit && getData.currentPage === 1) {
            dispatch({
                type: "SET_CURRENTPAGE",
                data: 2
            });
        } else if(isSubmit && getData.currentPage === 2) {
            dispatch({
                type: "SET_CURRENTPAGE",
                data: 3
            });
        }
            setIsSubmit(false)
    } 
    
}, [isSubmit,errors,values,dispatch, getData])


    return {handleChange, values, handleSubmit, errors}

}

export default useForm