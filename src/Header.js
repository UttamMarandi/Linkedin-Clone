import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser
 } from './features/userSlice';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from './firebase';



const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    
    //logout functionality 
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
        //auth.signOut is firebase specific function
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                <div className="header__search">
                    <SearchIcon/>
                    <input placeholder = "Search" type="text" />

                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon = {HomeIcon} title = "Home"/>
                <HeaderOption Icon = {SupervisorAccountIcon} title = "My Network"/>
                <HeaderOption Icon = {WorkIcon} title = "Jobs"/>
                <HeaderOption Icon = {ChatIcon} title = "Chats"/>
                <HeaderOption Icon = {NotificationsIcon} title = "Notifications"/>
                <HeaderOption avatar = {true} title = "me" onClick = {logoutOfApp}/>
            </div>
        </div>
    )
}

export default Header
