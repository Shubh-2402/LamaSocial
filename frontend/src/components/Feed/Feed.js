import React, { useContext, useEffect, useState } from 'react'
import "./Feed.css"
import Post from './Post/Post'
import Share from "./Share/Share"
import axios from '../../axios'
import { AuthContext } from '../../context/AuthContext'

function Feed({username}) {

    const [posts,setPosts]=useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        const fetchPosts = async ()=>{
            const req = username
            ? await axios.get(`/posts/profile/${username}`)
            :await axios.get(`/posts/feed/${user._id}`)
            setPosts(req.data)
            console.log(posts);
        }
        fetchPosts();
    },[username,user._id])

    return (
        <div className="feed">
            <div className="feed__container">
                <Share />

                {posts.map((post)=>(
                    <Post
                    key={post._id}
                    post={post}
                    userId = {post.userId}
                    caption={post.caption}
                    likes={post.likes}
                    img = {post.img}
                    createdAt = {post.createdAt}
                    />
                ))}
            </div>
        </div>
    )
}

export default Feed
