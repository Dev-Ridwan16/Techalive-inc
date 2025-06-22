'use client'

import { ProductListType } from '../homepage/product-section/type'
import { useEffect, useState } from 'react'
import { Text } from '@/components/ui/Text'
import Link from 'next/link'

export default function ProductList({ filterBy }: { filterBy: string }) {
  const [products, setProducts] = useState<ProductListType[]>([])

  useEffect(() => {
    fetch('/api/shop')
      .then((res) => res.json())
      .then(setProducts)
  }, [])

  return (
    <div>
      <div className='grid grid-cols-4 gap-6'>
        {products
          .filter((item) =>
            filterBy.toLowerCase() === 'all'
              ? true
              : item.category.toLowerCase() === filterBy.toLowerCase()
          )
          .map((product, index) => (
            <Link href={`/shop/${product._id}`}>
              <ProductCard key={index} product={product} />
            </Link>
          ))}
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: ProductListType }) {
  return (
    <div className='border h-[220px] rounded-[10px] p-5'>
      <div className='w-full grid place-content-center'>
        <img
          src={product.image}
          alt={`${product.name} img`}
          className='w-[100px] h-[100px]'
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-3 mt-3'>
        <Text text={product.name} />
        <Text text={`₦ ${product.price}`} className='text-primary' />
      </div>
    </div>
  )
}
