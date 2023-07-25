import React from 'react'


type Props = {}

const Header = (props: Props) => {
  return (
    <div className='py-6'>
      <div className='w-4/5 mx-auto flex items-center just'>
        <div className='flex-1'>
          <img src="/images/3kleLogo.png" className='cursor-pointer object-cover'/>
        </div>
        <div className='flex items-center flex-1 justify-between space-x-5'>
          <h2 className='cursor-pointer font-bold'>Personal</h2>
          <h2 className='cursor-pointer font-bold'>Business</h2>
          <h2 className='cursor-pointer'>Loans</h2>
          <h2 className='cursor-pointer text-[#1826D0]'>Savings</h2>
          <h2 className='cursor-pointer'>Investments</h2>
          <div className=''>
            <button className='bg-[#1826D0] h-[58px] w-[200px] text-white'>Sign Up</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header