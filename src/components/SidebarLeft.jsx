import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../action/useAction';
import { NavLink, useNavigate } from 'react-router-dom';


const SidebarLeft = () => {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const role = useSelector(state => state.user.account.roleId)

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch(userLogout());

        navigate('/');
    };

    return (
        <div className='flex flex-col justify-between fixed left-16 top-44 rounded-xl h-[70%] w-[12rem] bg-white border-2 shadow-lg text-gray-400 p-4'>
            <div className='flex flex-col gap-5'>
                <NavLink to={"/"}>Home</NavLink>
                {(isAuthenticated && role===3) &&
                    <NavLink to={"restaurant"}>Manage Restaurants</NavLink>
                }
            </div>
            
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