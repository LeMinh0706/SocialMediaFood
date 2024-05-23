import React from 'react'

const HeaderProfile = (props) => {
    return (
        <div className=''>
            <div className='w-[60vw] h-[31rem]'>
                <img className='w-full h-[35rem] object-cover border-2 border-rose-600 rounded-3xl' src={props.url_background_profile} alt="" />
            </div>
            <div className='flex items-center p-6 justify-between border-b'>
                <div className='flex items-center gap-5'>
                    <img className='w-40 h-40 shadow-inner border-2 border-rose-600 rounded-full object-cover' src={props.url_avatar} alt="" />
                    <div>
                        <p className='text-2xl font-bold text-gray-600'>{props.fullname}</p>
                        <p className='text-sx font-medium text-gray-400'>{props.total_followee} follower</p>
                    </div>
                </div>
                <button className='p-3 font-medium flex items-center gap-2 rounded-md text-white bg-rose-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>

                    Chỉnh sửa thông tin cá nhân</button>
            </div>
        </div>
    )
}

export default HeaderProfile