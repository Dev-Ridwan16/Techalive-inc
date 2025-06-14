import { ProductListType } from '@/app/homepage/product-section/type'
import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema<ProductListType>({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
})

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)
export default Product
