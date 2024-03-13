import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <form
          action=""
          className="flex w-80 items-center rounded-full bg-zinc-900 px-5 py-3 ring-1 ring-zinc-700"
        >
          <Search className="mr-2 h-5 w-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar Produtos..."
            className="flex-1 bg-transparent text-sm placeholder:text-zinc-500 outline-none"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex item-center gap-2">
          <ShoppingBag className="h-4 w-4 " />
          <span className="text-sm ">Cart (0)</span>
        </div>
        <div className="w-px h-4 bg-zinc-700" />
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/welderfernandes.png"
            width={24}
            height={24}
            alt="Welder Fernandes"
            className="rounded-full h-6 w-6"
          />
        </Link>
      </div>
    </header>
  )
}
