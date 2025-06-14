import * as TablerIcons from '@tabler/icons-react'
import Img from './public/assets/IMG.png'
import Img1 from './public/assets/IMG-1.png'
import Img2 from './public/assets/IMG-2.png'
import Img3 from './public/assets/IMG-3.png'
import Img4 from './public/assets/IMG-4.png'
import Img5 from './public/assets/IMG-5.png'
import { StaticImageData } from 'next/image'

export const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Repairs',
    path: '/repair',
  },
  {
    name: 'Shop',
    path: '/shop',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
]

export const expectations: {
  icon: keyof typeof TablerIcons
  title: string
  description: string
}[] = [
  {
    icon: 'IconTools',
    title: 'Best Services',
    description:
      'Our services are designed to meet your needs and expectations.',
  },
  {
    icon: 'IconShoppingCart',
    title: 'Fast & Easy Shopping',
    description: 'Discover our wide selection of products at the best prices.',
  },
  {
    icon: 'IconTrophy',
    title: 'Quality Guarantee',
    description: 'We provide a 100% satisfaction guarantee.',
  },
  {
    icon: 'Icon24Hours',
    title: 'Customer Support',
    description: '24/7 support and customer service is available.',
  },
]

export const categories: { image: StaticImageData; category: string }[] = [
  {
    image: Img5,
    category: 'Laptops',
  },
  {
    image: Img,
    category: 'Phones',
  },
  {
    image: Img2,
    category: 'Solar & Inverter Systems',
  },
  {
    image: Img1,
    category: 'Car tracking systems',
  },
  {
    image: Img4,
    category: 'Electronic gadgets',
  },
  {
    image: Img3,
    category: 'Wireless Intercom',
  },
]

export const bestSellingItems: {
  image: StaticImageData
  item: { name: string; price: string }
}[] = [
  {
    image: Img5,
    item: { name: 'HP 1030G4', price: '345,000' },
  },
  {
    image: Img5,
    item: { name: 'Samsung S24 Ultra', price: '2,400,000' },
  },
]
