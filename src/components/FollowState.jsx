import React, { useEffect, useState } from 'react'
import { createFollower, removeFollower, removeFollowing } from '../Services/AxiosFollower';

const FollowState = (props) => {

    const [isFollowed, setIsFollowed] = useState(props.isFollowed)

    const handleFollowClick = async() => {
        try {
            console.log(props.token)
            let res = await createFollower(props.user_id, props.user_follower_id, props.token)
            console.log(res)
            if(res && res.statusCode === 200)
                setIsFollowed(true) 
        } catch (error) {
            
        }
        
    };

    const handleFollowedClick = async() => {
        try {
            console.log("User ID: ",props.user_id)
            console.log("User Following ID: ",props.user_follower_id)
            console.log(props.token)
            let res = await removeFollowing(props.user_id, props.user_follower_id, props.token)
            console.log(res)
            if(res && res.statusCode === 200)
                setIsFollowed(false)
        } catch (error) {
            
        }
    };

    useEffect(() => {
    }, [isFollowed])
  return (
    <>
        {
            (!props.isCurrentUser && !isFollowed) &&
            <button className='px-5 py-2 font-medium flex items-center text-white bg-blue-600'
                    onClick={handleFollowClick}>
            Follow</button>
        }
        {
            (!props.isCurrentUser && isFollowed) &&
            <button className='px-5 py-2 font-medium flex items-center text-white bg-gray-400'
                    onClick={handleFollowedClick}>
            Followed</button>
        }
    </>
  )
}

export default FollowState