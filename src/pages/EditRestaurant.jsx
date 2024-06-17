import React from 'react'
import RestaurantForm from '../components/RestaurantForm'

const EditRestaurant = () => {
  return (
    <div className="flex flex-col pt-24 pl-[300px] gap-10">
        <h1 className='text-4xl'>Edit Restaurant</h1>
        <RestaurantForm></RestaurantForm>
    </div>
  )
}

export default EditRestaurant