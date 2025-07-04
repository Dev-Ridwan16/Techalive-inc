// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Separator } from "@/components/ui/separator"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
} from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      {/* Main Footer Content */}
      <div className='container mx-auto px-4 py-12 lg:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-10 h-10 rounded-lg flex items-center justify-center'>
                <img src={'https://i.imgur.com/UKGl5Qk.png'} alt='logo' />
              </div>
              <span className='text-xl font-bold text-white'>Techalive</span>
            </div>
            <p className='text-sm leading-relaxed'>
              Techalive is your one-stop solution for all things tech. From
              cutting-edge laptops and smartphones to innovative solar power
              solutions, we provide top-notch products and services to keep you
              connected and powered up.
            </p>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2 text-sm'>
                <MapPin className='w-4 h-4 text-blue-400' />
                <span>
                  Phil Adeoye Shopping Complex, Trailer Garage, Sabo, Ogbomoso,
                  Oyo State
                </span>
              </div>
              <div className='flex items-center space-x-2 text-sm'>
                <Phone className='w-4 h-4 text-blue-400' />
                <span>+234 805 050 0466</span>
              </div>
              <div className='flex items-center space-x-2 text-sm'>
                <Mail className='w-4 h-4 text-blue-400' />
                <span>techalive.inc@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>Services</h3>
            <ul className='space-y-2'>
              {[
                'Laptop sales & repair',
                'Smartphone sales & repair',
                'Hardware & Software Solutions',
                'Hardware & Software Training',
                'Solar CCTV Installation',
                'Solar Power Solutions',
                'Car Tracking System Installation',
                'Wireless Intercom',
                'Technical Consultation',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href='#'
                    className='text-sm hover:text-blue-400 transition-colors duration-200'
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>Company</h3>
            <ul className='space-y-2'>
              {[
                'About Us',
                'Our Team',
                'Careers',
                'News & Press',
                'Investor Relations',
                'Contact Us',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href='#'
                    className='text-sm hover:text-blue-400 transition-colors duration-200'
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-sm">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
            </div>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 group"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* <Separator className='bg-gray-800' /> */}

      {/* Bottom Footer */}
      <div className='container mx-auto px-4 py-6'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <div className='flex items-center space-x-1 text-sm'>
            <span>© {new Date().getFullYear()} Techalive Consult Limited</span>
          </div>

          <div className='flex flex-wrap justify-center md:justify-end space-x-6 text-sm'>
            <Link
              href='#'
              className='hover:text-blue-400 transition-colors duration-200'
            >
              Privacy Policy
            </Link>
            <Link
              href='#'
              className='hover:text-blue-400 transition-colors duration-200'
            >
              Terms of Service
            </Link>
            <Link
              href='#'
              className='hover:text-blue-400 transition-colors duration-200'
            >
              Cookie Policy
            </Link>
            <Link
              href='#'
              className='hover:text-blue-400 transition-colors duration-200'
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
