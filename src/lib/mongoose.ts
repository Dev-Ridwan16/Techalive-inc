import mongoose from 'mongoose'

const MONGODB_URI = `mongodb+srv://techaliveinc:cdTkhQWLSPAHLxMU@cluster0.shjpur1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
console.log(MONGODB_URI)

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectToDatabase() {
  if (cached.conn) {
    console.log('Using existing mongoose connection')
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    console.log('Creating new mongoose connection')
    cached.promise = mongoose
      .connect(MONGODB_URI!, opts)
      .then((mongoose) => {
        console.log('MongoDB connected successfully')
        return mongoose
      })
      .catch((error) => {
        console.error('MongoDB connection error:', error)
        throw error
      })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    console.error('Failed to establish MongoDB connection:', e)
    throw e
  }

  return cached.conn
}

export default connectToDatabase
