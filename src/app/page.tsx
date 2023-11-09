'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default async function Page() {
  const router = useRouter()

  useEffect(() => {
    const token = Cookies.get('access-token')
    if (token) router.push(`/admin`)

    if (!token) router.push(`/auth/login`)
  }, [router])
  return (
    <>
      {/* <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>{t('to-second-page')}</Link> */}
    </>
  )
}
