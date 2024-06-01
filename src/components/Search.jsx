import React, { useEffect, useReducer, useState } from 'react'
import { toast } from 'react-toastify';
import { fetchUserSearch } from '../Services/AxiosUser';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storeSearchResult } from '../action/searchAction';
import searchReducer from '../reducer/searchReducer';

const Search = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const [userList, setUserList] = useState()
   
    const [text, setText] = useState('')

    const onClickSearching = (e) => {
        console.log("Your click:", text);
    }

    const handleSearch = async(e) => {
        try{
            let res = await fetchUserSearch(e.target.value);
            if(res && res.statusCode === 200)
                setUserList(res.data);
        }catch(Error){}
    }



    useEffect(()=>{
        console.log(userList)
    }, [userList]);

    const handleKeyUp = (e) => {
        if(e.key === "Enter" && e.target.value !==''){
            console.log(e.key);
            dispatch(storeSearchResult(userList));
            navigate('search-result');
        }
        else if(e.key === "Enter" && e.target.value === '')
            console.log("Search box empty. Can't search!")
        else
            console.log(e.target.value)
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
                <input id='search' onKeyUp={handleKeyUp} onChange={handleSearch} className='p-3 focus:outline-none border-l rounded-md text-center w-[40rem]' type="text" placeholder='Tìm kiếm' />
            </label>
        </div>
    )
}

export default Search