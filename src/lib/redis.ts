import { createClient } from 'redis'

// Create Redis client
const redis = createClient({
  url: process.env.REDIS_URL
})

// Handle connection errors
redis.on('error', (err) => {
  console.error('Redis Client Error:', err)
})

// Connect to Redis
let isConnected = false

const connectRedis = async () => {
  if (!isConnected && !redis.isOpen) {
    try {
      await redis.connect()
      isConnected = true
      console.log('Connected to Redis Cloud')
    } catch (error) {
      console.error('Failed to connect to Redis:', error)
      throw error
    }
  }
  return redis
}

export { redis, connectRedis }