import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchFollower, fetchFollowing } from '../Services/AxiosFollower';
import FollowState from './FollowState';
import ModalFollower from './ModalFollower';
import ModalFollowing from './ModalFollowing';

const Follower = (props) => {
    const userId = useSelector(state => state.user.account.userId)
    const token = useSelector(state => state.user.account.accessToken)

    const [isOpenFollower, setIsOpenFollower] = useState(false);
    const [isOpenFollowing, setIsOpenFollowing] = useState(false);
    const [follower, setFollower] = useState()
    const [following, setFollowing] = useState()

    const getFollower = async() => {
        try{
            let res = await fetchFollower(props.user_id,token);
            console.log("Follower Data: ", res)
            if (res && res.statusCode === 201) {
                setFollower(0)
            }
            else if(res && res.statusCode === 200)
            {
                setFollower(res)
            }
        }catch{}
    }

    const getFollowing = async() => {
        try{
            let res = await fetchFollowing(props.user_id,token);
            console.log("Following Data: ", res)
            if (res && res.statusCode === 201) {
                setFollowing(0)
            }
            else if(res && res.statusCode === 200)
            {
                setFollowing(res)
            }
        }catch{}
    }

    useEffect(()=>{
        getFollower()
        getFollowing()
    },[]);

    const openModalFollower = () => {
        setIsOpenFollower(true);
    };

    const closeModalFollower = () => {
        setIsOpenFollower(false);
    };

    const openModalFollowing = () => {
        setIsOpenFollowing(true);
    };

    const closeModalFollowing = () => {
        setIsOpenFollowing(false);
    };

    return(
        <>
        <div className='flex items-center gap-5'>
            <div className='flex inline items-center'>
                <span>{follower}</span>
                <button className="inline w-full text-start px-1 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={openModalFollower}
                >Follower</button>
                {isOpenFollower && <ModalFollower closeModal={closeModalFollower} user_id={props.user_id} followers={follower} />}   
            </div>
            <div className='flex inline justify-between items-center'>
                <span>{following}</span>
                <button className="inline-block text-start px-1 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={openModalFollowing}
                >Following</button>
                {isOpenFollowing && <ModalFollowing closeModal={closeModalFollowing} user_id={props.user_id} following={following} />}   
            </div>
            <FollowState 
                isCurrentUser = {props.isCurrentUser}
                user_id = {userId}
                user_follower_id = {props.user_id}
                token = {token}
            ></FollowState>
        </div>
        </>
    )
}

export default Follower
