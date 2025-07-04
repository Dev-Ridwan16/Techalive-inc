'use client'

import ReviewCard, { Comment, Customer, Stars } from '@/components/cards/review'
import { Text } from '@/components/ui/Text'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { useDeviceWidth } from '@/hooks/useDeviceWidth'

export default function CustomerReviews() {
  const deviceWidth = useDeviceWidth()
  const isMobile = deviceWidth < 760
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: isMobile ? 1 : 3,
    },
  })

  const reviews = [
    {
      comment:
        'I stumbled upon this tech store while searching for a new laptop, and I couldn’t be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device. Highly recommended!',
      stars: 4,
      name: 'Ridwan Adewole',
      role: 'Software Engineer',
    },
    {
      comment:
        'Techalive does good job. In all honesty, repair of my laptops have been very satisfactory and at reasonable cost. I strongly recommend to all.',
      stars: 5,
      name: 'Omolara Adenaike',
      role: 'UI/UX Designer',
    },
    {
      comment: `If you're in doubt, visit techalive. You would know what the "alive" in their name, means.

Thanks to the management and everyone, I always have a blissful experience with your brand.`,
      stars: 5,
      name: 'Abdulazeez Ashia E.',
      role: 'Photographer',
    },
  ]
  return (
    <div className='flex flex-col gap-6'>
      <Text text='Customer Reviews' size={30} uppercase />
      <div ref={ref} className='keen-slider gap-3'>
        {reviews.map((review, index) => (
          <ReviewCard
            className='keen-slider__slide w-full lg:w-[80%]'
            key={index}
            comment={<Comment>“{review.comment}”</Comment>}
            stars={<Stars number={review.stars} />}
            customer={
              <Customer>
                <p>{review.name}</p>
                <p>{review.role}</p>
              </Customer>
            }
          ></ReviewCard>
        ))}
      </div>
    </div>
  )
}
