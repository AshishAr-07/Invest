import React from 'react'
import Hero from './_components/Hero'
import HelpSection from './_components/HelpSection'
import Process from './_components/Process'
import { Why } from './_components/WhyChoose'
import Cta from './_components/Cta'
import Solutions from './_components/Solutions'
import Intro from './_components/Intro'

export default function page() {
  return (
    <main>
    <Hero/>
    <HelpSection/>
    <Intro/>
    <Why/>
    <Solutions/>
    <Process/>
    <Cta/>
    </main>
  )
}
