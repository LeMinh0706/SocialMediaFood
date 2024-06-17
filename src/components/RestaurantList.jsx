import React from 'react'
import { NavLink } from 'react-router-dom'

const RestaurantList = () => {
  return (
    <div>
        <table className='table-fixed w-[800px] border-separate border border-slate-500'>
          <tr className='bg-orange-300'>
            <th>Restaurant Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
          <tr>
            <th>KFC</th>
            <th>Thu Duc</th>
            <th>
              <div className='flex justify-center gap-4'>
                <NavLink to={'edit'} className='py-2 w-[65px] rounded-md bg-blue-400 text-center'>Detail</NavLink>
                <NavLink className='py-2 w-[65px] rounded-md bg-rose-400 text-center'>Remove</NavLink>
                <NavLink className='py-2 w-[65px] rounded-md bg-green-400 text-center'>Publish</NavLink>
              </div>
            </th>
          </tr>
          <tr>
            <th>Lotteria</th>
            <th>Q7</th>
            <th>
              <div className='flex justify-center gap-4'>
                <NavLink to={'edit'} className='py-2 w-[65px] rounded-md bg-blue-400 text-center'>Detail</NavLink>
                <NavLink className='py-2 w-[65px] rounded-md bg-rose-400 text-center'>Remove</NavLink>
                <NavLink className='py-2 w-[65px] rounded-md bg-green-400 text-center'>Publish</NavLink>
              </div>
            </th>
          </tr>
        </table>
    </div>
  )
}

export default RestaurantList