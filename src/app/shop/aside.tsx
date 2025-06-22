'use client'
import { Icon } from '@/components/ui/Icon'
import { Text } from '@/components/ui/Text'
import { useState } from 'react'

const categories = [
  'All',
  'Smartphones',
  'Computers',
  'Solar Camera',
  'Solar & Inverter System',
]

export default function Aside({
  passCategory,
}: {
  passCategory: (category: string) => void
}) {
  const [activeCat, setActiveCat] = useState<number>(0)

  function handleSortByCategory(category: string, index: number) {
    setActiveCat(index)
    passCategory(category)
  }
  return (
    <div className=''>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search'
          className='w-full h-[50px] rounded-[5px] border px-3 outline-[#fca6c9]'
        />
        <div className='w-[40px] h-[40px] bg-primary rounded-[3px] grid place-content-center absolute top-[50%] translate-y-[-50%] right-1'>
          <Icon name='IconSearch' color='#fff' />
        </div>
      </div>

      <div className='mt-8'>
        <Text text='Categories' size={20} uppercase />
        <hr className='mt-3' />

        <div className='flex flex-col items-start gap-4 mt-5 '>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${
                activeCat === index
                  ? 'underline text-neutral-800'
                  : 'text-neutral-400'
              } font-light`}
              onClick={() => handleSortByCategory(category, index)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
