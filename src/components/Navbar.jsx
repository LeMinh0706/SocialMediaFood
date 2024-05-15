import React from 'react'
import { navLink } from '../constant/navLink'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="relative" >
            <div className="flex bg-white flex-col justify-center items-center p-2 w-full fixed">
                <nav className="flex flex-col justify-center items-center">
                    <ul className='flex gap-10'>
                        {navLink.map((item) => (
                            <li key={item.id}>
                                <Link to={item.id}>
                                    <p>{item.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default Navbar