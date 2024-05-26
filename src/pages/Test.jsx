import { useEffect, useState } from "react";
import { fetchUserMe, fetchUserPost, updateAvatar, updateBackground } from "../Services/AxiosUser";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm"
import BackgroundModal from "../components/BackgroundModal";
import AvatarModal from "../components/AvatarModal";
import UpdateUserModal from "../components/UpdateUserModal";
import HeaderProfile from "../components/HeaderProfile";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";



const Test = () => {

    const [profile, setProfile] = useState({})
    const [listPost, setListPost] = useState([])


    const userId = useSelector(state => state.user.account.userId)
    const token = useSelector(state => state.user.account.accessToken)
    // console.log("Your profile: ", profile);
    // console.log("List post: ", listPost);

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
                    props={profile}
                    myProfile={myProfile}
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

export default Test