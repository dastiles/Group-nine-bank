'use client'
import saveUser from '@/utils/localStorage'
import axios from 'axios'
const url = 'http://127.0.0.1:5000/api/payments'
import { redirect } from 'next/navigation'

const makePayment = async (payment, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.post(url + '/sent', payment, config)
    console.log(response.data)
    if (Object.hasOwn(response.data, 'blocked')) {
        saveUser.removeUser('user')
        saveUser.save('blocked', response.data)
    }
    return response.data

}

const getPayment = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.get(url + '/transactions', config)

    return response.data
}

const paymentsService = {
    makePayment,
    getPayment,
}

export default paymentsService