import React from 'react'
import "./Login.css"

const Login = () => {
    const register =()=> {

    }
    const login =()=> {
        
    }
    return (
        <div className = "login">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png" alt="" />

            <form action="">
                <input type="text" placeholder = "Full Name (required if registering)" />
                <input placeholder = "Profile pic url (optional)" type="text"/>
                <input placeholder="Email" type="email" />
                <input placeholder = "Password" type="password" />
                <button onClick = {login}>Sign In</button>
                <p>Not a member ? <span className = "login__register" onClick={register}>Register Now</span></p>
            </form>
        </div>

        
    )
}

export default Login
