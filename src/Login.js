import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { login } from './features/userSlice'

import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()

    const loginToApp =(e)=> {
        e.preventDefault()
        console.log(name , email);
        
    }

    const register = ()=> {
        if(!name) {
            return alert ("Please enter full name")
        }

        auth.createUserWithEmailAndPassword(email,password)
       .then((userAuth) => {
           userAuth.user.updateProfile({
                displayName : name,
                photoURL : profilePic
            })
        .then(()=>{dispatch(login({
            email : userAuth.user.email,
            uid : userAuth.user.uid,
            displayName : name,
            photoUrl : profilePic
        }))
        })
        .catch((err)=> alert(err))
       })  
        //firebase function that creates the email and password on backend
        //after userAuth is created by firebase with email and password , we can update the profile and add name and profile pic
        //displayName , photoURL are firebase specific keys , so should not be changed
        //if all of it goes well, we call the dispatch function which fires the login action function and takes an object as payload.

    }
    
    return (
        <div className = "login">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png" alt="" />

            <form action="">
                <input type="text" placeholder = "Full Name (required if registering)" value = {name} onChange = {e => setName(e.target.value)} />

                <input placeholder = "Profile pic url (optional)" type="text" value = {profilePic} onChange = {e => setProfilePic(e.target.value)}/>

                <input placeholder="Email" type="email" value = {email} onChange = {(e)=> setEmail(e.target.value)} />

                <input placeholder = "Password" type="password" value = {password} onChange = {e => setPassword(e.target.value)} />

                <button onClick = {loginToApp}>Sign In</button>
                <p>Not a member?  <span className = "login__register" onClick={register}>Register Now</span></p>
            </form>
        </div>
        
    )
}

export default Login
