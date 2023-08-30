import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";



export const useForm = (key, initialValue,completeForm) => {
    const [data, setData] = useLocalStorage(key,initialValue);
    const [afterData,setAfterData] = useState([]);
    
    const change = (evt) => {
        setData({
            ...data,
            [evt.target.name]: evt.target.value,
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
            password : data.password,
        }
        axios.post("https://reqres.in/api/users", newUser)
            .then((res) => {
                setAfterData([...afterData, res.data]);
                completeForm();
            })
            .catch(err => console.error(err))
            .finally(()=> setData(initialValue))
    }
    return [data, change, submit,afterData]
}