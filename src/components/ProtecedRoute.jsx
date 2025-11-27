import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


export default function ProtecedRoute(props) {
    let navigate = useNavigate();

    if(!localStorage.getItem('myToken')){
        return <Navigate to='/login'/>
    }
    else{
        return props.children
    }


    // if(!localStorage.getItem('myToken')){
    //     return <Navigate to='/'/>
    // }
    // else{
    //     return props.children
    // }



    return (
        <>
        
        </>
    )
}
