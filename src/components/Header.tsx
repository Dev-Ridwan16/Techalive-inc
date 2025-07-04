'use client'
import { useState } from 'react'
import { Text } from './ui/Text'
import { Wrapper } from './ui/Wrapper'
import { navLinks } from '../../constants'
import * as TablerIcons from '@tabler/icons-react'
import Link from 'next/link'
import { Icon } from './ui/Icon'

export const Header = () => {
  const [activeNav, setActiveNav] = useState<number>(0)
  const cta: { name: keyof typeof TablerIcons; function: () => void }[] = [
    { name: 'IconSearch', function: () => {} },
    { name: 'IconUser', function: () => {} },
    { name: 'IconHeart', function: () => {} },
    { name: 'IconShoppingCart', function: () => {} },
  ]

  return (
    <Wrapper>
      <div className='flex items-center justify-between'>
        <Text text='Techalive' size={30} />

        <nav className='hidden lg:flex items-center gap-8'>
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path}>
              <Text uppercase text={link.name} />
            </Link>
          ))}
        </nav>

        <div className='hidden lg:flex items-center gap-5'>
          {cta.map((cta, index) => (
            <div key={index} className='cursor-pointer'>
              <Icon name={cta.name} />
            </div>
          ))}
        </div>

        <div>
          <Icon name={'IconMenu'} />
        </div>

        <div className='lg:hidden w-full absolute z-50 left-0 top-[82px]'>
          <div className='max-w-[85%] w-full mx-auto h-[300px] shadow bg-[#fff] rounded-lg'>
            <nav className='flex flex-col items-center justify-center gap-8 h-full'>
              {navLinks.map((link, index) => (
                <Link key={index} href={link.path}>
                  <Text uppercase text={link.name} />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
