import React from 'react'
import SidebarRight from './SidebarRight'
import SidebarLeft from './SidebarLeft'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    return (
        <div className='relative flex justify-around items-center'>
            <SidebarLeft></SidebarLeft>
            {isAuthenticated === true ?
                <SidebarRight></SidebarRight>
                :
                ""
            }
        </div>
    )
}

export default Sidebar