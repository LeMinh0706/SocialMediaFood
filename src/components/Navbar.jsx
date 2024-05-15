import React from 'react'
import { navLink } from '../constant/navLink'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='relative'>
            <nav className='flex justify-center'>
                <ul className='flex'>
                    {navLink.map((item) => (
                        <li className='p-3 hover:underline' key={item.id}>
                            <Link to={item.id}>
                                <p>{item.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar