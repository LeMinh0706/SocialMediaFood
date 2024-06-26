import React, { useEffect, useState } from 'react'
import { Accept, WatingList } from '../../Services/AdminService'
import Sidebar from '../../components/Sidebar'
import Avt from '../../components/Avt'
import HeaderAdmin from './components/HeaderAdmin'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import SidebarLeft from '../../components/SidebarLeft'


const Admin = () => {


    // if (role_id !== 2) return <Navigate to="/accessdenied" />

    return (
        <>
            <HeaderAdmin />
            <SidebarLeft></SidebarLeft>
            <Outlet></Outlet>
            {/* <div className='w-full flex items-center justify-center mt-10'>
                <table className='w-[1000px] table-fixed'>
                    <thead>
                        <tr>
                            <th>Avt</th>
                            <th>Name</th>
                            <th>Accept</th>
                            <th>Denied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr className='border-b' key={item.User.user_id}>
                                <td className='pl-[6.5rem] '><Avt src={item.User.url_avatar} alt="User Avatar" /></td>
                                <td className='text-center '>{item.User.fullname}</td>
                                <td className='text-center p-3'>
                                    <button
                                        className='text-white bg-green-600 p-3 rounded-md'
                                        onClick={() => handleAccept(item.User.user_id)}
                                    >
                                        Accept
                                    </button>
                                </td>
                                <td className='text-center'>
                                    <button
                                        onClick={() => handleReject(item.User.user_id)}
                                        className='text-white bg-red-600 p-3 rounded-md'>
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </>

    )
}

export default Admin