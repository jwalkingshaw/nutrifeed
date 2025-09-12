-- Enable RLS (Row Level Security)
ALTER TABLE public.email_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (for admin purposes)
CREATE POLICY "Enable read access for all users" ON public.email_subscribers
FOR SELECT USING (true);

-- Create policy for insert access (for signups)
CREATE POLICY "Enable insert access for all users" ON public.email_subscribers
FOR INSERT WITH CHECK (true);