import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Reject, WatingList } from '../../Services/AdminService'
import Avt from '../../components/Avt'

const Dashboard = () => {

    const [list, setList] = useState([])
    useEffect(() => {
        Waiting()
    }, [])

    const handleAccept = async (id) => {
        try {
            console.log("Id day:", id);
            const res = await Accept(id);
            console.log(res);
            Waiting()
        } catch (error) {
            console.log(error);
        }
    }
    const handleReject = async (id) => {
        try {
            const res = await Reject(id)
            console.log(res);
            Waiting()
        } catch (error) {
            console.log(error);
        }
    }

    const Waiting = async () => {
        try {
            const res = await WatingList();
            console.log(res.data.data);
            setList(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='w-full flex items-center justify-center mt-10'>
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
            </div>
        </>
    )
}

export default Dashboard