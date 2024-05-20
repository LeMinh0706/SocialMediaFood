import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const SidebarRight = () => {

    const username = useSelector(state => state.user.account.username)
    const avatar = useSelector(state => state.user.account.avatar)
    const background = useSelector(state => state.user.account.background)

    // console.log(username, "-Sidebar-", avatar);

    return (
        <div className='flex flex-col items-center fixed right-16 top-64 rounded-xl h-[40%] w-[18rem] bg-white border-2 shadow-lg text-gray-400 p-4'>
            <div className='w-full h-[4rem]'>

                <img className='w-full h-[8rem] object-cover' src={background} alt="" />
            </div>
            <Link to='profile'>
                <img className='w-28 mt-3 border-2 border-rose-600 rounded-full' src={avatar} alt="" />
                <p className='text-center mt-2 text-lg font-medium text-rose-700'>{username}</p>
            </Link>
            <button className='p-3 mt-10 bg-rose-700 text-white rounded-lg font-medium'>Create Post Now</button>
        </div>
    )
}

export default SidebarRight