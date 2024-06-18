import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchFollower, fetchFollowing } from '../Services/AxiosFollower';
import FollowState from './FollowState';
import ModalFollower from './ModalFollower';
import ModalFollowing from './ModalFollowing';

const Follower = (props) => {
    const userId = useSelector(state => state.user.account.userId)
    const token = useSelector(state => state.user.account.accessToken)

    let foundFlag = false

    const [isOpenFollower, setIsOpenFollower] = useState(false);
    const [isOpenFollowing, setIsOpenFollowing] = useState(false);
    const [follower, setFollower] = useState([null])
    const [following, setFollowing] = useState([null])
    const [isFollowed, setIsFollowed] = useState(null)
    let followerRef = useRef()

    const Init = async() => {
        try {
            let res = await Promise.all([fetchFollower(props.user_id,token), fetchFollowing(props.user_id,token)])
            setFollower(res[0].data)
            setFollowing(res[1].data)
            res[0].data.followee.map((user)=>{
                if(user.user_id == userId)
                {
                    setIsFollowed(true)
                    foundFlag = true
                }
            })
            if(foundFlag==false)
                setIsFollowed(false)
        } catch (error) {
            
        }
    }


    
    useEffect(()=>{
        setIsFollowed(null)
        setIsOpenFollower(false)
        setIsOpenFollowing(false)
        Init()
    },[props.user_id]);

    const openModalFollower = () => {
        setIsOpenFollower(true);
    };

    const closeModalFollower = (e) => {
        setIsOpenFollower(false);
        if(e.target.value!=follower.total)
                Init()
    };

    const openModalFollowing = () => {
        setIsOpenFollowing(true);
    };

    const closeModalFollowing = (e) => {
        setIsOpenFollowing(false);
        if(e.target.value!=following.total)
            Init()
    };

    return(
        <>
        {   isFollowed != null &&
           
            <div className='flex items-center gap-5'>
            <div className='flex inline items-center'>
                <p ref={followerRef}>{follower.total}</p>
                <button className="inline w-full text-start px-1 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={openModalFollower}
                >Follower</button>
                {isOpenFollower && <ModalFollower closeModal={closeModalFollower} 
                                                  user_id={userId} 
                                                  followers={follower.followee} 
                                                  isCurrentUser={props.isCurrentUser}
                                                  token={token}/>}   
            </div>
            <div className='flex inline items-center'>
                <p>{following.total}</p>
                <button className="inline-block text-start px-1 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={openModalFollowing}
                >Following</button>
                {isOpenFollowing && <ModalFollowing closeModal={closeModalFollowing} 
                                                    user_id={userId} 
                                                    followings={following.following} 
                                                    isCurrentUser={props.isCurrentUser}
                                                    token={token}/>}   
            </div>
            <FollowState 
                isCurrentUser = {props.isCurrentUser}
                isFollowed = {isFollowed}
                user_id = {userId}
                user_follower_id = {props.user_id}
                token = {token}
            ></FollowState>
        </div>
        }
        </>
    )
}

export default Follower
