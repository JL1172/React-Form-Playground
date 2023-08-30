import { useForm } from "./useForm";
import {useState} from "react"; 
import { useNavigate } from "react-router-dom";

export const useLocalStorage = (key,initialValue) => {
    const [data,setData] = useState(()=> {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        } 
        window.localStorage.setItem(key,JSON.stringify(initialValue));
        return initialValue;
    })
    const changeData = value => {
        changeData(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [data,setData]; 
}