import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchUserMe } from '../Services/Query/api'
import { useSelector } from 'react-redux'
import Avt from '../components/Avt'


const UserProfile = () => {

    const token = useSelector(state => state.user.account.accessToken)
    // console.log("Token: ", token);

    const { data: myData, isLoading, isError, error } = useQuery(
        {
            queryKey: ["User"],
            queryFn: () => fetchUserMe(token),
            enabled: !!token,
        }
    );


    console.log("Data: ", myData)
    const myFeedData = myData.data;
    const avtSrc = myFeedData.url_avatar
    const userName = myFeedData.fullname
    // console.log("New data: ", myFeedData);
    // const getDetail = myData.data.Post[0].PostImage[0]
    // console.log("Detail: ", getDetail);

    return (
        <>
            <div className='pt-10 flex items-center flex-col'>User profile:
                {myFeedData.Post.map((item) => (
                    <div className='w-2/5' key={item.post_id}>
                        <div className='flex items-center gap-5'>
                            <Avt src={avtSrc}></Avt>
                            <div>
                                <p>{userName}</p>
                                <p>{Date(item.date_create_post).toLocaleString('en-US', {
                                    timeZone: 'Asia/Ho_Chi_Minh',
                                    hour12: false,
                                }).replace(/ GMT.*$/, '')}</p>
                            </div>
                        </div>
                        <div>
                            <p>{item.description}</p>
                            <div>
                                {item.PostImage.map((iItem) => (
                                    <img key={iItem.post_image_id} src={iItem.url_image} alt="" />
                                ))}
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UserProfile