import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../Services/Query/api";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import Search from "../components/Search";
import CreatePost from "../components/CreatePost";
import { fetchData } from "../Services/AxiosPost";

const Home = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  // const account = useSelector(state => state.user.account)

  const [listPost, setListPost] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    let res = await fetchData();
    // console.log("Res", res);
    if (res.status === 200) {
      setListPost(res.data.data);
    }
  };
  // console.log(listPost);

  // const { data: postData, error, isLoading } = useQuery({
  //     queryKey: ["Posts"],
  //     queryFn: fetchPost,
  // })
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>An error occurred: {error.message}</div>;

  // console.log(postData.data);

  // console.log("Account:", account.username, "authenthicated:", isAuthenticated);
  return (
    <div className="pt-24 flex items-center flex-col gap-5">
      {isAuthenticated ? <CreatePost /> : ""}
      {listPost &&
        listPost.length > 0 &&
        listPost.map((item) => (
          <Post
            key={item.post_id}
            avt={item.User?.url_avatar}
            name={item.User?.fullname}
            time={item.date_create_post}
            totalLike={item["Total react"]}
            totalComment={item["Total comment"]}
            description={item.description}
            userid={item.user_id}
            props={item}
            post_id={item.post_id}
            images={item.PostImage.map((iItem) => (
              <img
                className="w-full h-auto"
                key={iItem.id}
                src={iItem.url_image}
              ></img>
            ))}
          />
        ))}
    </div>
  );
};

export default Home;
