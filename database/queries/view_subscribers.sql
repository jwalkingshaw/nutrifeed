-- View all subscribers
SELECT 
  id,
  email,
  signup_source,
  status,
  created_at,
  metadata->>'utm_source' as utm_source,
  metadata->>'pathname' as signup_page
FROM public.email_subscribers 
ORDER BY created_at DESC;

-- Count by source
SELECT 
  signup_source,
  COUNT(*) as subscriber_count
FROM public.email_subscribers 
WHERE status = 'subscribed'
GROUP BY signup_source
ORDER BY subscriber_count DESC;

-- Recent signups (last 24 hours)
SELECT 
  email,
  signup_source,
  created_at
FROM public.email_subscribers 
WHERE created_at > NOW() - INTERVAL '24 hours'
ORDER BY created_at DESC;