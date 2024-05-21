import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { fetchUserSearch } from '../Services/AxiosUser';

const Search = () => {

    const [userList, setUserList] = useState()

    const [text, setText] = useState('')

    const onClickSearching = (e) => {
        console.log("Your click:", text);
    }

    const handleSearch = (e) => {
        const users = fetchUserSearch(e.target.value)
        setUserList(users);
    }

    useEffect(()=>{

    }, [userList]);

    const handleKeyUp = (e) => {
        
    }

    return (
        <div>
            <label className='flex items-center gap-2 border-2 pl-2 rounded-lg bg-white ' htmlFor="search">
                {text === '' ?
                    <button disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-center w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    :
                    <button onClick={onClickSearching}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-center w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>

                }
                <input id='search' onChange={handleSearch} value={text} className='p-3 focus:outline-none border-l rounded-md text-center w-[48rem]' type="text" placeholder='Tìm kiếm' />
            </label>
        </div>
    )
}

export default Search