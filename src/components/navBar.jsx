'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '@/features/auth/authSlice'
import { redirect } from 'next/navigation'
const NavBar = () => {
    const [logged, setLogged] = useState(null)
    const { user, isSuccess } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [toggleMenu, setToggleMenu] = useState(false)
    useEffect(() => {
        setLogged(user)
        dispatch(reset())
    }, [user, isSuccess])


    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        redirect('/auth/login')
    }
    return (
        <header className='bg-white py-1'>
            <nav className='bg-white  shadow-lg  py-2 pb-3'>
                <div className='w-[90vw] mx-auto flex justify-between items-center'>
                    <div>
                        <Link href='/'><h1 className='font-bold text-2xl cursor-pointer'>9ine Bank</h1></Link>
                    </div>


                    <ul className='md:flex gap-10 hidden text-lightGrey tracking-wide font-semibold'>
                        <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link href={'/services'}>Services</Link></li>
                        <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link href={'/contact'}>Contact Us</Link></li>
                        <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link href={'/about'}>About</Link></li>
                    </ul>
                    <ul className='md:flex gap-10 hidden text-lightGrey tracking-wide font-semibold'>
                        {!logged ? (
                            <>
                                <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link href={'/auth/register'}>Open New Account</Link></li>
                                <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link href={'/auth/login'}>Login</Link></li></>
                        ) : (
                            <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all' onClick={onLogout}>Logout</li>
                        )}


                    </ul>
                    <button className='md:hidden' onClick={() => setToggleMenu(!toggleMenu)}>{toggleMenu ? 'Close' : 'Menu'}</button>
                </div>
                {toggleMenu && (
                    <div className='md:hidden w-[90vw] mx-auto'>
                        <ul className='flex gap-5 flex-col my-5 text-lightGrey tracking-wide font-semibold'>
                            <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link href={'/services'}>Services</Link></li>
                            <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link href={'/contact'}>Contact Us</Link></li>
                            <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link href={'/about'}>About</Link></li>
                        </ul>
                        <ul className='flex gap-5 flex-col text-lightGrey tracking-wide font-semibold'>
                            <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link href={'/register'}>Open New Account</Link></li>
                            <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link href={'/auth/login'}>Login</Link></li>
                            <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link href={'/logout'}>Logout</Link></li>
                        </ul>
                    </div>
                )}

            </nav>
        </header >
    )
}

export default NavBar