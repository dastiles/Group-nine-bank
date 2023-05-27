'use client'

import locations from '@/utils/cconstants'
import React from 'react'

const SendMoney = () => {
    return (
        <div className='w-[90vw] mx-auto py-10 bg-lightGrey'>


            <div className='flex lg:justify-around justify-center items-center flex-col-reverse  lg:flex-row-reverse lg:items-start'>
                <div>
                    <div>
                        <div className="">
                            <h1 className="font-bold tracking-wide text-4xl">SWIFTIY SEND MONEY</h1>
                            <h1 className="tracking-wide text-2xl py-5"> Your One-Stop Destination For <br /> Quick And Safe Money Transfers</h1>
                        </div>
                    </div>
                    <form action="" className="flex flex-col gap-4">

                        <div>
                            <input type="text" placeholder="Account Number" name="account" id="account" className="w-[70vw] md:w-[40vw] lg:w-[25vw] bg-white outline-none border-gray-400 border-[1px] p-1 rounded-sm" />
                        </div>
                        <div>
                            <input type="text" placeholder="Amount" name="amount" id="amount" className="w-[70vw] md:w-[40vw] lg:w-[25vw] bg-white outline-none border-gray-400 border-[1px] p-1 rounded-sm" />
                        </div>
                        <select name="location" id="" className="w-[70vw] md:w-[40vw] lg:w-[25vw] bg-white outline-none border-gray-400 border-[1px] p-1 rounded-sm">
                            <option value="">Select your location</option>
                            {locations.map((loc) => (<option key={loc} value={loc}>{loc}</option>))}
                        </select>
                        <select name="location" id="" className="w-[70vw] md:w-[40vw] lg:w-[25vw] bg-white outline-none border-gray-400 border-[1px] p-1 rounded-sm">
                            <option value="">Select  destination location</option>
                            {locations.map((loc) => (<option key={loc} value={loc}>{loc}</option>))}
                        </select>

                        <div>
                            <input type="password" placeholder="Password" name="password" id="password" className="w-[70vw] md:w-[40vw] lg:w-[25vw] bg-white outline-none border-gray-400 border-[1px] p-1 rounded-sm" />
                        </div>

                        <button className="bg-gray-700 text-white font-bold rounded-full py-2 tracking-wide hover:shadow-lg w-[70vw] md:w-[40vw] lg:w-[25vw]">Send Money</button>
                    </form>
                </div>

                <div className='mb-5 lg:mb-0'>
                    <h3 className='tracking-wide text-2xl py-5 font-bold'> Your Recent Transactions</h3>
                    <table className='border-collapse'>
                        <thead className='bg-gray-700 p-4
                        '>
                            <tr className='text-white px-2'>
                                <th className='py-3 px-2 lg:px-5 text-left'>Account Name</th>
                                <th className='py-3 px-2 lg:px-5 text-left'>Account Number</th>
                                <th className='py-3 px-2 lg:px-5 text-left'>Cash flow</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='py-3 px-2 lg:px-5 first-line:text-left'>Charles Madhuku</td>
                                <td className='py-3 px-2 lg:px-5 text-left'>GJGGJHJH</td>
                                <td className='py-3 px-2  lg:px-5 text-left'>Received</td>
                                <td className='py-3 px-2 lg:px-5 text-left'>500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default SendMoney