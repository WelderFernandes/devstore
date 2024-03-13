import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/product/featured')

  const products = await response.json()
  return products
}
export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex rounded-lg bg-zinc-900 overflow-hidden justify-center itens-end"
      >
        <Image
          src={highlightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-500"
          width={860}
          height={860}
          quality={100}
          alt={highlightedProduct.image}
        />
        <div className="absolute bottom-28 right-28 h-12 flex item-center gap-2 max-w-[380px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="flex items-center text-sm truncate">
            {highlightedProduct.title}
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-extrabold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>
      {otherProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden justify-center itens-end"
        >
          <Image
            src={product.image}
            className="group-hover:scale-105 transition-transform duration-500"
            width={860}
            height={860}
            quality={100}
            alt={product.image}
          />
          <div className="absolute bottom-10 right-10 h-12 flex item-center gap-2 max-w-[380px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="flex items-center text-sm truncate">
              {product.title}
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-extrabold">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
