import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    //!nav
    const navigate = useNavigate();
    const navBack = useNavigate();
    const navLast = useNavigate();
    const navigateBack = (e) => {
        e.preventDefault();
        navBack("/form-1");
        setData({...data,
            secondPage : !data.secondPage,
            firstPage : !data.firstPage,
        })
    }
    const navigateForward = (e) => {
        e.preventDefault();
        navigate("contact")
        setData({...data,
            secondPage : !data.secondPage,
            firstPage : !data.firstPage,
        })
    }
    const navigateLast = (e) => {
        e.preventDefault(e);
        navLast("profile")
        setData({...data,
            secondPage : !data.secondPage,
            thirdPage : !data.thirdPage,
        })
    }
    //!nav
    return [data, change, submit, navigateBack, navigateForward,navigateLast]
}