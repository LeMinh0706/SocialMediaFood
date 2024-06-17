import React from 'react'
import { NavLink } from 'react-router-dom'

const RestaurantForm = () => {
    const submitForm = (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)

        console.log(payload)
    }
    return (
        <form onSubmit={submitForm} className='flex flex-col gap-5' enctype='multipart/form-data'>
            <label>
                Tên nhà hàng:
                <br/><input type='text' className='border-2' name='dinerName' placeholder='Nhập tên nhà hàng'/><br/>
            </label>
            <label>
                Địa chỉ:
                <br/><input type='text' className='border-2' name='dinerAddress' placeholder='Nhập địa chỉ'/><br/>
            </label>
            <label>
                Mô tả:
                <br/><textarea className='border-2 min-w-[500px] min-h-[250px]' name='description'/><br/>
            </label>
            <label>
                Hình ảnh:<span> </span>
                <input type='file' name='image'/>
            </label>
            <div className='flex gap-2 items-center'>
                <input type='submit' name='Submit' className='py-2 w-[65px] rounded-md bg-blue-500 hover:bg-blue-400 cursor-pointer'/>
                |
                <NavLink to={'/restaurant'} className='py-2 w-[65px] rounded-md bg-gray-400 text-center'>Close</NavLink>
            </div>    
        </form>
    )
}

export default RestaurantForm