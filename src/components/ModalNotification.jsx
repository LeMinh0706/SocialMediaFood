import React from 'react'

const ModalNotification = () => {
  return (
    <div className='flex flex-col justify-between items-center mt-1 z-50'>
      <div className='fixed text-[0px] leading-[0%] w-[0px] border-b-[10px] border-l-[10px] border-r-[10px] border-solid border-b-orange-400 border-l-transparent border-r-transparent'>
        
      </div>
      <div className='flex flex-col gap-5 fixed p-5 overflow-y-auto w-[250px] h-[350px] shadow-2xl bg-white mt-2 border-2 border-orange-400'>

      <p>Noti1</p>
      <p>Noti2</p>
      <p>Noti3</p>
      <p>Noti4</p>
      <p>Noti1</p>
      <p>Noti2</p>
      <p>Noti3</p>
      <p>Noti4</p>
      </div>
    </div>
  )
}

export default ModalNotification