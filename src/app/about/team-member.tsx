import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TeamMember({
  teamMembers,
}: {
  teamMembers: {
    name: string
    role: string
    bio: string
    image: string
    linkedin: string
    twitter: string
  }[]
}) {
  return (
    <section className='bg-slate-50 py-20 md:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='mx-auto max-w-3xl text-center mb-16'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            Meet Our Team
          </h2>
          <p className='text-lg text-muted-foreground md:text-xl'>
            Passionate innovators, experienced leaders, and creative
            problem-solvers working together to shape the future of technology.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className='overflow-hidden hover:shadow-lg transition-shadow'
            >
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={`Portrait of ${member.name}, ${member.role} at TechAlive`}
                  width={300}
                  height={300}
                  className='h-full w-full object-cover transition-transform hover:scale-105'
                />
              </div>
              <CardHeader className='pb-2'>
                <CardTitle className='text-xl'>{member.name}</CardTitle>
                <CardDescription className='font-medium text-orange-600'>
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <p className='text-sm text-muted-foreground mb-4'>
                  {member.bio}
                </p>
                <div className='flex gap-2'>
                  <Link
                    href={member.linkedin}
                    className='text-muted-foreground hover:text-blue-600 transition-colors'
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className='h-4 w-4' />
                  </Link>
                  <Link
                    href={member.twitter}
                    className='text-muted-foreground hover:text-blue-400 transition-colors'
                    aria-label={`${member.name}'s Twitter profile`}
                  >
                    <Twitter className='h-4 w-4' />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
