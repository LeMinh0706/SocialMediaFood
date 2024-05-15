import React from 'react'
import { useSelector } from 'react-redux'

const Home = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const account = useSelector(state => state.user.account)

    // console.log("Account:", account.username, "authenthicated:", isAuthenticated);
    return (
        <div className='flex justify-center'>
            <p>Home here</p>
        </div>
    )
}

export default Home