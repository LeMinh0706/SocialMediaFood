import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser, fetchUserPost } from "../Services/AxiosUser";
import HeaderProfile from "../components/HeaderProfile";
import { useEffect, useState } from "react";
import Post from "../components/Post";

const OtherProfile = () => {

    let isLoad = false;

    let { id } = useParams()
    const userId = useSelector(state => state.user.account.userId)
    const token = useSelector(state => state.user.account.accessToken)

    
    const [profile, setProfile] = useState({});
    const [listPost, setListPost] = useState([])

    const otherProfile = async () => {
        try {
            let res = await fetchUser(userId,parseInt(id))
            if (res && res.statusCode === 200) {
                setProfile(res.profile)
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    const fetchPost = async () => {
        try {
            let res = await fetchUserPost(parseInt(id), token);
            // console.log("res: ", res);
            if (res && res.statusCode === 200) {
                setListPost(res.data)
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        otherProfile();
        fetchPost();
    }, [id]);
    
    return (
        <>
            <div className='flex items-center flex-col gap-5'>
                <HeaderProfile 
                    user_id={parseInt(id)}
                    url_background_profile={profile.url_background_profile}
                    url_avatar={profile.url_avatar}
                    fullname={profile.fullname}
                    isCurrentUser = {false}
                    props={profile}
                    myProfile={otherProfile}
                >
                </HeaderProfile>
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
    );
}

export default OtherProfile