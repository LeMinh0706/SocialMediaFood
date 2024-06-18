import React, { useEffect, useState } from 'react'
import { viewListReport } from '../../Services/AdminService'
import Post from '../../components/Post'
import PostReport from '../../components/PostReport'

const Report = () => {
    const [list, setList] = useState([])
    const [page, setPage] = useState(1)
    const [pagesize, setPagesize] = useState(1)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetchPost(page, pagesize)
        console.log(list);
        console.log(Math.ceil(total / pagesize));
        // console.log(list.User.user_id);
    }, [page, pagesize])

    const fetchPost = async (page, pagesize) => {
        try {
            const res = await viewListReport(page, pagesize)
            // console.log(res.data.data[0].user_id);
            // console.log(res.data.data.data[0].Post);
            setList(res.data.data.data)
            setTotal(res.data.data.total)
        } catch (error) {
            console.log(error);
        }
    }

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= total) {
            setPage(newPage);
        }
    };


    return (
        <div className='flex flex-col items-center'>
            <div className="mt-2">
                <button className='p-2 border rounded-lg m-4' onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                    Previous
                </button>
                <spa2>Page {page} of {total}</spa2>
                <button className='p-2 border rounded-lg m-4' onClick={() => handlePageChange(page + 1)} disabled={page === total}>
                    Next
                </button>
            </div>
            <div className='w-full flex items-center justify-center mt-3'>
                {list.map((item) => (
                    <>
                        <PostReport
                            key={item.Post.post_id}
                            name={item.Post.User.fullname}
                            time={item.Post.date_create_post}
                            avt={item.Post.User.url_avatar}
                            description={item.Post.description}
                            images={item.Post.PostImage.map((iItem) => (
                                <img
                                    className="w-full h-auto"
                                    key={iItem.post_image_id}
                                    src={iItem.url_image}
                                ></img>
                            ))}
                        >
                        </PostReport>

                    </>

                ))}
            </div>

        </div>
    )
}

export default Report