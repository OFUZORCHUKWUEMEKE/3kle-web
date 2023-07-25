import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SubHero from '../components/SubHero'
import Footer from '../components/Footer'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <SubHero />
      <Footer />
    </div>
  )
}

export default Home