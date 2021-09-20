import { Avatar } from '@material-ui/core'
import React from 'react'
import Feed from '../../components/Feed/Feed'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import Topbar from '../../components/Topbar/Topbar'
import "./profile.css"

function Profile() {
    return (
        <div className="profile">
            <Topbar />
            <div className="profile__container">
                <LeftSidebar />
                <div className="profile__body">
                    <div className="profile__header">
                        <div className="profile__cover">
                            <img src="assets/post/3.jpeg" alt="" />
                            <Avatar src="assets/person/4.jpeg" />
                        </div>
                        <div className="profile__description">
                            <h4 className="profile__username">Julia Roberts</h4>
                            <span className="profile__bio">Hakuna Matata</span>
                        </div>
                    </div>
                    <div className="profile__footer">
                        <Feed />
                        <RightSidebar profile />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Profile
