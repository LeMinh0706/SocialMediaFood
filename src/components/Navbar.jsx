import React from 'react'
import { navLink } from '../constant/navLink'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Search from './Search'
// import { Logo } from '../assets/Logo.svg'

const Navbar = () => {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    // const account = useSelector(state => state.user.account)
    const username = useSelector(state => state.user.account.username)
    const avt = useSelector(state => state.user.account.avatar)

    return (
        <div className='relative z-50'>
            <nav className='fixed p-4 w-full justify-center flex bg-white items-center shadow-md'>
                <ul className='w-full flex items-center justify-between'>
                    <li className='w-[400px]'>
                        <Link className='flex items-center gap-3' to='/'>
                            <img className='w-10 object-cover rounded-full' src="http://camenryder.xyz/public/img/logo_web_app.png" alt="Logo" />
                            <p className='text-lg text-gray-500 font-semibold'>SocialFood</p>
                        </Link>
                    </li>
                    <li>
                        <Search></Search>
                    </li>
                    {isAuthenticated === false ?
                        <li className='text-lg font-medium w-[400px] text-end'>
                            <Link to='login'>Login</Link>
                        </li>
                        :
                        <div className='flex items-center gap-10 w-[400px] justify-end'>
                            <li>
                                <Link to='test'>Test</Link>
                            </li>
                            <li>
                                <Link to='profile'>
                                    <div className='flex items-center gap-3'>
                                        <p className='text-lg font-medium'>{username}</p>
                                        <img className='h-10 w-10 rounded-full object-cover' src={avt} alt="" />
                                    </div>
                                </Link>
                            </li>
                        </div>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar