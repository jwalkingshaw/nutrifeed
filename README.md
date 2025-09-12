This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Newsletter Signup System

### Features
- Email collection with Supabase storage
- Source tracking (beta, newsletter, footer, etc.)
- Resend integration for welcome emails
- Duplicate email handling
- UTM parameter tracking
- Error handling and validation

### Setup

1. **Environment Variables**
   Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   RESEND_API_KEY=your_resend_api_key
   ```

2. **Database Setup**
   Run the migration file in your Supabase SQL editor:
   ```sql
   -- See: database/migrations/001_create_email_subscribers.sql
   ```

3. **Usage**
   ```tsx
   import { EmailSignup } from '@/components/forms'

   // Beta signup
   <EmailSignup 
     source="beta" 
     placeholder="Get early access"
     buttonText="Join Beta"
     successMessage="You're on the list!"
   />

   // Newsletter signup
   <EmailSignup 
     source="newsletter"
     variant="outline"
     size="lg"
   />

   // Footer signup
   <EmailSignup 
     source="footer"
     size="sm"
     className="max-w-md"
   />
   ```

### API Endpoints

- `POST /api/newsletter` - Subscribe to newsletter
  - Body: `{ email: string, source: string, metadata?: object }`
  - Returns: `{ message: string, id?: string }`

### Source Tags
Track signup sources for analytics:
- `beta` - Beta program signups
- `newsletter` - General newsletter
- `footer` - Footer signup
- `hero` - Hero section signup
- Custom tags as needed

### Email Templates
Welcome emails are customized based on source:
- Beta: Early access messaging
- Newsletter: General updates
- Custom: Fallback template
