import { ProductListType } from '@/app/homepage/product-section/type'
import { Header } from '@/components/Header'
import { QuickInfo } from '@/components/QuickInfo'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Text } from '@/components/ui/Text'
import { Wrapper } from '@/components/ui/Wrapper'
import connectToDatabase from '@/lib/mongoose'
import Product from '@/models/products/product'
import { createWhatsappLink } from '@/utils/whatsapp'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  await connectToDatabase()

  const productId = (await params).productId
  const product = (await Product.findById(productId)) as ProductListType | null

  if (!product) return notFound()

  const whatsappMessage = `Hi, I'm interested in "${product.name}" listed at ₦${product.price}. \n\n${product.description}`
  const whatsappLink = createWhatsappLink(whatsappMessage)

  return (
    <React.Fragment>
      <div>
        <QuickInfo />
        <div className='py-5'>
          <Header />
        </div>

        <Wrapper>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            <div className='lg:w-[48%] h-[400px] grid place-content-center'>
              <img
                src={product.image}
                alt={`${product._id} image`}
                className=''
              />
            </div>
            <div className='w-full lg:w-[48%] h-[400px]'>
              <div className='flex flex-col gap-2'>
                <Text uppercase text={product.name} size={40} />
                <Text
                  uppercase
                  text={`₦${product.price}`}
                  size={20}
                  className='text-primary'
                />
                <Text text={product.description} size={18} />
                <div className='mt-3 flex flex-col gap-3'>
                  <Text uppercase text='Want this?' />
                  <div className='w-[250px]'>
                    <a href={whatsappLink} target='_blank'>
                      <Button
                        name='CHAT US ON WHATSAPP'
                        icon='IconBrandWhatsapp'
                      />
                    </a>
                    <Link href='/shop' className='flex items-center gap-3 mt-5'>
                      <Icon name='IconArrowLeft' />
                      <Text uppercase text='Go back to shop' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </React.Fragment>
  )
}
