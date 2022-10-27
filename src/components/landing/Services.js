import React from 'react'
import styled from 'styled-components'
import image from '../../images/landingPage.svg'
import { services } from '../../utils/data'
// image size is 720px

const Services = () => {
  return (
    <Wrapper>
      {services.map((item, index) => {
        return (
          <div className='box box-1'>
            <div className='image'>
              <img src={image} alt='computer' />
            </div>
            <div className='description'>
              <h5 className='title'>Digital service</h5>
              <div className='title-underline'></div>
              <p className='text-small'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit veritatis ab commodi consequuntur amet omnis dolorum
                sint.
              </p>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: calc(100vh - 3.2rem);
  display: grid;
  place-items: center;

  .box {
    width: 90vw;
    max-width: 400px;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    height: 20vh;
    display: flex;
    border-radius: var(--radius-1);
    :hover {
      cursor: pointer;
      box-shadow: var(--shadow-3);
      .title-underline {
        background-color: var(--green-dark);
        transition: var(--transition-1);
      }
    }
    .description {
      overflow: hidden;
      p {
        display: none;
      }
    }
    .image {
      height: 20vh;
      width: 50vw;
      object-fit: cover;
      overflow: hidden;
      img {
        width: 100%;
        height: 20vh;
      }
    }
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    .box {
      height: 43vh;
      max-width: 47vw;
      display: grid;
      p {
        margin: 0;
        padding: 1rem;
      }
      .image {
        height: 30vh;
        width: 100%;
        img {
          width: 100%;
          height: 30vh;
        }
      }
    }
  }
  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
    .box {
      height: 43vh;
      max-width: 47vw;
      display: flex;
      .description {
        p {
          display: block;
          max-width: 30vw;
        }
      }
      .image {
        height: 100%;
        width: 60%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`
export default Services
