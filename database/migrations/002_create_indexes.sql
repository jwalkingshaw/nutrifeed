-- Create indexes for performance
CREATE INDEX idx_email_subscribers_email ON public.email_subscribers(email);
CREATE INDEX idx_email_subscribers_source ON public.email_subscribers(signup_source);
CREATE INDEX idx_email_subscribers_status ON public.email_subscribers(status);
CREATE INDEX idx_email_subscribers_created_at ON public.email_subscribers(created_at);