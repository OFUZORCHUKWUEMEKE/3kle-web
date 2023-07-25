import React from 'react'
import '../styles/subhero.css'
type Props = {}

const SubHero = (props: Props) => {
    return (
        <div className='py-2'>
            <div className='w-[100%] mx-auto flex justify-between items-center'>
                <img className='flex-1  hero_image object-contain' src='/images/phone.png' />
                <div className='space-y-5 flex-1'>
                    <div>
                        <p className='text-[#B5179E] header'>SECURE SAVING</p>
                    </div>
                    <div>
                        <h2 className='text-[#B5179E] font-bold header text-[36px]'>Your money safe with us. </h2>
                        <span className='text-[36px] header'>Start saving!</span>
                    </div>
                    <div className='w-[75%]'>
                        <p className='text-[#4E4E51]'>Save a fixed amount of money for a particular purpose with our fixed savings and get interest rates of 10 to 15% on savings per annum.</p>
                    </div>
                </div>
            </div>
            <div className='py-2 flex justify-between items-center h-[762px] overflow-hidden'>
                <div className='bg-[#080D45] h-[762px] flex-1 flex justify-end items-center'>
                    <div className='flex items-end justify-end'>
                        <div className='space-y-6 w-[70%]'>
                            <div>
                                <h2 className='uppercase text-white '>Avoid being Tempted</h2>
                            </div>
                            <div>
                                <h2 className='header text-white font-[900] text-[36px] leading-3'>You can successfully fund</h2>
                                <span className='header text-white font-[900] text-[36px]'> that huge project.</span>
                            </div>
                            <div className='w-[75%]'>
                                <p className='text-white w-[70%]'>Fixed savings help you securely hold that huge amount of money for specific projects, and avoid getting tempted to spend from it.</p>
                            </div>
                            <button className='bg-white py-4 px-5'>Get the App</button>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src='/images/Girl_Image.png' className='w-full h-[768px]' />
                </div>
            </div>
            <div className='py-6 mt-10'>
                <div className='flex justify-between items-center'>
                      <img src='/images/section.png' className='w-full'/>
                </div>
            </div>
        </div>
    )
}

export default SubHero