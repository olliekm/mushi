import React, {useState} from 'react'

export default function login() {
    
    const [hasAccount, setHasAccount] = useState(true)

    
  return (
    <div className='w-full h-[80vh] bg-gray-200'>
        <div className="w-full h-full flex justify-center items-center">
        {
            hasAccount ? (
            <div className="flex flex-col items-center">
                <h1 className='text-3xl mb-2'>Login to your account</h1>
                <div className="flex space-x-2">
                    <p>Don't have an account?</p>
                    <button className='underline' onClick={() => setHasAccount(false)}>Sign up</button>
                </div>
                <form action="" className='flex-col w-80 text-xl space-y-2 mt-4'>
                    <div className="flex flex-col">
                        <label>Username</label>
                        <input placeholder='Username' className='p-2 px-3 outline-none focus:p-3 focus:bg-gray-100 transition-all duration-200 text-xl rounded-md' type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label>Password</label>
                        <input placeholder='**********' className='p-2 px-3 outline-none focus:p-3 focus:bg-gray-100 transition-all duration-200 text-xl rounded-md' type="password" />
                    </div>
                    <div className="mt-6">
                        <button className='w-full text-xl font-semibold bg-black text-white py-3 rounded-md  '>Log in</button>
                    </div>
                </form>
            </div>
            ):(
            <div className="flex flex-col items-center">
                <h1 className='text-3xl mb-2'>Sign up for an account</h1>
                <div className="flex space-x-2">
                    <p>Already have an account?</p>
                    <button className='underline' onClick={() => setHasAccount(true)}>Log in</button>
                </div>
                <form action="" className='flex-col w-80 text-xl space-y-2 mt-4'>
                    <div className="flex flex-col">
                        <label>Username</label>
                        <input placeholder='Username' className='p-2 px-3 outline-none focus:p-3 focus:bg-gray-100 transition-all duration-200 text-xl rounded-md' type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input placeholder='John.Doe@email.com' className='p-2 px-3 outline-none focus:p-3 focus:bg-gray-100 transition-all duration-200 text-xl rounded-md' type="email" />
                    </div>
                    <div className="flex flex-col">
                        <label>Password</label>
                        <input placeholder='**********' className='p-2 px-3 outline-none focus:p-3 focus:bg-gray-100 transition-all duration-200 text-xl rounded-md' type="password" />
                    </div>
                    <div className="mt-6">
                        <button type='submit' className='w-full text-xl font-semibold bg-black text-white py-3 rounded-md  '>Sign in</button>
                    </div>
                </form>
            </div>
            )
        }
        </div>
    </div>
  )
}
