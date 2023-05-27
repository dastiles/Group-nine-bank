'use client'
import saveUser from '@/utils/localStorage'
import axios from 'axios'

const url = 'http://127.0.0.1:5000/api/auth/'

// register new user
const register = async (userData) => {
    console.log(userData)
    const response = await axios.post(url + 'open_account/', userData)

    if (response.data) {
        if (Object.hasOwn(response.data, 'id')) {
            saveUser.save('user', JSON.stringify(response.data))
        }

    }

    console.log(response)

    return response.data
}

const login = async (userData) => {
    console.log(userData)
    const response = await axios.post(url + "login/", userData)

    if (response.data) {
        if (Object.hasOwn(response.data, 'id')) {
            saveUser.save('user', JSON.stringify(response.data))
        }

    }

    console.log(response)

    return response.data
}

const logout = () => {
    saveUser.removeUser()
}

const authService = {
    register,
    login,
    logout,
}

export default authService