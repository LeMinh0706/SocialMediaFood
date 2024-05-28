import React, { useEffect, useState } from 'react'
import { removeFollower } from '../Services/AxiosFollower'
import { NavLink } from 'react-router-dom';

const ModalFollower = ({closeModal, user_id, followers, isCurrentUser, token}) => {

    const [followerList, setFollowerList] = useState(followers)
   
    let removedUserId = 0;

    function checkRemove(value){
        return value.user_id != removedUserId;
    }

    const handleRemoveClick = async(e) => {
        removedUserId = parseInt(e.target.value)
        console.log("This user id: ",user_id)
        console.log("Remove user id: ",removedUserId)
        let res = await removeFollower(user_id, removedUserId, token)
        console.log(res)
        if(res && res.statusCode === 200)
            setFollowerList((prevList) => prevList.filter(checkRemove))
    }

    useEffect(()=>{

    }, [followerList])

    return (
        <>
         {console.log("Follower list: ", followerList)}
         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="h-[400px] bg-white p-6 rounded shadow-lg w-96 flex-col flex gap-7">
                <h2 className="text-xl font-bold">Followers </h2>
                <p className='text-sm text-gray-700'>{followerList.length} total</p>
                <div className='h-[250px] overflow-y-auto flex flex-col gap-7'>
                    {
                    followerList.map((follower)=>{
                        return(
                            <div className='flex justify-between'>
                                <div className='left-container flex items-center gap-3'>
                                    <img className='w-8 h-8 rounded-full' src={follower.User_Follower_user_idToUser.url_avatar}/>
                                    {   
                                        follower.user_id!=user_id &&
                                        <NavLink to={"/profile/"+follower.user_id} className='text-sm text-gray-700 '>{follower.User_Follower_user_idToUser.fullname}</NavLink> 
                                    }
                                    {   
                                        follower.user_id==user_id &&
                                        <NavLink to={"/profile"} className='text-sm text-gray-700 '>{follower.User_Follower_user_idToUser.fullname}</NavLink> 
                                    }
                                </div>
                                <div className='right-container'>
                                    {
                                        isCurrentUser &&
                                        <button className='px-3 py-2 text-xs flex items-center text-white bg-gray-400'
                                                onClick={handleRemoveClick}
                                                value={follower.user_id}>
                                        Remove</button>
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
                        value={followerList.length}
                        >
                        Close
                    </button>
                </div>
            </div>
        </div>
        </>
        
  )
}

export default ModalFollower
