import { Avatar } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import React from 'react'
import "./Post.css"

function Post() {
    return (
        <div className="post">
            <div className="post__container">
                <div className="post__header">
                    <div className="post__headerInfo">
                        <Avatar src="assets/person/4.jpeg" style={{zIndex: -1}}/>
                        <span className="post__username">Julia Roberts</span>
                        <span className="post__time">5 mins ago...</span>
                    </div>
                    <MoreVert/>
                </div>
                <div className="post__body">
                    <span className="post__caption">Hum he rahi pyaar ke....</span>
                    <img src="assets/post/1.jpeg" alt="" />
                </div>
                <div className="post__footer">
                    <div className="post__reactions">
                        <img src="assets/like.png" alt="" />
                        <img src="assets/heart.png" alt="" />
                        <span className="post__likeCounter">16 people like it</span>
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