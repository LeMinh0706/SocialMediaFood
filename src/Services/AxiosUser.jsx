import axios from "./AxiosCustomize";

const fetchUserPost = async (userid, token) => {
    try {
        const response = await axios.post(
            `post/view-posts-user`,
            {
                user_id: userid,
                page_size: 20,
                page: 1
            },
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        throw new Error("There was an error fetching posts: " + error.message);
    }
}

const fetchUserMe = async (token) => {
    try {
        const response = await axios.get(`/user/me`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("There was an error fetching your profile: " + error.message);
    }
}

const fetchUser = async (user_id, user_id_via) => {
    try {
        const response = await axios.post(`user/yours`, {
            user_id: user_id,
            user_id_via: user_id_via
            });
        return response.data;
    } catch (error) {
        throw new Error("There was an error fetching your profile: " + error.message);
    }
}

const fetchUserSearch = async(key) => {
    try{
        const response = await axios.post(`/user/Search-User?key=${key}`);
        return response.data;
    }catch(error){
        throw new Error("There was an error fetching users data: " + error.message);
    }
}


export { fetchUserPost, fetchUserMe , fetchUserSearch, fetchUser}