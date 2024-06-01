import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../Services/Query/api";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import Search from "../components/Search";
import CreatePost from "../components/CreatePost";
import { fetchData } from "../Services/AxiosPost";
import InfiniteScroll from "../components/InfiniteScroll";

const Home = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  // const account = useSelector(state => state.user.account)

  const [listPost, setListPost] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
     fetchPost(page);
  }, [page]);

  // console.log(listPost);

  const fetchPost = async (page) => {
    let res = await fetchData(page);
     console.log(res) ; 
    // console.log("Res", res);
    if (res.status === 200) {
      setListPost([...listPost, ... res.data.data]);
      setTotalRows(res.data.total);
    }
  };
  // console.log("Account:", account.username, "authenthicated:", isAuthenticated);
  return (

      <InfiniteScroll 
        loader={<p>loading...</p>}
        className="pt-24 flex items-center flex-col gap-5"
        fetchMore={() => setPage((prev) => prev + 1)}
        hasMore={listPost.length < totalRows}
        endMessage={<p>You have seen it all</p>}
      >
        {isAuthenticated === false ? (
          <></>
        ) : (
          <CreatePost fetchPost={fetchPost}></CreatePost>
        )}
        {listPost.map((item) => (
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
            fetchPost={fetchPost}
          />
        ))}
      </InfiniteScroll>
  );
};

export default Home;
