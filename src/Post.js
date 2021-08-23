import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import InputOptions from './InputOptions'

// Icons
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = ({id,name, description, message, photoUrl}) => {
    console.log("name in Post", name);
    return (
        <div className="post" key = {id}>
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOptions Icon = {ThumbUpAltOutlinedIcon} title = "Like" color = "gray" />
                <InputOptions Icon = {ChatOutlinedIcon} title = "Chat" color = "gray" />
                <InputOptions Icon = {ShareOutlinedIcon} title = "Like" color = "gray" />
                <InputOptions Icon = {SendOutlinedIcon} title = "Like" color = "gray" />
            </div>
        </div>
    )
}

export default Post
