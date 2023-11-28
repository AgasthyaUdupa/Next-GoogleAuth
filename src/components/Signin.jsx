'use client'
import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

const Signin = () => {
    return (
        <>
        <button onClick={()=>signIn('google')} className='flex items-center gap-4 shadow-lg rounded-lg'>
        <Image width={55} height={55}
         src='https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png' alt='googleLogo' />
       <span className='bg-blue-500 text-white px-4 py-3 font-semibold'>SignIn With Google</span> </button>
        </>

    )
}

export default Signin