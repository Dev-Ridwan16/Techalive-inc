import connectToDatabase from '@/lib/mongoose'
import Product from '@/models/products/product'
import { NextResponse } from 'next/server'

export async function GET() {
  await connectToDatabase()
  const products = await Product.find()

  console.log(products)
  return NextResponse.json(products)
}
