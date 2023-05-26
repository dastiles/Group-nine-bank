'use client'

import React, { useState, useEffect } from 'react'
import locs from '@/utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { createPayment, reset } from '../features/payments/paymentsSlice'
import { toast } from 'react-toastify'
import { redirect } from 'next/navigation'

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        phone: '',
        password: '',
        amount: '',
        destination: '',
        location: '',
    })

    const { phone, amount, destination, location, password } = formData
    const { isError, isSuccess, message, blocked } = useSelector((state) => state.payment)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (!user) {
            redirect('/auth/login')
        }
        console.log(blocked)
        dispatch(reset())
    }, [isError, isSuccess, message, dispatch])
    const onChange = e => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = e => {
        e.preventDefault()

        if (!phone || !password || !amount || !location || !destination) {
            toast.error('Please fill in all fields')
            return
        }



        const userData = {
            phone, amount, location, destination, password
        }

        dispatch(createPayment(userData))
        console.log(userData)
    }
    return (
        <div>
            <div>
                <div className="">
                    <h1 className="font-bold tracking-wide text-4xl">SWIFTIY SEND MONEY</h1>
                    <h1 className="tracking-wide text-2xl py-5"> Your One-Stop Destination For <br /> Quick And Safe Money Transfers</h1>
                </div>
            </div>
            <form action="" onSubmit={onSubmit} className="flex flex-col gap-4">

                <div>
                    <input type="text" value={phone} onChange={onChange} placeholder="Phone Number" name="phone" id="Phone" className="w-[70vw] md:w-[40vw] lg:w-[25vw] bg-white outline-none border-gray-400 border-[1px] p-1 rounded-sm" />
                </div>
                <div>
                    <input type="number" placeholder="Amount" name="amount" id="amount" value={amount} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:w-[25vw] bg-white outline-none border-gray-400 border-[1px] p-1 rounded-sm" />
                </div>
                <select name="location" value={location} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:w-[25vw] bg-white outline-none border-gray-400 border-[1px] p-1 rounded-sm">
                    <option value="">Select your location</option>
                    {locs.locations.map((loc) => (<option key={loc} value={loc}>{loc}</option>))}
                </select>

                <select name="destination" value={destination} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:w-[25vw] bg-white outline-none border-gray-400 border-[1px] p-1 rounded-sm">
                    <option value="">Select  destination location</option>
                    {locs.dlocations.map((locd) => (<option key={locd} value={locd}>{locd}</option>))}
                </select>

                <div>
                    <input type="password" placeholder="Password" name="password" id="password" value={password} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:w-[25vw] bg-white outline-none border-gray-400 border-[1px] p-1 rounded-sm" />
                </div>

                <button type='submit' className="bg-gray-700 text-white font-bold rounded-full py-2 tracking-wide hover:shadow-lg w-[70vw] md:w-[40vw] lg:w-[25vw]">Send Money</button>
            </form>
        </div>
    )
}

export default PaymentForm