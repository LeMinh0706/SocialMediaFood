import React from 'react'
import { NavLink } from 'react-router-dom'
import RestaurantList from '../components/RestaurantList'

const Restaurant = () => {
    
  return (
    <div className='pt-28 pl-[300px] flex flex-col gap-8'>
        <NavLink className='p-2 bg-green-600 w-[113px] rounded-md' to={"create"}>Tạo nhà hàng</NavLink>
        <RestaurantList></RestaurantList>
    </div>
  )
}

export default Restaurant