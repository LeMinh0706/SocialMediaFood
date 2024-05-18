import React, { useState } from 'react'

const Search = () => {

    const [text, setText] = useState('')

    const handleSearch = (e) => {
        setText(e.target.value)
    }
    console.log(text);
    return (
        <div>
            <label className='flex items-center gap-2 border-2 pl-3 rounded-lg bg-white ' htmlFor="search">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-center w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input id='search' onChange={handleSearch} value={text} className='p-3 focus:outline-none border-l rounded-md w-[1000px]' type="text" placeholder='Searching' />
            </label>
        </div>
    )
}

export default Search