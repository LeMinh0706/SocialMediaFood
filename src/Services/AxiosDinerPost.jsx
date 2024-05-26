import axios from "./AxiosCustomize";

const createDinerPost = async (files, diner_name, diner_address, description, token, userId) => {
  const formData = new FormData();
  formData.append("diner_name", diner_name);
  formData.append("diner_address", diner_address);
  formData.append("description", description);
  formData.append("post_type_id", 2);

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
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

const updateDinerPost = async (files, description, token, postid) => {
  const formData = new FormData();
  formData.append("diner_name", diner_name);
  formData.append("diner_address", diner_address);
  formData.append("description", description);
  formData.append("post_type_id", 2);
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


export {
  createDinerPost,
  updateDinerPost,
};
