import { Button } from '@/components/ui/button'
import React from 'react'

interface CtaProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  className?: string
  children: React.ReactNode
}

export default function Cta({ variant = 'default', className, children }: CtaProps) {
  return (
    <Button variant={variant} className={className}>
      {children}
    </Button>
  )
}