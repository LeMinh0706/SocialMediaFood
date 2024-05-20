import { useMutation } from '@tanstack/react-query';
import { useSelector } from "react-redux";
const fetchPost = async () =>{
    const response = await fetch('http://foodsocial.camenryder.xyz/post/view-posts?pageSize=8&page=1');
    const postsData = await response.json();
    return postsData;
}
const fetchUserMe = async (token) => {
    const response = await fetch('http://foodsocial.camenryder.xyz/user/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const UserData = await response.json();
    return UserData;
};


const usePost = () => {
  const token = useSelector(state => state.user.account.accessToken)
  const userId = useSelector(state => state.user.account.userId)

  const mutation = useMutation(async ({ description, file }) => {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('file', file);

    const url = `http://foodsocial.camenryder.xyz/post/create-post/${userId}`; // Xây dựng URL với userId

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`, // Truyền accessToken từ Redux
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to post');
    }

    return response.json();
  });
  console.log(mutation);
  return mutation;
};


export {fetchPost, fetchUserMe, usePost}