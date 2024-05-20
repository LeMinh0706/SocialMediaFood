import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchUserList } from '../Services/AxiosUser';
import '../style/style.css'

const Search = () => {

    

    const [usersList, setUserList] = useState()


    const [text, setText] = useState('')



    const onClickSearching = (e) => {
        console.log("Your click:", text);
        useNavigate()
    }

    const handleSearch = async(e) => {
        setText(e.target.value)
        
    }

    const handleKeyUp = async(e) =>{
        if(e.key !== "Enter" && e.target.value !== ''){
            console.log(e.target.value)
            await fetchUserList(text).then(data => {
                console.log(data)
                setUserList(data)
                
            })
            .catch(error => {
                console.error(error.message);
                return;
            });
        }
        else if(e.key === "Enter" && e.target.value !== ''){
            console.log(e.key);

        }
        else if(e.key === "Enter" && e.target.value === ''){
            console.log("Please fill the search box")
        }
        else
        {
            
        }
    }

    useEffect(()=>{
        
    }, [usersList, text]
    );

    return (
        <div className='search-container'>
            <div className="search-box">
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
                    <input id='search-input' onKeyUp={handleKeyUp} onChange={handleSearch} value={text} className='p-3 focus:outline-none border-l rounded-md text-center w-[48rem]' type="text" placeholder='Tìm kiếm' />
                    
                </label>
            </div>
            <div id="search-result" className={`dropdown-content ${text!==''? "active":''}`}>
                {   usersList &&
                    usersList.data.result.map((item) => (
                    <> 
                    <div className="suggestion">{item.fullname}</div>
                    </>
                )
                )}
            </div>
        </div>
    )
}

export default Search