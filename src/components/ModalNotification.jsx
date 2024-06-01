import React, { useEffect, useState } from 'react'
import Notification from './Notification'
import { updateAllNotiIsSeen } from '../Services/AxiosNotification'

const ModalNotification = ({notiList, user_id, unseenCount,unseenChange, markSeenAll,token}) => {
  const handleMarkAllClick = async() =>{
    try {
      if(unseenCount>0)
      {
        const res = await updateAllNotiIsSeen(user_id,token)
        console.log(res)
        if(res&&res.statusCode==200)
        {
          markSeenAll()
        }
      }
    } catch (error) {
      
    }
  } 

  return (
    <div className='flex flex-col justify-between items-center mt-1 z-50'>
      <div className='fixed text-[0px] leading-[0%] w-[0px] border-b-[10px] border-l-[10px] border-r-[10px] border-solid border-b-orange-400 border-l-transparent border-r-transparent'></div>
      <div className='flex flex-col gap-5 fixed p-5 overflow-y-auto w-[250px] h-[350px] shadow-2xl bg-white mt-2 border-2 border-orange-400'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg'>Notifications</h2>
          <p className='text-xs text-blue-500 cursor-pointer' onClick={async()=>handleMarkAllClick()}>Mark seen all</p>
        </div>
        {
          notiList["all notifcations"].map((noti) => {
            return(
              <Notification noti={noti} 
                            unseenChange={unseenChange}
                            token={token}
                            key={noti.noti_id}>
              </Notification>
          )
          })
        }
      </div>
    </div>
  )
}

export default ModalNotification