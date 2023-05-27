'use client'
import Link from "next/link"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { redirect } from 'next/navigation'
import Card from "../components/card"
import { reset } from '../features/auth/authSlice'
import { FaMoneyCheck, FaMoneyBillWave, FaRegBookmark, FaMoneyBill } from 'react-icons/fa'

const Home = () => {

  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      redirect('/auth/login')
    }
    dispatch(reset())
  }, [user])
  return (
    <main className="bg-white">
      <div className='bg-bg_picture h-[80vh]'>

        lets have the picture
      </div>
      <div className="w-[90vw] mx-auto my-10">
        <div className="bg-white py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 ">
          <Link href="/services/sendmoney"><Card data={{ title: "Send Money", icon: <FaMoneyBill /> }} /></Link>
          <Card data={{ title: "Apply loans", icon: <FaMoneyCheck /> }} />
          <Link href="/services/bankstatement"><Card data={{ title: "Bank Statement", icon: <FaRegBookmark /> }} /></Link>
        </div>
      </div>
    </main>
  )
}

export default Home