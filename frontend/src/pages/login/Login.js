import React from 'react'
import "./login.css"

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <div className="login__left">
                    <h3 className="login__logo">Mingle</h3>
                    <span className="login__desc">
                        Connect with friends and the world around you on Mingle.
                    </span>
                </div>
                <div className="login__right">
                    <div className="login__form">
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button className="login__button">Log In</button>
                        <span>Forgotten Password?</span>
                        <hr />
                        <button className="login__registerButton">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login 
