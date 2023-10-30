'use client'
import { useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import { useTranslation } from './i18n'

export default async function Page() {
  const lng = useAppSelector((state) => state.lngReducer.lng)
  const { t } = await useTranslation(lng)
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>{t('to-second-page')}</Link>
    </>
  )
}