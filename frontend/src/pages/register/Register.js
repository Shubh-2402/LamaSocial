import axios from '../../axios'
import React, { useRef } from 'react'
import "./register.css"
import {useHistory} from "react-router"

function Register() {
    
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirm_password = useRef()
    const history = useHistory()
    

    const handleSubmit = async(e)=>{ 
        e.preventDefault()

        if(password.current.value !== confirm_password.current.value){
            confirm_password.current.setCustomValidity("Confirm Password Should match with Password")
        }else{
            const user={
                username:username.current.value,
                email:email.current.value,
                password:password.current.value,
            }

            try{
                await axios.post("auth/register",user)
                history.push("/login")
            }catch (error) {
                console.log(error);
            }
            
        }
        // loginCall({email:email.current.value , password:password.current.value}, dispatch)
    }

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
                    <form className="register__form" onSubmit={handleSubmit}>
                        <input type="text" required placeholder="Username" ref={username} />
                        <input type="email" required placeholder="Email" ref={email} />
                        <input type="password" required placeholder="Password" ref={password} minLength="8"/>
                        <input type="password" required placeholder="Confirm Password" ref={confirm_password}/>
                        <button className="register__button" type="submit">Sign Up</button>
                        <hr />
                        <button className="register__loginButton">Log into Existing Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register 
