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