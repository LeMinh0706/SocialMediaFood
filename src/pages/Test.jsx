import { useEffect } from "react";
import { fetchUserMe, fetchUserPost } from "../Services/AxiosUser";
import { useSelector } from "react-redux";



const Test = () => {
    const userId = useSelector(state => state.user.account.userId)
    const token = useSelector(state => state.user.account.accessToken)

    console.log(userId, "-", token);

    useEffect(() => {
        fetchPost();
        myProfile();
    }, []);

    const myProfile = async () => {
        try {
            let res = await fetchUserMe(token)
            console.log("My profile: ", res);

        } catch (error) {
            console.error(error.message);
        }
    }

    const fetchPost = async () => {
        try {
            let res = await fetchUserPost(userId, token);
            console.log("res: ", res);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className='pt-24'>
            Test
        </div>
    );
}

export default Test