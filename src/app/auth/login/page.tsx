'use client'

import { useTranslation } from '@/app/i18n'
import { useAppSelector } from '@/redux/hooks'
import FormLogin from './components/FormLogin'
import '@/assets/scss/globals.css'

export default async function Login() {
  const lng = useAppSelector((state) => state.lngReducer.lng)

  const { t } = await useTranslation(lng)

  return (
    <>
      <h1 className="text-red-200">{t('login')}</h1>

      <FormLogin />
    </>
  )
}
