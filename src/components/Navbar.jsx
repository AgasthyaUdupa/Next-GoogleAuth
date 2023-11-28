'use client'
import Link from 'next/link'
import React from 'react'
import { signIn,signOut, useSession } from 'next-auth/react'

const Navbar = () => {
    const {status} = useSession()
  return (
    <div className='p-4 flex justify-between items-center shadow-md'>
        <Link className='font-bold text-lg text-blue-500' href='/'>Joke For The Day</Link>
        {status === 'authenticated' ? (<button onClick={()=>signOut()} className='bg-slate-500 text-white py-2 px-6 rounded-md'>Sign-Out</button>) :
        (<button  onClick={()=>signIn("google")} className='bg-slate-500 text-white py-2 px-6 rounded-md'>Sign-In</button>)}
        
    </div>
  )
}

export default Navbar