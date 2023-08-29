import { useState } from "react";
import axios from "axios";

export const useForm = (key, initialValue) => {
    const [data, setData] = useState(initialValue);

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
        .then((res)=> {
            console.log(res)
        })
        .catch(err=>console.error(err))
    }
    return [data, change, submit]
}