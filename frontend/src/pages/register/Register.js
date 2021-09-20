import React from 'react'
import "./register.css"

function Register() {
    return (
        <div className="register">
            <div className="register__container">
                <div className="register__left">
                    <h3 className="register__logo">Mingle</h3>
                    <span className="register__desc">
                        Connect with friends and the world around you on Mingle.
                    </span>
                </div>
                <div className="register__right">
                    <div className="register__form">
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <input type="text" placeholder="Confirm Password" />
                        <button className="register__button">Sign Up</button>
                        <hr />
                        <button className="register__loginButton">Log into Existing Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register 
