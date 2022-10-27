import React from 'react'
import styled from 'styled-components'
import image from '../../images/landingPage.svg'

const Home = () => {
  return (
    <Wrapper>
      <div className='box box-mobile'>
        <div className='mobile-container'>
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde
            distinctio quos neque aperiam alias, id, natus error accusantium
            itaque nam, iste mollitia!
          </p>
          <button className='btn'>Button</button>
        </div>
      </div>
      <div className='box box-desktop'>
        <img src={image} alt='computerPicture' />
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
    padding: 1.5rem;
  }
  .box-desktop {
    display: none;
    place-content: center;
    img {
      width: 80%;
    }
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    .box-desktop {
      display: grid;
    }
  }
`
export default Home
