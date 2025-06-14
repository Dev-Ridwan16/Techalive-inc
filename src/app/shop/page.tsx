import { Header } from '@/components/Header'
import { QuickInfo } from '@/components/QuickInfo'
import { Icon } from '@/components/ui/Icon'
import { Text } from '@/components/ui/Text'
import { Wrapper } from '@/components/ui/Wrapper'
import Aside from './aside'
import ProductList from './product-list'

export default function Shop() {
  return (
    <div>
      <QuickInfo />
      <div className='py-5'>
        <Header />
      </div>
      <div className='w-full h-[300px] bg-[#e8e8e8] grid place-content-center'>
        <Text text='SHOP' size={50} weight='light' />
        <div className='flex items-center justify-center gap-1 mt-3'>
          <Text text='Home' />
          <Icon name='IconChevronRight' />
          <Text text='Shop' className='underline' />
        </div>
      </div>

      <Wrapper>
        <div className='product-list-grid h-[500px] w-full my-24 gap-10'>
          <div className='flex flex-col gap-3'>
            <div>
                <Text text={`Showing All Products`} />
            </div>
            <ProductList />
          </div>
          <div className=''>
            <Aside />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
