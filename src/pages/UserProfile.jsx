import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import Post from '../components/Post'
import { fetchUserMe, fetchUserPost } from '../Services/AxiosUser'
import CreatePost from '../components/CreatePost'
import HeaderProfile from '../components/HeaderProfile'

const UserProfile = () => {

    // const { data: myData, isLoading, isError, error } = useQuery(
    //     {
    //         queryKey: ["User"],
    //         queryFn: () => fetchUserMe(token),
    //         enabled: !!token,
    //     }
    // );
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>An error occurred: {error.message}</div>;

    const [profile, setProfile] = useState({})
    const [listPost, setListPost] = useState([])

    const userId = useSelector(state => state.user.account.userId)
    const token = useSelector(state => state.user.account.accessToken)
    // console.log("Your profile: ", profile);
    console.log("List post: ", listPost);

    useEffect(() => {
        fetchPost();
        myProfile();
    }, []);

    const myProfile = async () => {
        try {
            let res = await fetchUserMe(token)
            // console.log("My profile: ", res);
            if (res && res.statusCode === 200) {
                setProfile(res.profile)
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    const fetchPost = async () => {
        try {
            let res = await fetchUserPost(userId, token);
            // console.log("res: ", res);
            if (res && res.statusCode === 200) {
                setListPost(res.data)
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <>
            <div className='flex items-center flex-col gap-5'>
                <HeaderProfile url_background_profile={profile.url_background_profile}
                    url_avatar={profile.url_avatar}
                    fullname={profile.fullname}
                    total_followee={profile.total_followee}
                ></HeaderProfile>
                <CreatePost
                    fetchPost={fetchPost}
                ></CreatePost>
                {listPost.map((item) => (
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

export default UserProfile