import { Avatar } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import {format} from "timeago.js"
import { Link } from 'react-router-dom'
import axios from "../../../axios"
import "./Post.css"

function Post({caption,userId,likes,createdAt}) {

    const [user,setUser]= useState({})
    const [like,setLike] = useState(likes.length)

    useEffect(() => {
        const fetchUser = async ()=>{
            const req = await axios.get(`/users?userId=${userId}`)
            setUser(req.data)
        }
        fetchUser();
    },[userId])

    return (
        <div className="post">
            <div className="post__container">
                <div className="post__header">
                    <div className="post__headerInfo">
                        <Link to={`profile/${user.username}`}>
                        <Avatar src={user.profilePicture}/>
                        </Link>
                        <span className="post__username">{user.username}</span>
                        <span className="post__time">{format(createdAt)}</span>
                    </div>
                    <MoreVert/>
                </div>
                <div className="post__body">
                    <span className="post__caption">{caption}</span>
                    <img src="assets/post/1.jpeg" alt="" />
                </div>
                <div className="post__footer">
                    <div className="post__reactions">
                        <img src="assets/like.png" alt="" />
                        <img src="assets/heart.png" alt="" />
                        <span className="post__likeCounter">{like} people like it</span>
                    </div>
                    <div className="post__comments">
                        <span className="post_commentsText">6 comments</span>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Post