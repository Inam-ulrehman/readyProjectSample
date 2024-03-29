import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import GoogleMaps from '../components/GoogleMaps'
import { Home, Services } from '../components/landing'
import { landingPage, landingPageTwo } from '../utils/data'
// const {} = landingPage

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name='description'
          content='We provide digital solutions to all businesses, from Software Development to deployment or design to hosting we cover your back.'
        />
        <link rel='canonical' href='/' />
      </Helmet>
      <Wrapper>
        <Home landingPage={landingPage} />
        <Services />
        <Home landingPage={landingPageTwo} />
        <GoogleMaps />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div``
export default LandingPage
