import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Feed from '../../components/Feed/Feed'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import Topbar from '../../components/Topbar/Topbar'
import axios from "../../axios"
import "./profile.css"

function Profile() {

    const [user,setUser]= useState({})
    const username = useParams().username

    useEffect(() => {
        const fetchUser = async ()=>{
            const req = await axios.get(`/users/?username=${username}`)
            setUser(req.data)
        }
        fetchUser();
    },[])
    return (
        <div className="profile">
            <Topbar />
            <div className="profile__container">
                <LeftSidebar />
                <div className="profile__body">
                    <div className="profile__header">
                        <div className="profile__cover">
                            <img src="assets/post/3.jpeg" alt="" />
                            <Avatar src="assets/person/4.jpeg" />
                        </div>
                        <div className="profile__description">
                            <h4 className="profile__username">{user.username}</h4>
                            <span className="profile__bio">{user.description}</span>
                        </div>
                    </div>
                    <div className="profile__footer">
                        <Feed username={username} />
                        <RightSidebar user={user} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Profile
