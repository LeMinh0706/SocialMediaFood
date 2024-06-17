import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../action/useAction';
import { Link, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';


const SidebarLeft = () => {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const role_id = useSelector(state => state.user.account.roleId)

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch(userLogout());

        navigate('/login');
    };

    return (
        <div className='flex flex-col justify-between fixed left-16 top-44 rounded-xl h-[70%] w-[12rem] bg-white border-2 shadow-lg text-gray-400 p-4'>
            <div className='flex flex-col gap-2'>
                <Link to='/'>
                    Home
                </Link>
                {role_id === 2 &&
                    <>
                        <Link to='/admin'>Upgrade list</Link>
                        <Link to='/admin/report'>Report list</Link>
                        <Link to='/admin/premium'>Premium list</Link>

                    </>
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