import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValue) => {
    const [data, setData,navigateBack,navigateForward,navigateLast,navigateToSecond] = useLocalStorage(key,initialValue);
    
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
            password : data.password,
            firstPage : data.firstPage,
            secondPage : data.secondPage,
            thirdPage : data.thirdPage,
        }
        axios.post("https://reqres.in/api/users", newUser)
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.error(err))
    }
   
    return [data, change, submit]
}