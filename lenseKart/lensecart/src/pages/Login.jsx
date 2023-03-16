import React from 'react'
import styled from "styled-components";
import {store} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import { useState } from 'react';
import { login } from '../redux/authReducer.js/action';


let theme = true;
export const Login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')

    const dispatch = useDispatch()

    const {auth, isError, token, isLoading} = useSelector((state)=>{
        //console.log(state.authReducer)
        return {
            auth : state.authReducer.auth,
            isLoading : state.authReducer.isLoading,
            isError : state.authReducer.isError,
            token : state.authReducer.token
        }
    })
    console.log(auth, isError, token, isLoading)

    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let userData = {
            email,password
        }
        //console.log(userData)
        dispatch(login(userData));
        setemail("")
        setpassword("")
    }

    return (
        <DIV>
            <h2>User Login</h2>
            <h3>{auth?'Login Successfull!!':'Login to Continue'}</h3>
            <form className='form-1' onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter Email' onChange={(e)=>{setemail(e.target.value)}} value={email} />
                <input type="password" placeholder='password' onChange={(e)=>{setpassword(e.target.value)}} value={password} />
                <button type='submit'>Submit</button>
            </form>
        </DIV>
    )
}


const DIV = styled.div`
    width:400px;
    margin: auto;
    border : 1px solid grey;
    padding : 20px;

    .form-1 {
        display:flex;
        flex-direction: column;
        gap:15px;
        align-items:center;

    }
    h3{
        color : ${theme?'green':"red"}
    }
    input{
        width:80%;
        height:40px;
        font-size:large;
    }
    button{
        width:20%;
        height:35px;
    }
`;
