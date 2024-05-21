import React, { useReducer } from 'react'
import { NavLink } from 'react-router-dom';
import searchReducer from '../reducer/searchReducer';
import { useSelector } from 'react-redux';

const UsersResult = (prop) => {
    const userList = useSelector(state => state.search)

    return (
        <>
        {console.log({userList})}
        <div className='pt-24 flex items-center w-full flex-col gap-5'>
            {userList.map((user) => 
                <div className="flex w-1/3 justify-between border-b p-2 items-center" key={user.user_id}>
                    <div className="flex items-center gap-3">
                        <img className='w-8 h-8 rounded-full' src={user.avatar}/>
                        <p>{user.fullname}</p>
                    </div>
                    <div className="left-container">
                        <NavLink to="">See Detail</NavLink>
                    </div>
                </div>
            )}
        </div>
        
        </>
    )
}

export default UsersResult