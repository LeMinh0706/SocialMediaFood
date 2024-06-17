import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchPost } from "../Services/AxiosPost";
import Post from "../components/Post";




const Test = () => {
    const [listPost, setListPost] = useState([])
    const [page, setPage] = useState(1)
    const [pagesize, setPagesize] = useState(1)
    const [total, setTotal] = useState(8)


    const userId = useSelector(state => state.user.account.userId)
    const token = useSelector(state => state.user.account.accessToken)
    // console.log("Your profile: ", profile);
    // console.log("List post: ", listPost);

    useEffect(() => {
        fetchData(page, pagesize);
        console.log(listPost);
    }, [page, pagesize]);



    const fetchData = async (page, pagesize) => {
        try {
            let res = await fetchPost(page, pagesize);
            console.log("res: ", res.data.data);
            setListPost(res.data.data)
        } catch (error) {
            console.error(error.message);
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= total) {
            setPage(newPage)
        }

    }
    return (
        <div className="pt-24 flex items-center flex-col gap-5">
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
            <div className="">
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                    Previous
                </button>
                <span>Page {page} of {total}</span>
                <button onClick={() => handlePageChange(page + 1)} disabled={page === total}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Test