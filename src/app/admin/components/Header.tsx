'use client'

import ChangeLng from '@/app/components/ChangeLng'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()

  const handleLogout = () => {
    Cookie.remove('access-token')
    router.push('/auth/login')
  }

  return (
    <div className="bg-white fixed top-0 right-0 w-full h-14 ">
      <div className="flex justify-end items-center h-full p-3 gap-2">
        <button
          className="border border-red-400 text-red-400 p-1 rounded-sm"
          onClick={handleLogout}
        >
          log out
        </button>
        <ChangeLng />
      </div>
    </div>
  )
}
export default Header
