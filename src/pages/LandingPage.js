import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import GoogleMaps from '../components/GoogleMaps'
import { Home, Services } from '../components/landing'

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Welcome to our home Page' />
        <link rel='canonical' href='/' />
      </Helmet>
      <Wrapper>
        <Home />
        <Services />
        <GoogleMaps />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div``
export default LandingPage
