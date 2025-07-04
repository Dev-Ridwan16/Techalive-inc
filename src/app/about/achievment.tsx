import { Card } from '@/components/ui/card'
import React from 'react'

export default function Achievements({
  achievements,
}: {
  achievements: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
}) {
  return (
    <section className='py-20 md:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='mx-auto max-w-3xl text-center mb-16'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            Why Choose TechAlive?
          </h2>
          <p className='text-lg text-muted-foreground md:text-xl'>
            We combine technical expertise with human insight to deliver
            solutions that don't just work—they excel.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          {achievements.map((achievement, index) => (
            <Card key={index} className='p-6 hover:shadow-lg transition-shadow'>
              <div className='flex items-start gap-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#fde4ef] text-primary'>
                  {achievement.icon}
                </div>
                <div className='flex-1'>
                  <h3 className='mb-2 text-xl font-semibold'>
                    {achievement.title}
                  </h3>
                  <p className='text-muted-foreground'>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <Card className='border-2 border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 p-8'>
            <div className='mx-auto max-w-2xl'>
              <h3 className='mb-4 text-2xl font-bold'>Our Commitment</h3>
              <p className='text-lg text-muted-foreground'>
                Every project we undertake is backed by our commitment to
                excellence, innovation, and your success. We don't just deliver
                solutions—we build lasting partnerships that grow with your
                business.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
