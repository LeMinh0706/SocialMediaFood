import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPost } from '../Services/Query/api'
import { useSelector } from 'react-redux'
import Post from '../components/Post'
import Search from '../components/Search'
import CreatePost from '../components/CreatePost'
import { fetchData } from '../Services/AxiosPost'

const Home = (props) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  // const account = useSelector(state => state.user.account)
  
  const [listPost, setListPost] = useState([])

  useEffect(() => {
    fetchPost();
  }, [])

  // console.log(listPost);

  const fetchPost = async () => {
    let res = await fetchData();
    // console.log("Res", res);
    if (res.status === 200) {
      setListPost(res.data.data)
    }
  }
  // console.log("Account:", account.username, "authenthicated:", isAuthenticated);
  return (
    <div className="pt-24 flex items-center flex-col gap-5">
      {isAuthenticated === false ?
        <></>
        :
        <CreatePost
          fetchPost={fetchPost}>

        </CreatePost>
      }
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
    </div>
  );
};

export default Home;
