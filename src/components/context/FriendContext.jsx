import React, {  createContext, useEffect, useState } from 'react';
    export const FriendsContext=createContext()
const FriendContext = ({children}) => {
    const [friends,setFriends]=useState([])
    const [loading,setLoading]=useState(true)
useEffect(()=>{
   const friendsData= async()=>{
const fetchFriends=await fetch("/data.json")
const data=await fetchFriends.json()
setFriends(data)
setLoading(false)
    }
    friendsData()
},[])

const data={
    friends,
    setFriends,
    loading,
    setLoading
}
    return (
     <FriendsContext.Provider value={data}>
        {children}
     </FriendsContext.Provider>
    );
};

export default FriendContext;