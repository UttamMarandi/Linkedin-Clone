.then ((userAuth)=> {
            userAuth.user.updateProfile({
                displayName : name,
                photoURL : profilePic
            })
        })
        .then(()=>{
            dispatch(login({
                email : userAuth.user.email,
                uid : userAuth.user.uid,
                displayName : name,
                photoUrl : profilePic
            }))
        })
        .catch((err)=> alert(err.message))


//dummy 
 db.collection("posts").add({
            name : user.displayname,
            description: user.email,
            message : input,
            photoUrl : user.photoUrl|| "",
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
            // gets the timestamp of the server, so that it does not effect the time based on timezones
        })