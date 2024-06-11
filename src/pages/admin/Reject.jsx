import React, { useEffect, useState } from 'react'
import { OutReject, RejectList } from '../../Services/AdminService'
import Avt from '../../components/Avt'

const Reject = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        Waiting()
    }, [])

    const handleDelete = async (id) => {
        try {
            const res = await OutReject(id)
            console.log(res);
            Waiting()
        } catch (error) {
            console.log(error);
        }
    }

    const Waiting = async () => {
        try {
            const res = await RejectList();
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
                            <th>Denied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr className='border-b' key={item.User.user_id}>
                                <td className='pl-[6.5rem] '><Avt src={item.User.url_avatar} alt="User Avatar" /></td>
                                <td className='text-center '>{item.User.fullname}</td>
                                <td className='text-center'>
                                    <button
                                        onClick={() => handleDelete(item.User.user_id)}
                                        className='text-white bg-red-600 p-3 rounded-md'>
                                        Delete
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

export default Reject