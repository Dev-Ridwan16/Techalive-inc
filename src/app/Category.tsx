import { Text } from '@/components/ui/Text'
import Image, { StaticImageData } from 'next/image'
import { categories } from '../../constants'

const CategoryCard: React.FC<{ image: StaticImageData; category: string }> = ({
  image,
  category,
}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 h-[240px]'>
      <Image
        src={image}
        alt={`${category} image`}
        className='w-[150px] h-[150px]'
      />
      <Text text={category} size={14} />
    </div>
  )
}
export const Category = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Text text='Category' size={30} uppercase />
      <div className='flex gap-5'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='h-[250px] w-[240px] border border-[#E0E0E0] rounded-lg flex items-center justify-center'
          >
            <CategoryCard image={category.image} category={category.category} />
          </div>
        ))}
      </div>
    </div>
  )
}
