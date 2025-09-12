-- Create email subscribers table for newsletter/beta signups
CREATE TABLE public.email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  signup_source TEXT NOT NULL,
  status TEXT DEFAULT 'subscribed' CHECK (status IN ('subscribed', 'unsubscribed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  metadata JSONB DEFAULT '{}'::jsonb
);