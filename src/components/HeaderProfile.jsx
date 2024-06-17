import React, { useEffect, useState } from 'react'
import UpdateUserModal from './UpdateUserModal';
import AvatarModal from './AvatarModal';
import BackgroundModal from './BackgroundModal';
import Follower from './Follower'
import UpgradeButton from './UpgradeButton';

const HeaderProfile = ({user_id, token, role, isCurrentUser, isPending, props, myProfile}) => {


    const [isOpenUpdate, setIsOpenUpdate] = useState(false);
    const [isAvatarUpdate, setIsAvatarUpdate] = useState(false);
    const [isBackgroundUpdate, setIsBackgroundUpdate] = useState(false);
    // console.log(props);
    const fetchProfile = async () => {
        await myProfile()
    }

    const openModalUpdate = () => {
        setIsOpenUpdate(true);
    };

    const closeModalUpdate = () => {
        setIsOpenUpdate(false);
    };
    const openAvatarUpdate = () => {
        setIsAvatarUpdate(true);
    };
    const closeAvatarUpdate = () => {
        setIsAvatarUpdate(false);
    };
    const openBackgroundUpdate = () => {
        setIsBackgroundUpdate(true);
    };

    const closeBackgroundUpdate = () => {
        setIsBackgroundUpdate(false);
    };

    return (
        <>
            <div className=''>
            
                <div className='w-[60rem] h-[31rem]'>
                
                {    isCurrentUser &&
                    <button
                    onClick={openBackgroundUpdate}
                    className='mt-[500px] ml-[900px] absolute hover:bg-orange-600 rounded-lg'
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                </button>}
                <img className='w-full h-[35rem] object-cover border-2 border-rose-600 rounded-3xl' src={props.url_background_profile} alt="" />
            </div>
            <div className='flex items-center p-6 justify-between border-b'>
                <div className='flex items-center gap-5'>
                    <img className='w-40 h-40 shadow-inner border-2 border-rose-600 rounded-full object-cover' src={props.url_avatar} alt="" />
                    
                    {    isCurrentUser &&
                    <button
                        onClick={openAvatarUpdate}
                        className='mt-[9rem] ml-[8rem] absolute hover:bg-red-600 rounded-lg'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>
                    </button>}
                    <div>
                        <div className='flex gap-2 items-center'>
                            <p className='text-2xl font-bold text-gray-600'>{props.fullname}</p>
                            {   role === 3 &&
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#74C0FC" d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"/></svg>
                            } 
                        </div>
                        <Follower user_id = {user_id} isCurrentUser = {isCurrentUser}></Follower>
                    </div>
                    {   (role === 1 && isPending>=0) &&
                        <UpgradeButton isPending={isPending} token={token}></UpgradeButton>
                    }
                </div>

                    

                {   isCurrentUser &&
                    <button
                    className='p-3 font-medium flex items-center gap-2 rounded-md text-white bg-rose-700'
                    onClick={openModalUpdate}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    Chỉnh sửa thông tin cá nhân</button>}
                
                {isBackgroundUpdate && <BackgroundModal closeModal={closeBackgroundUpdate} fetchProfile={fetchProfile}></BackgroundModal>}
                {isAvatarUpdate && <AvatarModal closeModal={closeAvatarUpdate} fetchProfile={fetchProfile}></AvatarModal>}
                {isOpenUpdate && <UpdateUserModal closeModal={closeModalUpdate} props={props} fetchUserProfile={fetchProfile} />}
            </div>
        </div>
        </>
    )
}

export default HeaderProfile