'use client'

import Accordition from '@/app/components/Accordition'
import { MENU_ITEMS } from '@/constants/menu'
import { MenuItemType } from '@/types/common.types'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function Sidebar() {
  const router = useRouter()
  const path = usePathname()

  return (
    <div className="flex flex-col fixed h-screen   bg-white shadow w-60">
      <div className="space-y-3">
        <div
          className="flex items-center p-3 cursor-pointer"
          onClick={() => router.push('/admin')}
        >
          <h2 className="text-xl font-bold text-blue-500">Dashboard</h2>
        </div>
      </div>
      {MENU_ITEMS?.map((e: MenuItemType) => {
        if (e?.children) {
          return <Accordition dataAccordition={e} key={e.id} />
        } else
          return (
            <div
              key={e.id}
              className="p-3 hover:bg-blue-100 cursor-pointer"
              style={{
                backgroundColor: path === e.url ? 'rgb(219 234 254)' : '',
              }}
              onClick={() => e?.url && router.push(e?.url)}
            >
              {e.title}
            </div>
          )
      })}
    </div>
  )
}
