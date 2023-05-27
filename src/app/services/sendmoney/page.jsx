'use client'

import React, { useState, useEffect } from 'react'
import { reset } from '../../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { redirect } from 'next/navigation'
import PaymentForm from '@/components/paymentForm'


const SendMoney = () => {

    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const { payments } = useSelector((state) => state.payment)

    useEffect(() => {
        if (!user) {
            redirect('/auth/login')
        }
        dispatch(reset())

    }, [user])


    return (
        <div className='w-[90vw] mx-auto py-10 bg-lightGrey'>
            <div className='flex lg:justify-around justify-center items-center lg:items-start'>
                <PaymentForm />
            </div>


        </div>
    )
}

export default SendMoney