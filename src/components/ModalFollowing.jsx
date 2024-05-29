import React, { useEffect, useState } from 'react'
import { removeFollowing } from '../Services/AxiosFollower';
import { NavLink } from 'react-router-dom';

const ModalFollowing = ({closeModal, user_id, followings, isCurrentUser, token}) => {
    const [followingList, setFollowingList] = useState(followings)
   
    let removedUserId = 0;

    function checkUnfollowed(value){
        return value.following_user_id != removedUserId;
    }

    const handleRemoveClick = async(e) => {
        removedUserId = parseInt(e.target.value)
        let res = await removeFollowing(user_id, removedUserId, token)
        console.log(res)
        if(res && res.statusCode === 200)
            setFollowingList((prevList) => prevList.filter(checkUnfollowed))
    }

    useEffect(()=>{
    }, [followingList])
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="h-[400px] bg-white p-6 rounded shadow-lg w-96 flex-col flex gap-7">
                <h2 className="text-xl font-bold">Following </h2>
                <p className='text-sm text-gray-700'>{followingList.length} total</p>
                <div className='h-[250px] overflow-y-auto flex flex-col gap-7'>
                    {
                    followingList.map((following)=>{
                        return(
                            <div className='flex justify-between'>
                                <div className='left-container flex items-center gap-3'>
                                    <img className='w-8 h-8 rounded-full' src={following.User_Follower_following_user_idToUser.url_avatar}/>
                                   {
                                        following.following_user_id!=user_id &&
                                        <NavLink to={"/profile/"+following.following_user_id} className='text-sm text-gray-700 '>{following.User_Follower_following_user_idToUser.fullname}</NavLink>
                                   } 
                                   {
                                        following.following_user_id==user_id &&
                                        <NavLink to={"/profile"} className='text-sm text-gray-700 '>{following.User_Follower_following_user_idToUser.fullname}</NavLink>
                                   } 
                                </div>
                                <div className='right-container'>
                                    {
                                        isCurrentUser &&
                                        <button className='px-2 py-2 text-xs flex items-center text-white bg-gray-400'
                                                onClick={handleRemoveClick}
                                                value={following.following_user_id}>
                                        Unfollowed</button>
                                    }
                                </div>
                            </div>
                        )
                    })
                    } 
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                        value={followingList.length}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
  )
}

export default ModalFollowing
