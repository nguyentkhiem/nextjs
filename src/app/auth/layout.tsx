import ChangeLng from '../components/ChangeLng'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="fixed right-2  top-2">
        <ChangeLng />
      </div>
      {children}
    </div>
  )
}
