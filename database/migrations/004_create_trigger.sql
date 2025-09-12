-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_email_subscribers_updated_at 
    BEFORE UPDATE ON public.email_subscribers 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();