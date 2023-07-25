import React from 'react'
import '../styles/footer.css'
import AppleIcon from '@mui/icons-material/Apple';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='py-10 bg-[#080D45]'>
            <div className='py-10 mt-6'>
                <div className='w-[65%] mx-auto'>
                    <div className='text-center'>
                        <h2 className='header font-[900] text-[50px] leading-3 text-white'>Start Banking with absolute</h2>
                        <span className='header font-[900] text-[50px] text-white'>convenience with 3kle</span>
                    </div>

                </div>
                <div className='w-[90%] mx-auto py-20 gap-6 mt-8 grid grid-cols-8 text-white'>
                    <div className='space-y-3'>
                        <h2 className='text-white font-bold text-xl'>Company</h2>
                        <p>About Us</p>
                        <p>Contact</p>
                        <p>Help</p>
                        <p>Compare Plans</p>
                        <p>FAQ</p>
                        <p>Terms of Service</p>
                        <p>Security</p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-white font-bold text-xl'>Daily</h2>
                        <p>Everyday Banking</p>
                        <p>Roundupd</p>
                        <p>Cards</p>
                        <p>Budget Spending</p>
                        <p>Credit Score</p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-white font-bold text-xl'>Payments</h2>
                        <p>Send Money</p>
                        <p>Request Money</p>
                        <p>Pay Bills</p>
                        <p>3kle Pay</p>
                        <p>Split Bill</p>
                        <p>QR Payment</p>
                        <p>Schedule Payment</p>
                        <p>Global Pay</p>
                        <p>M-cash</p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-white font-bold text-xl'>Invest Now</h2>
                        <p>Auto-Invest</p>
                        <p>Self-Trade</p>
                        <p>Family Plus</p>
                        <p>Easy Retirement</p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-white font-bold text-xl'>Savings Vault</h2>
                        <p>Goal Savings</p>
                        <p>Fixed Savings</p>
                        <p>Emergency Savings</p>
                        <p>Spend plus save</p>
                        <p>Foreign Currency Savings</p>
                        <p>Rotational Group Savings</p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-white font-bold text-xl'>Loan</h2>
                        <p>Quick Loans</p>
                        <p>P2P (Personal Borrower)</p>
                        <p>P2P (Personal Lender)</p>
                        <p>P2P (Business Borrower)</p>
                        <p>P2P (Business Lender)</p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-white font-bold text-xl'>Plans</h2>
                        <p>Starter</p>
                        <p>Silver</p>
                        <p>Gold</p>
                        <p>Business</p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-white font-bold text-xl'>Travel</h2>
                        <p>Lounge Pass</p>
                        <p>Smart Delay</p>
                        <p>Flight Ticket</p>
                        <p>Currency Converter</p>
                    </div>
                </div>
                <div className='py-4 w-[90%] mx-auto'>
                    <div className='flex justify-between'>
                         <p className='text-[#6F767E]'>© 3kle MFB Ltd 2023</p>
                         <div className='flex items-center space-x-4'>
                           <img src='/images/socials.png'/>
                         </div>
                    </div>
                    <div className='py-8'>
                       <p className='text-[#6F767E] leading-1'>3kle is a product of Talaris Capital and Investments Limited registered in Nigeria RC1777576) and the UK BR024839. 3kle is a registered digital bank and wealth management company. If you would like to find out more about 3kle, please contact us at: team@3kle.com. We have taken several measures to help keep your account and information protected when you open an account and use 3kle.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer