const fetchPost = async () =>{
    const response = await fetch('http://foodsocial.camenryder.xyz/post/view-posts?pageSize=3&page=1');
    const postsData = await response.json();
    return postsData;
}

export {fetchPost}