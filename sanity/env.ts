// Environment configuration for Sanity Studio
// Sanity Studio uses SANITY_STUDIO_ prefixed variables
export const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID or NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables. Make sure it\'s defined in .env.local')
}

export default {
  projectId,
  dataset,
}