import React from 'react';

import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from "./Login"
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  //keep user logged in after page refresh
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName,
          photoUrl : userAuth.photoURL
        }))
      }
      else {
        //user is logged out
        dispatch(logout())

      }
    })
  },[])

  return (
    <div className="app">
        {/* Header */}
        <Header/>

        {/* If user object is falsy / not created render Login page */}
        {!user ? <Login/>
        :<div className="app__body">
          <Sidebar/>
          <Feed/>
        </div>}
        
          

    </div>
  );
}

export default App;
