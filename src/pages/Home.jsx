import React from 'react'
import { Header } from '../index'
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import Categories from '../components/Categories';
import StreamingExperience from '../components/StreamingExperience';
function Home() {
  return (
    <>
      <Header />
      <HeroSection/>
      <IntroSection/>
      <Categories/>
      <StreamingExperience/>
    </>
  )
}

export default Home
