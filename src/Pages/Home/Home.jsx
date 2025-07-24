import React from 'react'
import Hero from './Hero'
import Player from './Player'
import Numbers from './Numbers'
import PoweringWinsSection from './PoweringWinsSection'
import ContactForm from './ContactForm'
import Review from './Review'
import ChallengesPage from '../reusableComponent/ChallengesPage'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Numbers/>
      <ChallengesPage/>
      <Player/>
      <PoweringWinsSection/>
      <ContactForm/>
      <Review/>
    </div>
  )
}

export default Home