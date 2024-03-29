import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function NotFound (): React.ReactElement {
  useEffect(() => {
    document.documentElement.classList.add('transition-all')
  })

  return (
    <>
      <Navbar />
      <div className='hero min-h-screen text-space-cadet-600 dark:text-silver-pink-600'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold maintext'><Link to='/'>404 - Page not found</Link></h1>
            <p className='py-6'><Link to='/'>Click to go back to the homepage</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
