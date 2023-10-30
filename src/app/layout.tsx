'use client'
import { Providers } from '@/redux/provider'
import '@/assets/scss/globals.css'
import { useEffect } from 'react'
import Cookie from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import { PUBLIC_ROUTES } from '@/constants/routers'

import MainLayout from './components/MainLayout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
  const router = useRouter()

  useEffect(() => {
    // handle change route when auth
    const checkPath: boolean = PUBLIC_ROUTES.includes(path)
    const token = Cookie.get('access-token')
    if (token) if (checkPath) router.push(`/admin`)

    if (!token) if (!checkPath) router.push(`/auth/login`)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])

  return (
    <Providers>
      <MainLayout>{children}</MainLayout>
    </Providers>
  )
}
