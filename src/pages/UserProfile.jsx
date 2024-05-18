import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchUserMe } from '../Services/Query/api'
import { useSelector } from 'react-redux'
import Post from '../components/Post'

const UserProfile = () => {

    const token = useSelector(state => state.user.account.accessToken)
    // console.log("Token: ", token);
    const avtSrc = useSelector(state => state.user.account.avatar)
    const userName = useSelector(state => state.user.account.username)


    const { data: myData, isLoading, isError, error } = useQuery(
        {
            queryKey: ["User"],
            queryFn: () => fetchUserMe(token),
            enabled: !!token,
        }
    );
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;


    const Data = myData
    // console.log("Data: ", myData)
    // const myFeedData = myData.data;

    // console.log("New data: ", myFeedData);
    // const getDetail = myData.data.Post[0].PostImage[0]
    // console.log("Detail: ", getDetail);

    return (
        <>
            <div className='pt-20 flex items-center flex-col gap-5'>
                {Data.data.Post.map((item) => (
                    <Post key={item.id}
                        avt={avtSrc}
                        name={userName}
                        time={item.date_create_post}
                        description={item.description}
                        images={item.PostImage.map((iItem) => (
                            <img className='w-full h-auto' key={item.id} src={iItem.url_image}></img>
                        ))}
                    />
                ))}
            </div>
        </>
    )
}

export default UserProfile