import { useMutation } from '@tanstack/react-query';
import { useSelector } from "react-redux";

const fetchPost = async () =>{
    const response = await fetch('http://localhost/post/view-posts?pageSize=8&page=1');
    const postsData = await response.json();
    return postsData;
}

const fetchMyPost = async (token) => {
  const response = await fetch('http://localhost/post/view-posts-user', {
    method: 'Post',
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


const fetchUserMe = async (token) => {
    const response = await fetch('http://localhost/user/me', {
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




export {fetchPost, fetchUserMe, fetchMyPost}