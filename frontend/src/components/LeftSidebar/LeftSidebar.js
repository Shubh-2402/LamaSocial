import React from 'react'
import "./LeftSidebar.css"
import {Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilled, RssFeed, School, WorkOutlined} from "@material-ui/icons"
import { Avatar } from '@material-ui/core'


function LeftSidebar() {
    return (
        <div className="leftSidebar">
            <div className="leftSidebar__container">
                <ul className="leftSidebar__list">
                    <li >
                        <RssFeed className="leftSidebar__icon" />
                        <span className="leftSidebar__itemText">Feed</span>
                    </li>
                    <li >
                        <Chat className="leftSidebar__icon" />
                        <span className="leftSidebar__itemText">Chat</span>
                    </li>
                    <li >
                        <PlayCircleFilled className="leftSidebar__icon" />
                        <span className="leftSidebar__itemText">Videos</span>
                    </li>
                    <li >
                        <Group className="leftSidebar__icon" />
                        <span className="leftSidebar__itemText">Groups</span>
                    </li>
                    <li >
                        <Bookmark className="leftSidebar__icon" />
                        <span className="leftSidebar__itemText"> Bookmarks</span>
                        </li>
                    <li >
                        <HelpOutline className="leftSidebar__icon" />
                        <span className="leftSidebar__itemText">Questions</span>
                        </li>
                    <li >
                        <WorkOutlined className="leftSidebar__icon" />
                        <span className="leftSidebar__itemText">Jobs</span>
                        </li>
                    <li >
                        <Event className="leftSidebar__icon" />
                        <span className="leftSidebar__itemText">Events</span>
                    </li>
                    <li >
                        <School className="leftSidebar__icon" />
                        <span className="leftSidebar__itemText">Courses</span>
                    </li>
                </ul>

                <button className="leftSidebar__button">Show More</button>
                <hr className="leftSidebar__hr" />

                <ul className="leftSidebar__friendlist">
                    <li>
                        <Avatar src="/assets/person/3.jpeg" />
                        <span className="leftSidebar__name">Anonymous</span>
                    </li>
                    <li>
                        <Avatar src="/assets/person/3.jpeg" />
                        <span className="leftSidebar__name">Anonymous</span>
                    </li>
                    <li>
                        <Avatar src="/assets/person/3.jpeg" />
                        <span className="leftSidebar__name">Anonymous</span>
                    </li>
                    <li>
                        <Avatar src="/assets/person/3.jpeg" />
                        <span className="leftSidebar__name">Anonymous</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftSidebar
