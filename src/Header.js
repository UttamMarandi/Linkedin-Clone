import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';



const Header = () => {
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
                <HeaderOption avatar = "https://media-exp1.licdn.com/dms/image/C4D03AQHePVECaUbmpw/profile-displayphoto-shrink_200_200/0/1572766901949?e=1635379200&v=beta&t=GJfIi7GFDOCNoSkGpKpDWJ9y79HkAYTbVRCtemwPfiM" title = "me"/>
            </div>
        </div>
    )
}

export default Header
