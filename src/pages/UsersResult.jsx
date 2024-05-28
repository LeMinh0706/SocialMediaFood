import React, { useReducer } from 'react'
import { NavLink } from 'react-router-dom';
import searchReducer from '../reducer/searchReducer';
import { useSelector } from 'react-redux';

const UsersResult = (prop) => {
    const userList = useSelector(state => state.search)
    const userId = useSelector(state => state.user.account.userId)
    return (
        <>
        {console.log({userList})}
        <div className='pt-24 flex items-center w-full flex-col gap-5'>
            {userList.map((user) => 
                <div className="flex w-1/3 justify-between border-b p-2 items-center" key={user.id}>
                    <div className="flex items-center gap-3">
                        <img className='w-8 h-8 rounded-full' src={user.avatar}/>
                        <p>{user.fullname}</p>
                    </div>
                    { user.id !== userId &&
                    <div className="left-container">
                        <NavLink to={"/profile/"+user.id.toString()}>See Detail</NavLink>
                    </div>
                    }
                    { user.id === userId &&
                    <div className="left-container">
                        <NavLink to='/profile'>See Detail</NavLink>
                    </div>
                    }
                </div>
            )}
        </div>
        
        </>
    )
}

export default UsersResult