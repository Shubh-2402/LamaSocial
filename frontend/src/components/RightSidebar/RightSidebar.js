import { Avatar } from '@material-ui/core'
import React from 'react'
import "./RightSidebar.css"

function RightSidebar({profile}){

    const HomeRightSidebar = ()=>{
        return (
            <>
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
            </>
        )
    }

    const ProfileRightSidebar = ()=>{

        return (
            <>
            <h4 className='rightSidebar__infoTitle'>User information</h4>
            <div className="rightSidebar__infoContainer">
                <div className="rightSidebar__info">
                    <span className="rightSidebar__infoKey">City:</span>
                    <span className="rightSidebar__infoValue">New York</span>
                </div>
                <div className="rightSidebar__info">
                    <span className="rightSidebar__infoKey">From:</span>
                    <span className="rightSidebar__infoValue">Madrid</span>
                </div>
                <div className="rightSidebar__info">
                    <span className="rightSidebar__infoKey">Relationship :</span>
                    <span className="rightSidebar__infoValue">Single</span>
                </div>
            </div>
            <h4 className='rightSidebar__infoTitle'>User friends</h4>
            <div className="rightSidebar__followings">
                <div className="rightSidebar__following">
                <Avatar src="assets/person/2.jpeg" variant="rounded"/>
                <span className="rightSidebar__username">Robert</span>
                </div>
                <div className="rightSidebar__following">
                <Avatar src="assets/person/2.jpeg" variant="rounded"/>
                <span className="rightSidebar__username">Robert</span>
                </div>
                <div className="rightSidebar__following">
                <Avatar src="assets/person/2.jpeg" variant="rounded"/>
                <span className="rightSidebar__username">Robert</span>
                </div>
                <div className="rightSidebar__following">
                <Avatar src="assets/person/2.jpeg" variant="rounded"/>
                <span className="rightSidebar__username">Robert</span>
                </div>
                <div className="rightSidebar__following">
                <Avatar src="assets/person/2.jpeg" variant="rounded"/>
                <span className="rightSidebar__username">Robert</span>
                </div>
                <div className="rightSidebar__following">
                <Avatar src="assets/person/2.jpeg" variant="rounded"/>
                <span className="rightSidebar__username">Robert</span>
                </div>
            </div>
            </>
        )
        
    }

    return (
        <div className="rightSidebar">
            <div className="rightSidebar__container">
                {profile ? <ProfileRightSidebar/>:<HomeRightSidebar/>}
            </div>
        </div>
    )
}

export default RightSidebar
