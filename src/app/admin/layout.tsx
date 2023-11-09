'use client'
import { MENU_ITEMS } from '@/constants/menu'
import { MenuItemType } from '@/types/common.types'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
  const [breadcrumbs, setBreadCrumbs] = useState<MenuItemType[]>([])

  useEffect(() => {
    const newArr: MenuItemType[] | undefined = []
    // newArr.push({ id: 0, title: 'Admin', url: '/admin' })
    MENU_ITEMS?.map((e: MenuItemType) => {
      const dataMatch: MenuItemType | undefined = e.children?.find(
        (el: MenuItemType) => el.url === path
      )
      if (e.url === path) newArr.push({ id: e.id, title: e.title, url: e.url })

      if (dataMatch) {
        newArr.push({ id: e.id, title: e.title, url: e.url })

        newArr.push({
          id: dataMatch?.id,
          title: dataMatch?.title,
          url: dataMatch?.url,
        })
      }
    })
    setBreadCrumbs(newArr)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])

  return (
    <div className="flex h-screen">
      <Header />
      <Sidebar />
      <div className="w-full ml-60 mt-10">
        <div className="ml-10 mt-10">
          <Breadcrumbs data={breadcrumbs} />
        </div>
        <div className="m-10  bg-white rounded-md p-5 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  )
}
