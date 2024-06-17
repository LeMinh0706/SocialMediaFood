import React, { useState } from 'react'
import { updateNotiIsSeen } from '../Services/AxiosNotification';

const Notification = ({noti, unseenChange, token}) => {

    const [isSeen, setIsSeen] = useState(checkSeen(noti))

    function checkSeen(x) {
        return x.is_seen != 0;
      }

    const handleNotiClick = async() => {
        if(!isSeen)
        {    
            try {
                const res = await updateNotiIsSeen(noti.noti_id, token)
                console.log(res)
                if(res && res.statusCode==200)
                {
                    unseenChange()
                    setIsSeen(true)
                }
            } catch (error) {
                
            }
        }
    }

    return (
        <div className='flex items-center gap-7 border-[1px] border-gray-600 cursor-pointer' onClick={async() => handleNotiClick()}>
            <div className='flex flex-col w-3/4 ml-2'>
                <span className="text-xs font-lg text-gray-600">
                {new Date(Number(noti.date))
                    .toLocaleString("en-US", {
                    timeZone: "Asia/Ho_Chi_Minh",
                    hour12: false,
                    })
                    .replace(/ GMT.*$/, "")}
                </span>
                <p>{noti.description}</p>
            </div>
            {
                !isSeen &&
                <div className=' w-[7px] h-[7px] rounded bg-red-600'></div>
            }
        </div>
    )
}

export default Notification