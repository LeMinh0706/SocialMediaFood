import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUserMe } from '../Services/AxiosUser'


const SidebarRight = () => {

    const [profile, setProfile] = useState({})
    const [count, setCount] = useState(0);
    const token = useSelector(state => state.user.account.accessToken)


    useEffect(() => {
        myProfile();
        // Cleanup interval on component unmount

    }, []);

    const myProfile = async () => {
        try {
            let res = await fetchUserMe(token)
            // console.log("My profile: ", res);
            if (res && res.statusCode === 200) {
                setProfile(res.profile)
            }
        } catch (error) {
            console.error(error.message);
        }
    }
    // console.log("Navbar: ", profile);

    // console.log(username, "-Sidebar-", avatar);

    return (
        <div className='flex flex-col items-center fixed right-16 top-64 rounded-xl h-[26rem] w-[18rem] bg-white border-2 shadow-lg text-gray-400 p-4'>
            <div className='w-full h-[4rem]'>
                <img className='w-full h-[8rem] object-cover' src={profile.url_background_profile} alt="" />
            </div>
            <Link to='profile'>
                <img className='w-32 object-cover mt-3 border-2 border-rose-600 rounded-full h-32' src={profile.url_avatar} alt="" />
                <p className='text-center mt-2 text-lg font-medium text-rose-700'>{profile.fullname}</p>
            </Link>
            <button className='p-3 mt-10 bg-rose-700 text-white rounded-lg font-medium'>Create Post Now</button>
        </div>
    )
}

export default SidebarRight