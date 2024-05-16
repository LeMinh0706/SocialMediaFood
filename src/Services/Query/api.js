import { useSelector } from "react-redux";
const fetchPost = async () =>{
    const response = await fetch('http://foodsocial.camenryder.xyz/post/view-posts?pageSize=3&page=1');
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

export {fetchPost, fetchUserMe}