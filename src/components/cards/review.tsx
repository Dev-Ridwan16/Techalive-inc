import { IconStarFilled } from '@tabler/icons-react'
import { ReactNode } from 'react'

export function Comment({ children }: { children: ReactNode }) {
  return <p className="h-[200px]">{children}</p>
}

export function Stars({ number }: { number: number }) {
  return (
    <div className='flex items-center gap-[5px]'>
      {Array.from({ length: number }).map((_, index) => (
        <IconStarFilled key={index} size={18} color='#FF388C' />
      ))}
    </div>
  )
}

export function Customer({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

export default function ReviewCard({
  comment,
  stars,
  customer,
}: {
  comment: React.ReactNode
  stars: React.ReactNode
  customer: React.ReactNode
}) {
  return (
    <div className='w-full h-[317px] rounded-[10px] border border-[#E0E0E0] flex items-center justify-center'>
      <div className='w-full max-w-[90%] mx-auto h-[90%] flex flex-col gap-[30px]'>
        {comment}
        {stars}
        {customer}
      </div>
    </div>
  )
}
