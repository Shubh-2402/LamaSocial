import React from 'react'
import "./Feed.css"
import Post from './Post/Post'
import Share from "./Share/Share"

function Feed() {
    return (
        <div className="feed">
            <div className="feed__container">
                <Share />
                <Post />
            </div>
        </div>
    )
}

export default Feed
