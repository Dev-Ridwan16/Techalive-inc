import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Target,
  Users,
  Lightbulb,
  Shield,
  Zap,
  Award,
  TrendingUp,
  Globe,
  Linkedin,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CTA from './cta'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/_button'
import TeamMember from './team-member'
import Achievements from './achievment'
import MissionValue from './mission-value'

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: 'Ibrahim Kareem O.',
      role: 'CEO, Founder & Technical Director',
      bio: 'Visionary leader with 15+ years in tech innovation. Passionate about democratizing technology.',
      image: '/placeholder.svg?height=300&width=300',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Ridwan Adewole',
      role: 'CTO',
      bio: 'Full-stack architect specializing in scalable solutions. Led engineering teams at Konneabroad & Techalive.',
      image: '/placeholder.svg?height=300&width=300',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Toyin Ajala',
      role: 'Chief Device Technician',
      bio: 'Expert technician specializing in laptop, phone, and electronic gadget repair. Proficient in diagnosing and resolving hardware and software issues for a wide range of devices.',
      image: '/placeholder.svg?height=300&width=300',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Samson Boluwatife',
      role: 'Lead Repair Engineer',
      bio: 'Phone repair specialist with expertise in diagnosing and fixing hardware and software issues. Skilled in repairing devices for thousands of customers.',
      image: '/placeholder.svg?height=300&width=300',
      linkedin: '#',
      twitter: '#',
    },
  ]

  const values = [
    {
      icon: <Lightbulb className='h-8 w-8 text-orange-500' />,
      title: 'Innovation First',
      description:
        "We constantly push boundaries and embrace cutting-edge technologies to solve tomorrow's challenges today.",
    },
    {
      icon: <Users className='h-8 w-8 text-green-500' />,
      title: 'People-Centered',
      description:
        'Every solution we build puts human needs at the center, ensuring technology serves people, not the other way around.',
    },
    {
      icon: <Shield className='h-8 w-8 text-blue-500' />,
      title: 'Trust & Security',
      description:
        'We maintain the highest standards of security and privacy, earning trust through transparency and reliability.',
    },
    {
      icon: <Target className='h-8 w-8 text-purple-500' />,
      title: 'Results Driven',
      description:
        'We measure success by the real impact we create for our clients and the communities they serve.',
    },
  ]

  const achievements = [
    {
      icon: <Award className='h-6 w-6' />,
      title: 'Industry Recognition',
      description:
        "Winner of 'Tech Innovation Award 2024' and featured in Forbes 30 Under 30",
    },
    {
      icon: <TrendingUp className='h-6 w-6' />,
      title: 'Proven Growth',
      description:
        '500% revenue growth over 3 years with 98% client retention rate',
    },
    {
      icon: <Globe className='h-6 w-6' />,
      title: 'Global Reach',
      description:
        'Serving clients across 25+ countries with 24/7 support coverage',
    },
    {
      icon: <Zap className='h-6 w-6' />,
      title: 'Lightning Fast',
      description: 'Average project delivery 40% faster than industry standard',
    },
  ]

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 py-20 md:py-32'>
        <div className='absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]' />
        <div className='container relative px-4 md:px-6'>
          <div className='mx-auto max-w-4xl text-center'>
            <Badge variant='outline' className='mb-4 px-4 py-2'>
              Technology in all spheres...
            </Badge>
            <h1 className='mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
              We Are{' '}
              <span className='bg-gradient-to-r from-[#FF388C] to-[#940440] bg-clip-text text-transparent'>
                TechAlive
              </span>
            </h1>
            <p className='mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl'>
              A forward-thinking technology repair company dedicated to
              excellence, sustainable innovation, and empowering individuals and
              businesses through expert laptop, phone, and electronic gadget
              repair solutions, Software development, Solar CCTV Installations,
              Solar & Inverter System, Car Tracking System and Wireless
              Intercom.
            </p>
            <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
              <Button size='lg' className='bg-orange-500 hover:bg-orange-600'>
                Explore Our Services
              </Button>
              <Button size='lg' variant='outline'>
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
        <div className='absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent' />
      </section>

      {/* Mission & Values Section */}
      <MissionValue values={values} />

      {/* Our Team Section */}
      <TeamMember teamMembers={teamMembers} />

      {/* Why Choose TechAlive Section */}
      <Achievements achievements={achievements} />

      {/* Call-to-Action Section */}
      <CTA />
    </div>
  )
}
