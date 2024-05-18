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

const createPost = async (userId, accessToken, description, image) => {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('image', image);

    try {
        const response = await axios.post(`post/create-post/${userId}`, formData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
export { createPost }
