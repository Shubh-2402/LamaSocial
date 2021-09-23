import React, { useContext, useRef } from 'react'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress} from "@material-ui/core"
import "./login.css"

function Login() {

    const email = useRef()
    const password = useRef()

    const {user,isFetching,error,dispatch} = useContext(AuthContext)

    const handleSubmit = (e)=>{ 

        e.preventDefault()
        loginCall({email:email.current.value , password:password.current.value}, dispatch)
    }

    console.log(user);

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
                    <form className="login__form" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" required  ref={email}/>
                        <input type="password" placeholder="Password" required ref={password} minLength="8"/>
                        <button className="login__button" disabled={isFetching} type="submit">
                            {isFetching? (<CircularProgress color="white" size="20px" />) :("Log in")}
                        </button>
                        <span>Forgotten Password?</span>
                        <hr />
                        <button className="login__registerButton">Create New Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login 
