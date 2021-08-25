import { Avatar } from '@material-ui/core'
import React from 'react'
import "./HeaderOption.css"

const HeaderOption = ({avatar , Icon,title, onClick}) => {
    return (
        <div onClick={onClick} className="headerOption" >
            {Icon && <Icon className="headerOption__icon"/>}
             {/* Render the icon only if Icon comopnent i.e image is passed */}
            {avatar && <Avatar className = "headerOption__icon" src ={avatar}/>}
            {/* Render Avatar component only if avatar is passed */}
            <h3 className="headerOption__title">{title}</h3>
           
            
        </div>
    )
}

export default HeaderOption
 