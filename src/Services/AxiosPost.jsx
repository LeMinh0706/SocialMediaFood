import axios from "./AxiosCustomize";

// const createPost = async (userId, accessToken, description, image) => {
//     const formData = new FormData();
//     formData.append('description', description);
//     formData.append('image', image);

//     try {
//         const response = await axios.post(`post/create-post/${userId}`, formData, {
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//                 'Content-Type': 'multipart/form-data',
//             },
//         });
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };
// export { createPost }


///////
const createPost = async (files, description, token, userId) => {
    // if (!file) {
    //     throw new Error("Please select a file first!");
    // }


    const formData = new FormData();
    formData.append('description', description);

    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
    }

    // formData.append("files", files)

    try {
        const response = await axios.post(
            `post/create-post/${userId}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw new Error("There was an error uploading the file: " + error.message);
    }
};


const updatePost = async (files, description, token, postid) => {
    const formData = new FormData();
    formData.append("description", description);
    console.log("files", files);
    if (files[0] != null) {
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }
    }

    try {
        const response = await axios.put(
            `post/update-post/${postid}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("There was an error uploading the file:", error);
        throw new Error("There was an error uploading the file: " + error.message);
    }
};

export default updatePost;


const removePost = async (postid, userId, token) => {
    try {
        const response = await axios.delete(
            `post/delete-post`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                data: {
                    post_id: postid,
                    user_id: userId,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error("There was an error deleting the post: " + error.message);
    }
};

const fetchData = async () => {
    return axios.get('post/view-posts?pageSize=20&page=1');
};

export { createPost, removePost, fetchData, updatePost }