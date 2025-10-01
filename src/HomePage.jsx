import React from 'react'
import NavBar from './NavBar'

export default function HomePage() {
  return (
    <section className='flex flex-col h-screen'>
        <section className='flex-[1]'>
          <NavBar/>
        </section>
        <section className='flex-[8]'>hi</section>
    </section>
  )
}
