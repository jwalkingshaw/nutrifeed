import { createClient } from 'redis'

// Create Redis client with fallback handling
const redis = process.env.REDIS_URL ? createClient({
  url: process.env.REDIS_URL,
  socket: {
    connectTimeout: 5000,
  }
}) : null

// Handle connection errors gracefully
if (redis) {
  redis.on('error', (err) => {
    console.error('Redis Client Error:', err)
    // Don't crash the process, just log the error
  })
}

// Connect to Redis with fallback
let isConnected = false

const connectRedis = async () => {
  if (!redis) {
    console.warn('Redis not configured, using in-memory fallback')
    return null
  }
  
  if (!isConnected && !redis.isOpen) {
    try {
      await redis.connect()
      isConnected = true
      console.log('Connected to Redis Cloud')
    } catch (error) {
      console.error('Failed to connect to Redis, continuing without cache:', error)
      return null
    }
  }
  return redis
}

export { redis, connectRedis }