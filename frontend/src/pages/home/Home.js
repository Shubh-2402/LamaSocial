import React from 'react'
import Feed from '../../components/Feed/Feed'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import Topbar from '../../components/Topbar/Topbar'

import "./Home.css"

function Home() {
    return (
        <div>
            <Topbar />
            <div className="home__container">
                <LeftSidebar />
                <Feed />
                <RightSidebar />
            </div>
            
        </div>
    )
}

export default Home
