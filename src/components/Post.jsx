import React from 'react'
import Avt from './Avt'

const Post = (props) => {
  return (
    <div className='flex flex-col w-[40vw] bg-slate-400'>
      <p>Post</p>
      <div>
        <Avt src={props.src} />
        <div>
          <p>{props.fullname}</p>
        </div>
      </div>
      <div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Post