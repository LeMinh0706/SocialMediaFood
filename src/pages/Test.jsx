import { useEffect } from "react";
import { fetchUserMe, fetchUserPost } from "../Services/AxiosUser";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm"



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
        <div className='pt-24 flex items-center justify-center'>
            <div>
                <button className="border-2 border-r-0 p-5 py-2 text-lg font-medium w-72">Login</button>
                <button className="border-2 border-l-0 p-5 py-2 text-lg font-medium w-72">Register</button>
                <LoginForm></LoginForm>
            </div>
        </div>
    );
}

export default Test