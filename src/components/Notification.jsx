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
            <p className='w-3/4 ml-2'>{noti.description}</p>
            {
                !isSeen &&
                <div className=' w-[7px] h-[7px] rounded bg-red-600'></div>
            }
        </div>
    )
}

export default Notification