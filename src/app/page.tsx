import { QuickInfo } from '@/components/QuickInfo'
import { Wrapper } from '@/components/ui/Wrapper'
import { Header } from '@/components/Header'
import { Hero } from './Hero'
import { expectations } from '../../constants'
import { Icon } from '@/components/ui/Icon'
import { Text } from '@/components/ui/Text'
import { Category } from './Category'
import CustomerReviews from './customer-reviews'
import ProductSection from './homepage/product-section/products'
import Repair from './homepage/repair-section/repair'
import Footer from '@/components/layouts/footer'

export const Expectations = () => {
  return (
    <div className='w-full py-24'>
      <div className='flex items-center justify-between gap-5'>
        {expectations.map((expectation, index) => (
          <div key={index} className='flex gap-3'>
            <div>
              <Icon
                name={expectation.icon}
                size={24}
                className='text-[var(--color-primary)]'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Text text={expectation.title} size={18} uppercase />
              <Text text={expectation.description} size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className='w-full'>
      <div className='border-b w-full'>
        <QuickInfo />
      </div>
      <div className='py-5'>
        <Header />
      </div>
      <Hero />
      <Wrapper>
        <Expectations />
      </Wrapper>
      <Wrapper>
        <Category />
      </Wrapper>
      <Repair />
      <Wrapper className='flex flex-col gap-[50px]'>
        <ProductSection />
        <CustomerReviews />
      </Wrapper>
      <Footer />
    </div>
  )
}
