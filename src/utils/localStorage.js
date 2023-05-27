'use client'
const get = key => {

    return JSON.parse(localStorage.getItem(key))

}

const save = (key, value) => {

    return localStorage.setItem(key, value)

}

const removeUser = () => {
    return localStorage.removeItem('user')
}
const saveUser = {
    save,
    get,
    removeUser,
}

export default saveUser