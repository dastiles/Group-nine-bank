'use client'
import PaymentsTable from '@/components/paymentsTable'
import { getPayments, reset } from '@/features/payments/paymentsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { redirect } from 'next/navigation'

const BankStatement = () => {
    const { payments, isLoading, isError, message } = useSelector((state) => state.payment)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (!user) {
            redirect('/auth/login')
        }
        dispatch(getPayments())


    }, [isError, message, dispatch])
    console.log(payments)
    if (isLoading) {
        return <p>loading payments  ....</p>
    }


    return (
        <div className='w-[90vw] mx-auto py-10 bg-lightGrey'>
            <div className='flex lg:justify-around justify-center items-center lg:items-start'>
                <div className='mb-5 lg:mb-0'>
                    <h3 className='tracking-wide text-2xl py-5 font-bold'> Your Recent Transactions</h3>
                    {payments.length > 0 ? (
                        <table className='border-collapse'>
                            <thead className='bg-gray-700 p-4'>
                                <tr className='text-white px-2 text-sm lg:text-lg'>
                                    <th className='py-3 px-2 md:px-6 lg:px-8 text-left'>Account Name</th>
                                    <th className='py-3 px-2 md:px-6 lg:px-8 text-left'>Account Number</th>
                                    <th className='py-3 px-2 md:px-6 lg:px-8 text-left'>Cash flow</th>
                                    <th className='py-3 px-2 md:px-6 lg:px-8 text-left'>Amount</th>
                                    <th className='py-3 px-2 md:px-6 lg:px-8 text-left'>Date</th>
                                </tr>
                            </thead>
                            {payments.map((payment) => <PaymentsTable payment={payment} />)}

                        </table >
                    ) : (<h1>No recent transactions</h1>)}
                </div>
            </div>

        </div>
    )
}

export default BankStatement