import React, {useEffect, useState} from 'react'
import "./Feed.css"
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';

// Icons
import PhotoIcon from '@material-ui/icons/Photo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

// database

import {db} from "./firebase"
import firebase from "firebase"
import Post from "./Post"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])
    const user = useSelector(selectUser)

    useEffect(() => { 
        // onSnapShot gives a realtime snapshot of "posts" from our database
        //firebase fuction orderBy("timestamp","desc") , orders the render order in feed
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map((doc)=>{
                return ({
                    id : doc.id,
                    data: doc.data()
                })
            }))
        })
    }, [])
    
    const sendPost = (e) => {
        e.preventDefault() //stops from refreshing
        // sending data to the firestore
        //add a collection names posts to db
        db.collection("posts").add({
            name : user.displayName,
            description: user.email,
            message : input,
            photoUrl : user.photoUrl|| "",
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
            // gets the timestamp of the server, so that it does not effect the time based on timezones
        })

        setInput("")
    }


    return (
        <div className = "feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value = {input} onChange = {e=> setInput(e.target.value)} />
                        <button type = "submit" onClick = {sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    {/* Input Options */}
                    <InputOptions Icon = {PhotoIcon}title = "Photo" color ="#70b5f9"/>
                    <InputOptions Icon = {SubscriptionsIcon}title = "Video" color ="#e7a33e"/>
                    <InputOptions Icon = {EventNoteIcon}title = "Event" color ="#c0cbcd"/>
                    <InputOptions Icon = {CalendarViewDayIcon}title = "Write Article" color ="#7fc15e"/>
                </div>
            </div>

            {/* Posts */}
            {/* Here posts is same as the one we received from db */}

            <FlipMove>
            {posts.map(({id, data : {name , description , message , photoUrl} })=>{
                return ( <Post
                key = {id}
                name = {name}
                description = {description}
                message = {message}
                photoUrl = {photoUrl}
                />)
            }
                // Bug fix : earlier I was using curly braces but not using return statement. If using curly barces for arrow function body than you have to explicitly mention the return
            )}
            </FlipMove>
           
        </div>
        
        
    )
}

export default Feed
