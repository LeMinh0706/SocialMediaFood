import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchUserMe } from '../Services/Query/api'
import { useSelector } from 'react-redux'


const UserProfile = () => {

    const token = useSelector(state => state.user.account.accessToken)
    console.log("Token: ", token);

    const { data: myData, isLoading, isError, error } = useQuery(
        {
            queryKey: ["User"],
            queryFn: () => fetchUserMe(token),
            enabled: !!token,
        }
    );


    console.log("Data: ", myData)

    return (
        <>
            <div className='pt-10'>User profile: </div>
        </>
    )
}

export default UserProfile