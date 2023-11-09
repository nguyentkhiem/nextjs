'use client'

import i18next from 'i18next'
import { LANGUAGES } from '@/constants/common'
import { LOCAL_STORAGES } from '@/constants/variables'

const ChangeLng = () => {
  const LANG = localStorage.getItem(LOCAL_STORAGES.LANG) || 'en'

  const onChange = (value: string) => {
    i18next.changeLanguage(value?.toString()).then((t) => {
      // set locale to localstorage
      localStorage.setItem(LOCAL_STORAGES.LANG, value)
    })
  }

  return (
    <select
      defaultValue={LANG}
      onChange={(e: any) => {
        onChange(e.target.value)
      }}
      className="p-1 bg-white text-blue-400 border border-blue-400 rounded-sm"
    >
      {LANGUAGES.map((e: string) => (
        <option key={e}>{e}</option>
      ))}
    </select>
  )
}

export default ChangeLng
