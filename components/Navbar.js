import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='w-full bg-gray-200 h-auto text-black flex items-center justify-between p-10 px-20 backdrop-blur-sm'>
        <div className="text-lg font-semibold flex items-end space-x-20">
            <Link href={'/'}>
                <h1 className='font-semibold text-5xl select-none'>mushi</h1>
            </Link>
            <ul className='flex space-x-8'>
                <Link href={'/home'}>
                    <li className='cursor-pointer'>Home</li>   
                </Link>
                <Link href={'/new-posts'}>
                    <li className='cursor-pointer'>New posts</li>
                </Link>
                <Link href={'/reviewers'}>
                    <li className='cursor-pointer'>Reviewers</li>
                </Link>
            </ul>
        </div>
        <div className="flex items-center space-x-3">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 fill-gray-400' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                <input type="text" placeholder='Search...' className='outline-none transition-all bg-white/0 focus:w-48 duration-200 transform w-32 rounded-full py-2 px-4' />
            </div>
            <Link href={'/login'}>
                <button className='px-7 py-2 bg-black rounded-full text-lg text-white'>Log in</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar