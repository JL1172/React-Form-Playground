import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useForm = (key, initialValue) => {
    const [data, setData] = useState(initialValue);
    //*need to make custom hook for these
    const [firstPage, setFirstPage] = useState(true);
    const [secondPage, setSecondPage] = useState(false);
    const [thirdPage, setThirdPage] = useState(false);
    //*need to make custom hook for these

    const change = (evt) => {
        const valueToUse = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
        setData({
            ...data,
            [evt.target.name]: valueToUse,
        })
    }
    const submit = (evt) => {
        evt.preventDefault();
        const newUser = {
            fname: data.fname,
            lname: data.lname,
            email: data.email,
            state: data.state,
            username: data.username,
            terms: data.terms,
        }
        axios.post("https://reqres.in/api/users", newUser)
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.error(err))
    }
    //!nav
    const navigate = useNavigate();
    const navBack = useNavigate();
    const navLast = useNavigate();
    const navigateBack = () => {
        navBack("/form-1");
        setSecondPage(!secondPage);
        setFirstPage(!firstPage);
    }
    const navigateForward = () => {
        navigate("contact")
        setFirstPage(!firstPage);
        setSecondPage(!secondPage);
    }
    const navigateLast = () => {
        navLast("profile")
    }
    //!nav
    return [data, change, submit, navigateBack, navigateForward,navigateLast, firstPage, secondPage]
}