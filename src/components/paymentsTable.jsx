'use client'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPayments, reset } from '@/features/payments/paymentsSlice'
import { toast } from 'react-toastify'

const PaymentsTable = ({ payment }) => {


    return (



        <tbody>
            <tr className='text-sm lg:text-lg'>
                <td className='py-3 px-2 md:px-6 lg:px-8  text-left'>{payment.name}</td>
                <td className='py-3 px-2 md:px-6 lg:px-8  text-left'>{payment.phone}</td>
                <td className='py-3 px-2 md:px-6 lg:px-8 text-left'>{payment.cash_flow}</td>
                <td className='py-3 px-2 md:px-6 lg:px-8  text-left'>{payment.amount}</td>
                <td className='py-3 px-2 md:px-6 lg:px-8  text-left'>{payment.createdAt}</td>
            </tr>

        </tbody>



    )
}

export default PaymentsTable