import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPost } from '../Services/Query/api'
import { useSelector } from 'react-redux'


const Home = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const account = useSelector(state => state.user.account)

    // console.log("Account data: ", account);

    const { data: postData, isLoading, isError, error } = useQuery({
        queryKey: ["Posts"],
        queryFn: fetchPost,
    })

    // console.log(postData);

    console.log("Account:", account.username, "authenthicated:", isAuthenticated);
    return (
        <div className='flex justify-center'>
            <p>Home here</p>
        </div>
    )
}

export default Home