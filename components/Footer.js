import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='h-auto flex-col items-center'>
        <div className="flex p-10 px-20 justify-between items-center">
            <div className="">
                <Link href={'/'}>
                    <h1 className='font-semibold text-5xl select-none'>mushi</h1>
                </Link>
            </div>
            <div className="flex">
                <ul className='flex space-x-8 font-semibold text-2xl'>
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
        </div>
        <div className="w-full text-xl bg-black flex text-white justify-center items-center">
            <small><b className='font-semibold'>mushi</b> is still in BETA</small>
        </div>
    </div>
  )
}

export default Footer