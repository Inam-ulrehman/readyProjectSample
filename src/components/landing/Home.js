import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { landingPage } from '../../utils/data'

const Home = () => {
  return (
    <Wrapper>
      <div className='box box-mobile'>
        <div className='mobile-container'>
          <h1>{landingPage.heading}</h1>
          <p>{landingPage.paragraph}</p>
          <Link to={landingPage.path} className='btn'>
            {landingPage.buttonTitle}
          </Link>
        </div>
      </div>
      <div className='box box-desktop'>
        <img src={landingPage.image} alt='computerPicture' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-height: 100vh;
  display: grid;
  .box {
    height: 100vh;
  }
  .box-mobile {
    display: grid;
    align-items: center;
    padding: 2rem;
  }
  .box-desktop {
    display: none;
    place-content: center;
    img {
      width: 80%;
    }
  }
  @media (min-width: 720px) {
    grid-template-columns: 1.5fr 1fr;
    .box-desktop {
      display: grid;
    }
    .box-mobile {
      padding: 4rem;
    }
  }
`
export default Home
