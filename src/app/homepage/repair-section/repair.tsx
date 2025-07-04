'use client'
import { Wrapper } from '@/components/ui/Wrapper'
import RepairImg from '../../../../public/assets/repair.jpg'
import Image, { StaticImageData } from 'next/image'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'
import { useDeviceWidth } from '@/hooks/useDeviceWidth'

export default function Repair() {
  const deviceWidth = useDeviceWidth()
  const isMobile = deviceWidth < 760

  return (
    <div className='bg-[#F8F8F8] w-full h-[784px] my-[50px]'>
      <Wrapper className='w-full h-full'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-[80px] h-full w-full'>
          <div className='lg:w-[600px] lg:h-[504px]'>
            <Image
              src={RepairImg}
              alt='repair-img'
              className='lg:w-[600px] lg:h-[504px]'
            />
          </div>
          <div className='flex flex-col gap-[36px] lg:w-[500px]'>
            <Text text='We Fix Tech — All of It' size={isMobile ? 30 : 51} />
            <Text
              text='Phones, laptops, tablets, gadgets — if it’s acting up, we’ll bring it back to life. Fast, easy, no hassle.'
              size={20}
            />
            <div className='w-[210px] '>
              <Button name='Book Appointment' />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
