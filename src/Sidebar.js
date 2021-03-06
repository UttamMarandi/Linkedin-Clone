import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"
import Frame from "./Images/Frame.png"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Sidebar = () => {

    //useSlector will give us user object which holds the current state values
    const user = useSelector(selectUser)

    // Imp
    const recenItem =(topic)=> {
        return(
            <div className="sidebar__recentItem">
            <div className="sidebar__hash">#</div>
            <p>{topic}</p>
            </div>
        )
        
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={Frame} alt="" />
                <Avatar className ="sidebar__avatar" src ="user.phptoUrl">{user.displayName[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you?</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recenItem("react js")}
                {recenItem("programming")}
                {recenItem("software_engineering")}
                {recenItem("vue js")}
            </div>
        </div>
    )
}

export default Sidebar
