'use client'
import { useEffect } from 'react'
import Signin from './Signin'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const UserInfo = () => {
//     useEffect(()=>{
//      const getData = async ()=>{
// const query = await fetch('https://api-ninjas.com/api/jokes')
// const res = await query.json()
// console.log(res)
//      }
//      getData()
//     },[])
    const { status, data: session } = useSession()
    if (status === 'authenticated') {
        return (
            <div className='shadow-xl p-8 rounded-md flex flex-col bg-yellow-200'>
            <Image className='rounded-full' src={session?.user?.image} width={30} height={30} alt='' />
            <div>Name : <span className='font-bold'>{session?.user?.name}</span></div>
            <div >Email: <span>{session?.user?.email}</span></div>
        </div>
        )
       
    } else {
        return (<Signin />)
    }
}

export default UserInfo