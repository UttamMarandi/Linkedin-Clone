import React, {useEffect, useState} from 'react'
import "./Feed.css"
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import Post from "./Post"
// Icons
import PhotoIcon from '@material-ui/icons/Photo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

// database
import {db} from "./firebase"

const Feed = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => { 
        // onSnapShot gives a realtime snapshot of "posts" from our database
        db.collection("posts").onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map((doc)=>{
                return ({
                    id : doc.id,
                    data: doc.data
                })
            }))
        })
    }, [])
    
    const sendPost = (e) => {
        e.preventDefault() //stops from refreshing
        // sending data to the firestore
    }


    return (
        <div className = "feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" />
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
            {posts.map((post)=>{
                <Post/>
            })}
            <Post  name= "Uttam Marandi" description = "This is a test" message="WoW THis worked" />
        </div>
        
        
    )
}

export default Feed
