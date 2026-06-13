import React from 'react'
import SearchBar from './SearchBar'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-linear-to-b from-green-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto' >Learn skills that move your career forward <span className='text-green-600'>at your own pace</span><img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Join thousands of learners gaining practical experience through expert-led courses, hands-on learning, and industry-focused training.</p>
      <p className='md:hidden text-gray-500 max-w-2xl mx-auto'>Join thousands of learners gaining practical experience through expert-led courses and hands-on learning.</p>
      <SearchBar />
    </section>
  )
}

export default Hero
