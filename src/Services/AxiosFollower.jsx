import axios from "./AxiosCustomize";

const createFollower = async(user_id, user_follower_id ,token) => {
    try {
        const response = await axios.post(`/tracking/create-following-a-user`, 
        {
            user_id: user_id,
            user_follower_id: user_follower_id
        },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        return response.data;
    } catch (error) {
        throw new Error("There was an error fetching your profile: " + error.message);
    }
}

const removeFollower = async(user_id, user_follower_id ,token) => {
    try {
        const response = await axios.delete(`/tracking/remove-follower-user`, 
        {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: {
              user_id: user_id,
              user_follower_id: user_follower_id,
            },
          });
        return response.data;
    } catch (error) {
        throw new Error("There was an error fetching your profile: " + error.message);
    }
}

const removeFollowing = async(user_id, user_following_id ,token) => {
    try {
        const response = await axios.delete(`/tracking/remove-following-user`, 
        {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: {
              user_id: user_id,
              user_following_id: user_following_id,
            },
          });
        return response.data;
    } catch (error) {
        throw new Error("There was an error fetching your profile: " + error.message);
    }
}

const fetchFollower = async(user_id ,token) => {
    try {
        const response = await axios.get(`/tracking/get-follower-yours/${user_id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("There was an error fetching your profile: " + error.message);
    }
}

const fetchFollowing = async(user_id, token) => {
    try {
        const response = await axios.get(`/tracking/get-following-users/${user_id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("There was an error fetching your profile: " + error.message);
    }
}

export {fetchFollower, fetchFollowing, createFollower, removeFollower, removeFollowing}