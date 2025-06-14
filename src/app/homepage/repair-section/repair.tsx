import { Wrapper } from '@/components/ui/Wrapper'
import RepairImg from '../../../../public/assets/repair.jpg'
import Image, { StaticImageData } from 'next/image'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'

export default function Repair() {
  return (
    <div className='bg-[#F8F8F8] w-full h-[784px] my-[50px]'>
      <Wrapper className='w-full h-full'>
        <div className='flex items-center justify-center gap-[80px] h-full w-full'>
          <div className='w-[600px] h-[504px] border'>
            <Image
              src={RepairImg}
              alt='repair-img'
              className='w-[600px] h-[504px]'
            />
          </div>
          <div className='flex flex-col gap-[36px] w-[500px]'>
            <Text text='We Fix Tech — All of It' size={51} />
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
