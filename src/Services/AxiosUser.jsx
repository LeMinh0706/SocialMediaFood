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

const fetchUserList = async (key) => {
    try {
        const response = await axios.post(`/user/Search-User?key=${key}`);
        return response.data;
    } catch (error) {
        throw new Error("There was an error fetching the data: " + error.message);
    }
};

export { fetchUserPost, fetchUserMe , fetchUserList}