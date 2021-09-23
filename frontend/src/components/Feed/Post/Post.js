import { Avatar } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import React, { useContext, useEffect, useState } from 'react'
import {format} from "timeago.js"
import { Link } from 'react-router-dom'
import axios from "../../../axios"
import "./Post.css"
import { AuthContext } from '../../../context/AuthContext'

function Post({post}) {

    const [user,setUser]= useState({})
    const [like,setLike] = useState(post.likes.length)
    const [isLiked, setsIsLiked] = useState(false)
    const {user:currentUser} = useContext(AuthContext)


    useEffect(()=>{
        setsIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])

    useEffect(() => {
        const fetchUser = async ()=>{
            const req = await axios.get(`/users?userId=${post.userId}`)
            setUser(req.data)
        }
        fetchUser();
    },[post.userId])

    const handleLikes = ()=>{

        try{
             axios.put(`/posts/${post._id}/like`,{userId:currentUser._id})
        } catch (error){}
        
        setLike(isLiked ? like-1:like+1)
        setsIsLiked(!isLiked)
        
    }

    return (
        <div className="post">
            <div className="post__container">
                <div className="post__header">
                    <div className="post__headerInfo">
                        <Link to={`profile/${user.username}`}>
                        <Avatar src={user.profilePicture}/>
                        </Link>
                        <span className="post__username">{user.username}</span>
                        <span className="post__time">{format(post.createdAt)}</span>
                    </div>
                    <MoreVert/>
                </div>
                <div className="post__body">
                    <span className="post__caption">{post.caption}</span>
                    <img src="assets/post/1.jpeg" alt="" />
                </div>
                <div className="post__footer">
                    <div className="post__reactions">
                        <img src="assets/like.png" alt="" onClick={handleLikes}/>
                        <img src="assets/heart.png" alt="" onClick={handleLikes}/>
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