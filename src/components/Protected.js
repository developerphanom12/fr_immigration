import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected({children}) {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    if(token && token.length>0){
        return children;
    }else{
        navigate('*')
    }
}
