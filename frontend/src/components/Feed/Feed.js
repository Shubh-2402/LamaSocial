import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Post from './Post/Post'
import Share from "./Share/Share"
import axios from '../../axios'

function Feed({username}) {

    const [posts,setPosts]=useState([])

    useEffect(() => {
        const fetchPosts = async ()=>{
            const req = username
            ? await axios.get(`/posts/profile/${username}`)
            :await axios.get("/posts/feed/61496878c726d077bf16cb89")
            setPosts(req.data)
            console.log(posts);
        }
        fetchPosts();
    },[username])

    return (
        <div className="feed">
            <div className="feed__container">
                <Share />

                {posts.map((post)=>(
                    <Post
                    key={post._id}
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
