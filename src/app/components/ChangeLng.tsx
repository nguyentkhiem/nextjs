'use client'

import { LANGUAGES } from '@/constants/common'
import { changeLng } from '@/redux/features/lngSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const ChangeLng = () => {
  const lng = useAppSelector((state) => state.lngReducer.lng)
  const dispatch = useAppDispatch()

  return (
    <select
      defaultValue={lng}
      onChange={(e: any) => {
        dispatch(changeLng(e.target.value))
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
