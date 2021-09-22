import React from 'react'
import {Chat, Notifications, Person, Search} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Topbar.css"


function Topbar(){
    return (
        <div className="topbar">
            <div className="topbar__left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="topbar__logo">Mingle</span>
                </Link>
            </div>
            <div className="topbar__center">
                <div className="topbar__searchbar">
                    <Search className="topbar__searchIcon"/>
                    <input type="text" placeholder="Search for friends, posts or videos"/>
                </div>
            </div>
            <div className="topbar__right">
                <div className="topbar__linksContainer">
                    <span className="topbar__link">Homepage</span>
                    <span className="topbar__link">Timeline</span>
                </div>
                <div className="topbar__iconsContainer">
                    <IconButton>
                    <div className="topbar__icon">
                        <Person />
                        <span className="topbar__counter">1</span>
                    </div>
                    </IconButton>

                    <IconButton>
                    <div className="topbar__icon">
                        <Chat />
                        <span className="topbar__counter">1</span>
                    </div>
                    </IconButton>

                    <IconButton>
                    <div className="topbar__icon">
                        <Notifications />
                        <span className="topbar__counter">1</span>
                    </div>
                    </IconButton>
                </div>
                <Avatar src="/assets/person/4.jpeg"></Avatar>
            </div>
        </div>
    )
}

export default Topbar
