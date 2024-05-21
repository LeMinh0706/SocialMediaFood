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
  formData.append("description", description);

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  // formData.append("files", files)

  try {
    const response = await axios.post(`post/create-post/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

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
    const response = await axios.put(`post/update-post/${postid}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("There was an error uploading the file:", error);
    throw new Error("There was an error uploading the file: " + error.message);
  }
};

export default updatePost;

const removePost = async (postid, userId, token) => {
  try {
    const response = await axios.delete(`post/delete-post`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        post_id: postid,
        user_id: userId,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("There was an error deleting the post: " + error.message);
  }
};

const createReactPost = async (post_id, token, user_id) => {
  try {
    const response = await axios.post(
      "http://camenryder.xyz/react-post/react-post",
      {
        post_id: post_id,
        like_state: 1,
        user_id: user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("There was an error fetching the data: " + error.message);
  }
};

const removeReactPost = async (post_id, token, user_id) => {
  console.log("Remove react post");
  console.log(post_id);
  console.log(user_id);
  try {
    const response = await axios.delete(
      "http://camenryder.xyz/react-post/remove-react",
      {
        "post_id": post_id,
        "user_id": user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Data remove: ");
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw new Error("There was an error fetching the data: " + error.message);
  }
};

const viewCommentsUser = async (post_id, page) => {
  try {
    const response = await axios.post(
      "http://camenryder.xyz/comment/view-comment-post",
      {
        post_id: post_id,
        page_size: 30,
        page: page,
      }
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );
    return response.data;
  } catch (error) {
    throw new Error("There was an error fetching the data: " + error.message);
  }
};

const deleteCommentsUser = async (post_id, token, user_id) => {
  try {
    console.log("Hàm delete comment? ");
    console.log(post_id);
    console.log(token);
    console.log(user_id);
    const response = await axios.delete(
      `http://camenryder.xyz/post/delete-post`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          post_id: post_id,
          user_id: user_id,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("comment delete err ?  " + error.message);
  }
};

const createCommentsUser = async (
  post_top_id,
  image,
  description,
  token,
  user_id
) => {
  try {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("post_top_id", post_top_id);
    if (image) {
      formData.append("fileUpload", image);
    }
    const response = await axios.post(
      `http://camenryder.xyz/comment/create-comment/${user_id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("data err?  " + error.message);
  }
};
const fetchData = async () => {
  return axios.get("post/view-posts?pageSize=20&page=1");
};

export {
  createPost,
  viewCommentsUser,
  createCommentsUser,
  deleteCommentsUser,
  createReactPost,
  removeReactPost,
  removePost,
  fetchData,
  updatePost,
};
