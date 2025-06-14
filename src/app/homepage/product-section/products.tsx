import { Text } from '@/components/ui/Text'
import connectToDatabase from '@/lib/mongoose'
import Product from '@/models/products/product'
import { ProductListType } from './type'

export default async function ProductSection() {
  await connectToDatabase()
  const products = await Product.find()

  const categories = [
    'computers',
    'smartphones',
    'solar inverter system',
    'electronics & Gadgets',
  ]

  return (
    <div>
      <div className='flex items-center gap-[20px]'>
        {categories.map((category, index) => {
          const categoryProducts = products
            .filter(
              (product) =>
                product.category.toLowerCase() === category.toLowerCase()
            )
            .slice(0, 3)

          return (
            <div
              key={index}
              className='w-[25%] h-[350px] rounded-[10px] border p-5'
            >
              <div className='h-[50px]'>
                <Text text={category.toUpperCase()} />
              </div>

              <div className='flex flex-col gap-5'>
                {categoryProducts.length > 0 ? (
                  categoryProducts.map((product, i) => (
                    <>
                      <ListCard key={i} product={product} />
                      {i !== categoryProducts.length - 1 && <hr />}
                    </>
                  ))
                ) : (
                  <Text text='No products available' />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ListCard({ product }: { product: ProductListType }) {
  return (
    <div>
      <div className='flex items-center gap-5'>
        <div className='w-[50px] h-[60px] rounded-[6px]'>
          <img src={product.image} className='w-full h-full rounded-[6]' />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <Text text={product.name} />
          <button className='text-primary'>VIEW</button>
        </div>
      </div>
    </div>
  )
}
