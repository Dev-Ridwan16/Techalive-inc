import { Button } from '@/components/ui/_button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Smartphone,
  Laptop,
  Tablet,
  Gamepad2,
  Headphones,
  Watch,
  Tv,
  Router,
  Zap,
  Shield,
  Award,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Wrench,
  Package,
} from 'lucide-react'

export default function RepairServicesPage() {
  const repairCategories = [
    {
      icon: <Smartphone className='h-8 w-8' />,
      title: 'Smartphones',
      description:
        'Screen repairs, battery replacement, water damage, charging issues',
      popular: true,
    },
    {
      icon: <Laptop className='h-8 w-8' />,
      title: 'Laptops',
      description:
        'Hardware upgrades, screen replacement, keyboard repair, virus removal',
      popular: true,
    },
    {
      icon: <Tablet className='h-8 w-8' />,
      title: 'Tablets',
      description:
        'Cracked screens, battery issues, charging port repair, software fixes',
      popular: false,
    },
    {
      icon: <Gamepad2 className='h-8 w-8' />,
      title: 'Game Consoles',
      description:
        'Controller repair, disc drive issues, overheating, HDMI problems',
      popular: false,
    },
    {
      icon: <Headphones className='h-8 w-8' />,
      title: 'Audio Devices',
      description:
        'Headphone repair, speaker fixes, microphone issues, Bluetooth problems',
      popular: false,
    },
    {
      icon: <Watch className='h-8 w-8' />,
      title: 'Smartwatches',
      description:
        'Screen replacement, battery service, band repair, water damage',
      popular: false,
    },
    {
      icon: <Tv className='h-8 w-8' />,
      title: 'Smart TVs',
      description:
        'Display issues, connectivity problems, software updates, remote repair',
      popular: false,
    },
    {
      icon: <Router className='h-8 w-8' />,
      title: 'Smart Home',
      description:
        'Router setup, smart device configuration, network troubleshooting',
      popular: false,
    },
  ]

  const whyChooseUs = [
    {
      icon: <Zap className='h-6 w-6' />,
      title: 'Lightning Fast Service',
      description:
        'Most repairs completed within 24-48 hours. Same-day service available for urgent fixes.',
    },
    {
      icon: <Award className='h-6 w-6' />,
      title: 'Certified Technicians',
      description:
        'Our team holds industry certifications and has 10+ years of combined repair experience.',
    },
    {
      icon: <DollarSign className='h-6 w-6' />,
      title: 'Transparent Pricing',
      description:
        'No hidden fees. Free diagnostics and upfront pricing before any work begins.',
    },
    {
      icon: <Shield className='h-6 w-6' />,
      title: '90-Day Warranty',
      description:
        'All repairs backed by our comprehensive warranty. Your satisfaction is guaranteed.',
    },
    {
      icon: <Users className='h-6 w-6' />,
      title: '5-Star Customer Service',
      description:
        'Rated #1 repair service in the city. Over 10,000 happy customers and counting.',
    },
  ]

  const howItWorks = [
    {
      step: '1',
      icon: <Calendar className='h-8 w-8' />,
      title: 'Book Online',
      description:
        'Schedule your repair appointment online or call us. Free diagnostic included.',
    },
    {
      step: '2',
      icon: <Package className='h-8 w-8' />,
      title: 'Drop Off Device',
      description:
        "Bring your device to our store or use our pickup service. We'll assess the issue.",
    },
    {
      step: '3',
      icon: <Wrench className='h-8 w-8' />,
      title: 'Expert Repair',
      description:
        'Our certified technicians fix your device using genuine parts and proven methods.',
    },
    {
      step: '4',
      icon: <CheckCircle className='h-8 w-8' />,
      title: 'Quality Check & Pickup',
      description:
        'We test everything thoroughly before you pick up. Your device works like new!',
    },
  ]

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 md:py-32'>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5" />
        <div className='absolute inset-0 bg-gradient-to-r from-[#FF388C]/5 to-gray-500/5' />

        <div className='container relative px-4 md:px-6 mx-auto'>
          <div className='mx-auto max-w-4xl text-center'>
            <Badge className='mb-6 px-4 py-2 text-sm'>
              <Zap className='mr-2 h-4 w-4' />
              Fast • Reliable • Affordable
            </Badge>

            <h1 className='mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
              We Fix Tech, <span className='text-[#FF388C]'>Fast.</span>
            </h1>

            <p className='mx-auto mb-8 max-w-2xl text-lg text-slate-600 md:text-xl'>
              Expert repair services for all your gadgets and electronics. From
              cracked screens to complex hardware issues, we bring your devices
              back to life with certified technicians and genuine parts.
            </p>

            <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
              <Button size='lg' className='text-lg'>
                <Calendar className='mr-2 h-5 w-5' />
                Book a Repair
              </Button>
              <a href='tel:+2348050500466'>
                <Button
                  size='lg'
                  variant='outline'
                  className='text-lg bg-transparent'
                >
                  <Phone className='mr-2 h-5 w-5' />
                  Call +234 805 050 0466
                </Button>
              </a>
            </div>

            <div className='mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500'>
              <div className='flex items-center gap-2'>
                <CheckCircle className='h-4 w-4 text-green-500' />
                Free Diagnostics
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle className='h-4 w-4 text-green-500' />
                90-Day Warranty
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle className='h-4 w-4 text-green-500' />
                Same-Day Service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Repair Section */}
      <section className='py-20 md:py-32 bg-slate-50'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='mx-auto max-w-3xl text-center mb-16'>
            <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
              What We Repair
            </h2>
            <p className='text-lg text-slate-600 md:text-xl'>
              From everyday devices to specialized electronics, our expert
              technicians can fix it all
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {repairCategories.map((category, index) => (
              <Card
                key={index}
                className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
              >
                <CardHeader className='text-center pb-4'>
                  <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f8eef3] text-primary group-hover:scale-110 transition-transform'>
                    {category.icon}
                  </div>
                  <div className='flex items-center justify-center gap-2'>
                    <CardTitle className='text-lg'>{category.title}</CardTitle>
                    {category.popular && (
                      <Badge variant='outline' className='text-xs'>
                        Popular
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className='text-center pt-0'>
                  <CardDescription className='text-sm leading-relaxed'>
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <p className='text-slate-600 mb-4'>
              Don't see your device? We repair many more types of electronics!
            </p>
            {/* <Button variant='outline' size='lg'>
              View All Services
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button> */}
          </div>
        </div>
      </section>

      {/* Why Choose TechAlive Section */}
      <section className='py-20 md:py-32'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='mx-auto max-w-3xl text-center mb-16'>
            <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
              Why Choose TechAlive?
            </h2>
            <p className='text-lg text-slate-600 md:text-xl'>
              We're not just another repair shop. Here's what makes us the #1
              choice for tech repairs
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {whyChooseUs.map((feature, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-shadow'
              >
                <CardHeader>
                  <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fde4ef] text-primary'>
                    {feature.icon}
                  </div>
                  <CardTitle className='text-xl'>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-sm leading-relaxed'>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='mt-16 text-center'>
            <Card className='border-2 bg-gray-50 p-8'>
              <div className='mx-auto max-w-2xl'>
                <h3 className='mb-4 text-2xl font-bold text-[#FF388C]'>
                  Our Promise to You
                </h3>
                <p className='text-lg text-slate-700'>
                  Every repair comes with our satisfaction guarantee. If you're
                  not completely happy with our service, we'll make it right or
                  your money back. That's the TechAlive difference.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='py-20 md:py-32 bg-slate-50'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='mx-auto max-w-3xl text-center mb-16'>
            <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
              How It Works
            </h2>
            <p className='text-lg text-slate-600 md:text-xl'>
              Getting your device repaired is simple and hassle-free with our
              streamlined process
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {howItWorks.map((step, index) => (
              <div key={index} className='relative'>
                <Card className='text-center hover:shadow-lg transition-shadow h-full'>
                  <CardHeader>
                    <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 text-2xl font-bold'>
                      {step.step}
                    </div>
                    <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-[#FF388C]'>
                      {step.icon}
                    </div>
                    <CardTitle className='text-lg'>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-sm leading-relaxed'>
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>

                {/* {index < howItWorks.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2'>
                    <ArrowRight className='h-6 w-6 text-[#FF388C]' />
                  </div>
                )} */}
              </div>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <p className='text-slate-600 mb-6'>
              <strong>Average repair time:</strong> 24-48 hours |{' '}
              <strong>Rush service available:</strong> Same day for urgent
              repairs
            </p>
            <Button size='lg'>
              Start Your Repair
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className='py-20 md:py-32 bg-neutral'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
              Schedule Your Repair Today
            </h2>
            <p className='mb-8 text-lg opacity-90 md:text-xl max-w-2xl mx-auto'>
              Don't let a broken device slow you down. Our expert technicians
              are ready to get your tech working like new. Book now and get back
              to what matters most.
            </p>

            <div className='flex flex-col gap-4 sm:flex-row sm:justify-center mb-12'>
              <Button
                size='lg'
                variant='secondary'
                className='text-lg bg-white text-[#FF388C] hover:bg-slate-100'
              >
                <Calendar className='mr-2 h-5 w-5' />
                Book Online Now
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='text-lg border-white text-white hover:bg-white hover:text-[#FF388C] bg-transparent'
              >
                <Phone className='mr-2 h-5 w-5' />
                Call +234 805 050 0466
              </Button>
            </div>

            <div className='grid gap-6 md:grid-cols-3 text-center'>
              <div className='flex flex-col items-center gap-2'>
                <Mail className='h-6 w-6' />
                <div>
                  <p className='font-medium'>Email Us</p>
                  <p className='text-sm opacity-90'>techalive.inc@gmail.com</p>
                </div>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Phone className='h-6 w-6' />
                <div>
                  <p className='font-medium'>Call or Text</p>
                  <p className='text-sm opacity-90'>+234 805 050 0466</p>
                </div>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <MapPin className='h-6 w-6' />
                <div>
                  <p className='font-medium'>Visit Our Store</p>
                  <p className='text-sm opacity-90'>
                    Phil Adeoye Shopping Complex, Trailer Garage, Sabo,
                    Ogbomoso, Oyo State
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm'>
              <p className='text-sm opacity-90'>
                <strong>Store Hours:</strong> Mon-Fri 9AM-7PM | Sat 10AM-6PM |
                Sun 12PM-5PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
