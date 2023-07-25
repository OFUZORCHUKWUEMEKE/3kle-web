import React from 'react'
import '../styles/hero.css'
import Header from './Header'
// background: linear-gradient(180deg, #1826D0 31.77%, #6993FF 100%);


type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=''>
      <Header/>
      <div className='w-4/5 mx-auto h-[588px] flex items-center justify-between py-5 '>
        <div className='flex-1'>
          <div className='space-y-6 py-10'>
            <div className='py-5'>
              <span className='rounded-[10px] font-mono text-[#1826D0] mb-5 px-3 py-2 cursor-pointer badge'>FIXED SAVINGS</span>
            </div>
            <h2 className='font-[900] hero-sub-header-two py-2 text-[75px] leading-3 text-[#04093F] '>Save in Bulk with </h2>
            <span className='hero-sub-header font-[900] text-[75px]'>fixed savings</span>
            <p className='text-[#4E4E51] '>Keep funds aside for capital intensive projects</p>
          </div>
        </div>
        <div className='flex-1 flex justify-end'>
          <img src='/images/savings.png' />
        </div>

      </div>
    </div>

  )
}

export default Hero