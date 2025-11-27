import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


export default function ProtecedAuthRoute(props) {
    let navigate = useNavigate();

    if(!localStorage.getItem('myToken')){
        return props.children
    }
    else{
       
        return <Navigate to='/'/>
    }



    return (
        <>
        
        </>
    )
}
