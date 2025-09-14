'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Loader2, Mail, Check } from 'lucide-react'

interface EmailSignupProps {
  source: 'beta' | 'newsletter' | 'footer' | 'hero' | string
  placeholder?: string
  buttonText?: string
  successMessage?: string
  className?: string
  size?: 'sm' | 'default' | 'lg'
  variant?: 'default' | 'secondary' | 'outline'
}

interface SignupState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export function EmailSignup({
  source,
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  successMessage = 'Successfully subscribed!',
  className = '',
  size = 'default',
  variant = 'default'
}: EmailSignupProps) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<SignupState>({
    status: 'idle',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setState({
        status: 'error',
        message: 'Please enter your email'
      })
      return
    }

    setState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source,
          metadata: {
            referrer: document.referrer,
            pathname: window.location.pathname,
            utm_source: new URLSearchParams(window.location.search).get('utm_source'),
            utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
            utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
          }
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setState({
          status: 'success',
          message: data.message === 'Already subscribed' 
            ? 'You\'re already subscribed!' 
            : successMessage
        })
        setEmail('')
      } else {
        setState({
          status: 'error',
          message: data.error || 'Something went wrong'
        })
      }
    } catch {
      setState({
        status: 'error',
        message: 'Network error. Please try again.'
      })
    }
  }

  if (state.status === 'success') {
    return (
      <div className={`flex items-center gap-2 text-green-600 ${className}`}>
        <Check className="h-5 w-5" />
        <span>{state.message}</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={`
            w-full sm:w-60 px-4 py-2 border border-gray-300 rounded-md text-[15px]
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            placeholder:text-gray-500
            ${size === 'sm' ? 'text-sm py-1.5 h-8' : 'h-10'}
            ${size === 'lg' ? 'text-lg py-3 h-12' : ''}
          `}
          disabled={state.status === 'loading'}
          required
        />
        <Button
          type="submit"
          disabled={state.status === 'loading' || !email}
          variant={variant}
          size="default"
          className={`
            w-full sm:w-auto px-6
            ${size === 'sm' ? 'h-8 text-sm' : 'h-10'}
            ${size === 'lg' ? 'h-12 text-lg' : ''}
          `}
        >
          {state.status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Subscribing...
            </>
          ) : (
            buttonText
          )}
        </Button>
      </div>
      
      {state.status === 'error' && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}
      
      <p className="text-xs text-gray-500">
        {source === 'beta' 
          ? 'Get early access to our trading platform.'
          : 'We\'ll never spam you. Unsubscribe at any time.'
        }
      </p>
    </form>
  )
}