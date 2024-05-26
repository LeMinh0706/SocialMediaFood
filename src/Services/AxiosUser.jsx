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

const fetchUserSearch = async (key) => {
    try {
        const response = await axios.post(`/user/Search-User?key=${key}`);
        return response.data;
    } catch (error) {
        throw new Error("There was an error fetching users data: " + error.message);
    }
}

const updateBackground = async (token, userId, file) => {
    const formData = new FormData()
    formData.append("fileUpload", file)
    try {
        const response = await axios.put(`user/update-background-profile/${userId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    } catch (error) {
        throw new Error("Can't upload your background image: " + error.message)
    }
}

const updateAvatar = async (token, userId, file) => {
    const formData = new FormData()
    formData.append("fileUpload", file)
    try {
        const response = await axios.post(`user/upload-avatar/${userId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    } catch (error) {
        throw new Error("Can't not update your avatar: ", error.message)
    }
}

const updateProfile = async (token, userId, fullname, country, language, gender) => {
    try {
        const response = await axios.put(`user/update-infor-user/${userId}`, {
            fullname: fullname,
            country: country,
            language: language,
            gender: gender
        }, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    } catch (error) {
        throw new Error("Can't not update your profile: ", error.message)
    }
}


export { fetchUserPost, fetchUserMe, fetchUserSearch, updateBackground, updateAvatar, updateProfile }