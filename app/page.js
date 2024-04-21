
'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Home = () => {
  const router=useRouter()


  function handleNavigate(page){
    router.push(page)
  }



  return (
    <section>
      <h1>useRouter</h1>
      <button  className="border px-2 py-4" onClick={()=>router.push('about')}>
        Go to about
      </button>
      <br />
      &nbsp;
      <button className='border px-4 py-8' onClick={()=>handleNavigate('portfolio')}> Go to Portfolio</button> <br />
      <button className='border px-4 py-8' onClick={()=>handleNavigate('login')}>
        Go to Login
      </button>
      <Link href="/projects"><button className="border px-4 py-8">Projects</button></Link>
    </section>
  );
}

export default Home