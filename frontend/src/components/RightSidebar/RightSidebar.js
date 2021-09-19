import { Avatar } from '@material-ui/core'
import React from 'react'
import "./RightSidebar.css"

function RightSidebar() {
    return (
        <div className="rightSidebar">
            <div className="rightSidebar__container">
                <div className="rightSidebar__birthdayInfo">
                    <img src="/assets/gift.png" alt="" srcset="" />
                    <span>
                        <b>Robert Downey</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightSidebar__ad"  src="assets/ad.png" alt="" />
                <h4 className="rightSidebar__title">Online Friends</h4>
                <ul className="rightSidebar__friendList">
                    <li>
                        <div className="rightSidebar__friend">
                            <Avatar src="assets/person/2.jpeg"/>
                            <span className="rightSidebar__online"></span>
                        </div>
                        <span className="rightSidebar__username">Mr.White</span>
                    </li>
                    <li>
                        <div className="rightSidebar__friend">
                            <Avatar src="assets/person/1.jpeg"/>
                            <span className="rightSidebar__online"></span>
                        </div>
                        <span className="rightSidebar__username">Ellen Page</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default RightSidebar
