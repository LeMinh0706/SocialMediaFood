import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../action/useAction';

const SidebarLeft = () => {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated)

    const dispatch = useDispatch();

    const handleLogout = () => {
        // Dispatch the logout action
        dispatch(userLogout());
        // Optional: Redirect to login page or home page
        window.location.href = '/';
    };


    return (
        <div className='flex flex-col justify-between fixed left-16 top-44 rounded-xl h-[70%] w-[12rem] bg-white border-2 shadow-lg text-gray-400 p-4'>
            <div>Home</div>
            <div>
                {isAuthenticated &&
                    <button onClick={handleLogout} className='w-full'>
                        Logout
                    </button>
                }
            </div>
        </div>
    )
}

export default SidebarLeft