import React, { useEffect, useState } from 'react'
import { viewPremium } from '../../Services/AdminService'
import Avt from '../../components/Avt'

const PremiumList = () => {

    const [list, setList] = useState([])
    const [page, setPage] = useState(1)
    const [pagesize, setPagesize] = useState(4)


    useEffect(() => {
        fetchList(page, pagesize)
        console.log(list);
    }, [page, pagesize])

    const fetchList = async (page, pagesize) => {
        try {
            const res = await viewPremium(page, pagesize)
            console.log(res.data.data.data);
            setList(res.data.data.data)
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
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr className='border-b' key={item.User.user_id}>
                                <td className='pl-[14.5rem] mb-6'><Avt src={item.User.url_avatar} alt="User Avatar" /></td>
                                <td className='text-center '>{item.User.fullname}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </>
    )
}

export default PremiumList