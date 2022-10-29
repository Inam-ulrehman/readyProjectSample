import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { landingPage } from '../../utils/data'
const image =
  'https://res.cloudinary.com/inam6530/image/upload/v1667045138/inamwebsolutions/Untitled_design_1_xyl0in.png'

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
  display: grid;
  .box {
    height: 100vh;
  }
  .box-mobile {
    display: grid;
    padding: 2rem;
    align-items: center;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    overflow: hidden;
    .mobile-container {
      overflow: hidden;
    }
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
