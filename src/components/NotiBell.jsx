import React, { useEffect, useState } from 'react'
import ModalNotification from './ModalNotification'
import { useSelector } from 'react-redux'
import { getAllNotification } from '../Services/AxiosNotification'
import { isAllOf } from '@reduxjs/toolkit'

const NotiBell = () => {

  let loadState = false

  const user_id = useSelector(state => state.user.account.userId)
  const token = useSelector(state => state.user.account.accessToken)

  const [unseenCount, setUnseenCount] = useState(0)
  const [isOpenNoti, setIsOpenNoti] = useState(false)
  const [notiList, setNotiList] = useState([])

  function checkUnseen(x) {
    return x.is_seen == 0;
  }

  function insertionSort(arr, n)  
{  
    let i, key, j;  
    for (i = 1; i < n; i++) 
    {  
        key = arr[i];  
        j = i - 1;  

        while (j >= 0 && arr[j].date < key.date) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }  
}  

  const fetchNotifications = async() => {
    try {
      let res = await getAllNotification(user_id, token)
      if(res && res.statusCode == 200)
      {  
        if(res.data.total!=0)
        {
          setUnseenCount(res.data["all notifcations"].filter(checkUnseen).length)
        }
        insertionSort(res.data["all notifcations"], res.data.total)
        setNotiList(res.data)
      }
    } catch (error) {
      console.log("Error: ", error)
    } 
  }

  const handleNotiClick = () => {
    if(isOpenNoti)
      closeNotiModal()
    else
      openNotiModal()
  }

  const unseenChange = () => {
    setUnseenCount(unseenCount-1)
  }

  const markSeenAll = () => {
    setUnseenCount(0)
    closeNotiModal()
  }

  const openNotiModal = () =>{
    setIsOpenNoti(true)
  }

  const closeNotiModal = () => {
    setIsOpenNoti(false)
  }

  useEffect(()=>{
    if(!loadState||isOpenNoti)
    {
      fetchNotifications()
      loadState=true
    }
  },[isOpenNoti])

  return (
    <div className=''>
      <div className='flex'>
        {
          unseenCount > 0  &&
          <div className='absolute w-[7px] h-[7px] rounded z-10 bg-red-600'></div>
        }
        <button onClick={handleNotiClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512">
            <path fill="#e3861c" d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
          </svg>
        </button>
      </div>
        { isOpenNoti &&
          <ModalNotification  notiList={notiList}
                              user_id={user_id}
                              unseenCount={unseenCount} 
                              unseenChange={unseenChange}
                              markSeenAll={markSeenAll}
                              token={token}>
          </ModalNotification>
        }
    </div>
  )
}

export default NotiBell