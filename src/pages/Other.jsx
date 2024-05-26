import React, { useEffect, useState } from 'react'
import { fetchUserPost } from '../Services/AxiosUser'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Post from '../components/Post'

const Other = () => {
    const token = useSelector((state) => state.user.account.accessToken);
    const myId = useSelector((state) => state.user.account.userId);
    // console.log(myId);
    const [list, setList] = useState([])
    const { userId } = useParams();
    const numberId = Number(userId)
    // console.log(typeof numberId, "-", numberId);
    useEffect(() => {
        fetchPost()
    }, []);


    const fetchPost = async () => {
        try {
            let res = await fetchUserPost(numberId, token);
            // console.log("res: ", res);
            if (res && res.statusCode === 200) {
                setList(res.data)
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    // console.log("Check other: ", list);

    return (
        <>
            <div className='pt-32 flex items-center flex-col gap-5'>
                {list.map((item) => (
                    <Post
                        key={item.post_id}
                        props={item}
                        post_id={item.post_id}
                        avt={item.User.url_avatar}
                        name={item.User.fullname}
                        time={item.date_create_post}
                        totalLike={item["Total react"]}
                        totalComment={item["Total comment"]}
                        description={item.description}
                        images={item.PostImage.map((iItem) => (
                            <img
                                className="w-full h-auto"
                                key={item.id}
                                src={iItem.url_image}
                            ></img>
                        ))}
                        fetchPost={fetchPost}
                    />
                ))}
            </div>
        </>
    )
}

export default Other