import { TestimonialsCarousel } from '@/components/landing/Carousel'
import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'
import Landing, { Blacklist, GettingStarted, TrustedContributors } from '@/components/landing/Landing'
import { StatisticsSection } from '@/components/landing/StaticCard'
import React from 'react'

export default function page() {
  return (
    <div className=''>
      <Header/>
      <Landing/>
      <GettingStarted/>
      <StatisticsSection/>
      <TestimonialsCarousel/>
      <Blacklist/>
      <TrustedContributors/>
      <Footer/>
    </div>
  )
}
