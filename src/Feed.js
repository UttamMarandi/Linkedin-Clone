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

const Feed = () => {

    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => { 
        // onSnapShot gives a realtime snapshot of "posts" from our database
        db.collection("posts").onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map((doc)=>{
                return ({
                    id : doc.id,
                    data: doc.data()
                })
            }))
        })
    }, [])
    console.log(posts);
    const sendPost = (e) => {
        e.preventDefault() //stops from refreshing
        // sending data to the firestore
        //add a collection names posts to db
        db.collection("posts").add({
            name : "Uttam Marandi",
            description: "this is a test",
            message : input,
            photoUrl : "",
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
            // gets the timestamp of the server, so that it does not effect the time based on timezones
        })
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
           
        </div>
        
        
    )
}

export default Feed
