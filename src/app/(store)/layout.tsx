import { ReactNode } from 'react'
import { Header } from '../components/header'

export default function StoreLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1500px] grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}
