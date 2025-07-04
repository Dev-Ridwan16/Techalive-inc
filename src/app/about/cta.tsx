import { Button } from '@/components/ui/_button'
import { Mail, Phone, MapPin } from 'lucide-react'
export default function CTA() {
  return (
    <section className='bg-gradient-to-r from-[#FF388C] to-[#940440] text-[#fff] py-20 md:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            Ready to Transform Your Business?
          </h2>
          <p className='mb-8 text-lg opacity-90 md:text-xl'>
            Let's discuss how TechAlive can help you leverage technology to
            achieve your goals. Our team is ready to turn your vision into
            reality.
          </p>

          <div className='flex flex-col gap-4 sm:flex-row sm:justify-center mb-12'>
            <Button
              size='lg'
              variant='secondary'
              className='bg-white text-orange-600 hover:bg-slate-100'
            >
              <Mail className='mr-2 h-4 w-4' />
              Get In Touch
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-white text-white hover:bg-white hover:text-primary bg-transparent'
            >
              <Phone className='mr-2 h-4 w-4' />
              Schedule a Call
            </Button>
          </div>

          <div className='grid gap-6 md:grid-cols-3 text-center'>
            <div className='flex flex-col items-center gap-2'>
              <Mail className='h-6 w-6' />
              <div>
                <p className='font-medium'>Email Us</p>
                <p className='text-sm opacity-90'>hello@techalive.com</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Phone className='h-6 w-6' />
              <div>
                <p className='font-medium'>Call Us</p>
                <p className='text-sm opacity-90'>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <MapPin className='h-6 w-6' />
              <div>
                <p className='font-medium'>Visit Us</p>
                <p className='text-sm opacity-90'>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
