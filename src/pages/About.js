import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import Reviews from '../components/Reviews'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name='description' content='Welcome to our About Page' />
        <link rel='canonical' href='/about' />
      </Helmet>
      <Wrapper>
        <div className='box-1'>
          <h1>hello</h1>
        </div>
        <Reviews />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  .box-1 {
    height: 100vh;
  }
`
export default About
