import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../Services/Query/api";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import Search from "../components/Search";
import axios from "axios";

const Home = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);

  // console.log("Account data: ", account);

  // const {
  //   data: postData,
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["Posts"],
  //   queryFn: fetchPost,
  // });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://camenryder.xyz/post/view-posts?pageSize=10&page=1`
      );
      return response;
    } catch (error) {
      throw new Error("There was an error fetching the data: " + error.message);
    }
  };

  const fetchPost = async () => {
    console.log("Update data fetchPost ");
    let res = await fetchData();
    if (res.status === 200) {
      setPosts(res.data.data);
    }
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>An error occurred: {error.message}</div>;

  console.log(posts);
  console.log("======== _ ======== ");
  // console.log(posts.data[0]);
  // console.log("Account:", account.username, "authenthicated:", isAuthenticated);
  return (
    <div className="pt-24 flex items-center flex-col gap-5">
      {posts.map((item) => (
        <Post
          key={item.post_id}
          props={item}
          post_id={item.post_id}
          avt={item.User.url_avatar}
          name={item.User.fullname}
          time={item.date_create_post}
          totalLike={item["Total react"]}
          totalComment={item["Total comment"]}
          description={item.description}
          images={item.PostImage.map((iItem) => (
            <img
              className="w-full h-auto"
              key={item.id}
              src={iItem.url_image}
            ></img>
          ))}
        />
      ))}
    </div>
  );
};

export default Home;
