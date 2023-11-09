'use client'
import FormLogin from './components/FormLogin'
import '@/assets/scss/globals.css'
import { useTranslation } from 'react-i18next'

export default function Login() {
  const { t } = useTranslation()

  return (
    <>
      <h1 className="text-orange-700 text-2xl my-5">{t('login')}</h1>
      <FormLogin />
    </>
  )
}
