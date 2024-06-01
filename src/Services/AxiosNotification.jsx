import axios from 'axios'
import React from 'react'

const getAllNotification = async(user_id, token) => {
  try {
    const response = await axios.get(`http://foodsocial.camenryder.xyz/notification/get-all-notification/${user_id}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return response.data
  } catch (error) {
    throw new Error("Unable to get notifications: ", error.message)
  }
}

const updateNotiIsSeen = async(noti_id, token) => {
  try {
    const response = await axios.post(`http://foodsocial.camenryder.xyz/notification/read-notification/${noti_id}`,{},{
      headers: {
        "Authorization": `Bearer ${token}`
    }
    }
    )
    return response.data
  } catch (error) {
    throw new Error("Unable to get notifications: ", error.message)
  }
}

const updateAllNotiIsSeen = async(user_id, token) => {
  try {
    const response = await axios.post(`http://foodsocial.camenryder.xyz/notification/read-all-notification/${user_id}`,{},{
      headers: {
        "Authorization": `Bearer ${token}`
    }
    }
    )
    return response.data
  } catch (error) {
    throw new Error("Unable to get notifications: ", error.message)
  }
}

export {getAllNotification, updateNotiIsSeen, updateAllNotiIsSeen}