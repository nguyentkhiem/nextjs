import { useAppSelector } from '@/redux/hooks'
import { dir } from 'i18next'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const lng = useAppSelector((state) => state.lngReducer.lng)

  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <div className="h-full">{children}</div>
      </body>
    </html>
  )
}

export default MainLayout
