import React from 'react'
import "./Feed.css"
import Share from "./Share/Share"

function Feed() {
    return (
        <div className="feed">
            <div className="feed__container">
                <Share />
            </div>
        </div>
    )
}

export default Feed
