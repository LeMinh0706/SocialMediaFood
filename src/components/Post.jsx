import React, { useState } from 'react'
import Avt from './Avt'
import Dropdown from './Dropdown'
import { useSelector } from 'react-redux'

const Post = (props) => {


  const [liked, setLiked] = useState(false)
  const [react, setReact] = useState(0)
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  const handleLike = () => {
    if (liked) {
      setReact(react - 1)
    } else {
      setReact(react + 1)
    }
    setLiked(!liked)
  }


  // console.log(liked);

  return (
    <div className='w-2/5 rounded-xl bg-white border p-3 shadow-md'>
      <div className='flex w-full justify-between border-b p-2 items-center'>
        <div className='flex items-center gap-5'>
          <Avt src={props.avt}></Avt>
          <div>
            <p className='font-medium'>{props.name}</p>
            <p className='text-xs font-lg text-gray-600'>{new Date(Number(props.time),).toLocaleString('en-US', {
              timeZone: 'Asia/Ho_Chi_Minh',
              hour12: false,
            }).replace(/ GMT.*$/, '')}</p>
          </div>
        </div>
        <div>
          {isAuthenticated ? <Dropdown iduser={props.userid} idpost={props.postid} postDetail={props} ></Dropdown> : ""}

        </div>
      </div>
      <div>
        <p className='mt-3'>{props.description}</p>
        <div className='mt-3 flex flex-wrap gap-2'>
          {props.images}
        </div>
        <p className='mt-3'>{props.userid}</p>
      </div>
      <div className='flex justify-around border-t mt-3 border-b p-1'>
        <button
          onClick={handleLike}
          className='hover:bg-gray-200 text-gray-500 text-sm font-medium w-1/3 p-1 rounded-lg flex items-center justify-center gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-6 w-6 ${!liked ? '' : 'text-red-400'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <p className={`${!liked ? '' : 'text-red-400'}`}>Like</p></button>

        {/* <button
          className={`mt-4 px-4 py-2 rounded ${liked ? 'bg-red-500' : 'bg-blue-500'} text-white`}
          onClick={handleLike}
        >
          {liked ? 'Unlike' : 'Like'}
        </button> */}

        <button className='hover:bg-gray-200 text-gray-500 text-sm font-medium w-1/3 p-1 rounded-lg flex items-center justify-center gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          Comment</button>
      </div>
    </div>
  )
}

export default Post