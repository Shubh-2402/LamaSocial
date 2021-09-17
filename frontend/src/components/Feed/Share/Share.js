import React from 'react'
import "./Share.css"
import { Avatar } from '@material-ui/core'
import {EmojiEmotions, Label, LocationOn, PermMedia} from "@material-ui/icons"

function Share() {
    return (
        <div className="share">

            <div className="share__container">

                <div className="share__header">
                    <Avatar src="assets/person/4.jpeg"/>
                    <input type="text" placeholder="What's on your mind Julia? " />
                </div>

                <hr className="share__hr"/>

                <div className="share__footer">

                    <div className="share__optionsContainer">
                        <div className="share__option">
                            <PermMedia htmlColor="tomato" className="share__icon" />
                            <span>Photo or Video</span>
                        </div>
                        <div  className="share__option">
                            <Label htmlColor="#1877f2" className="share__icon" />
                            <span>Tag</span>
                        </div>
                        <div className="share__option">
                            <LocationOn htmlColor="green" className="share__icon" />
                            <span>Location</span>
                        </div>
                        <div className="share__option">
                            <EmojiEmotions htmlColor="#EDC60F" className="share__icon" />
                            <span>Feelings</span>
                        </div>
                        
                    </div>

                    <button className="share__button">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
