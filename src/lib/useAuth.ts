'use client'
import Cookie from 'js-cookie'
import { useEffect, useState } from 'react'

export function useAuth() {
  const [auth, setAuth] = useState<string | null>('')
  let authenticated: string | null = ''

  if (typeof window !== 'undefined')
    authenticated = Cookie.get('access-token') || ''

  useEffect(() => {
    setAuth(authenticated)
  }, [authenticated])

  return auth
}
