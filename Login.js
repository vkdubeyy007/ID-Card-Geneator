import React from 'react'
import "./Styles/Login.css"
import { Routes, Route, useNavigate, Link } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();


    const navigateToPrime = (event) => {

        let user = 'admin'
        let pass = 'admin123'

        const userName = document.getElementById("userName").value;
        const userPassword = document.getElementById("userPassword").value;


        if (userName == user & userPassword == pass) {
            navigate("/prime-page")
        } else {
            alert("Please Enter Valid Credential's")
        }


    }

    // navigate("/prime-page")





    return (
        <>
            <div class="login-page">
                <div class="login__form">
                    <form class="login-form">
                        <h3>Login </h3>
                        <input type="text" id='userName' placeholder="username" />
                        <input type="password" id='userPassword' placeholder="password" />
                        <button id='loginBtn' onClick={navigateToPrime} >submit</button>
                        <p>*Confidential only for Viaansh Insurance Pvt Ltd.</p>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login