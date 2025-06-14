import { ProductListType } from '../homepage/product-section/type'
import Product from '@/models/products/product'
import connectToDatabase from '@/lib/mongoose'
import { Text } from '@/components/ui/Text'

export default async function ProductList() {
  await connectToDatabase()
  const products: ProductListType[] = await Product.find()

  return (
    <div>
      <div className='grid grid-cols-4 gap-6'>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
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
