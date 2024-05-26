import React, { useEffect, useState } from 'react'
import { createFollower } from '../Services/AxiosFollower';

const FollowState = (props) => {

    const [isFollowed, setIsFollowed] = useState(false);
    const handleFollowClick = async() => {
        try {
            let res = await createFollower(props.user_id, props.user_follower_id, props.token)
            console.log(res)
            setIsFollowed(true) 
        } catch (error) {
            
        }
        
    };

    const handleFollowedClick = () => {
        setIsFollowed(false)
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