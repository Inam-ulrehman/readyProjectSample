import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { services } from '../utils/data'

const SingleProduct = () => {
  const { id } = useParams()

  const SingleObject = services.find((item) => {
    return item.id == id
  })
  const { title, image, description } = SingleObject
  return (
    <Wrapper>
      <h1 className='title'>{title}</h1>
      <div className='title-underline'></div>
      <div className='container'>
        <div className='image'>
          <img src={image} alt={title} />
        </div>
        <div className='body'>
          <h3 className='title'>{title}</h3>
          <p className='title'>{description}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  .title {
    padding-top: 1rem;
  }
  .container {
    padding: 2rem;
    .image {
      display: grid;
      place-content: center;
      img {
        width: 80vw;
        height: 50vh;
      }
    }
  }
  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .image {
        img {
          width: 40vw;
          height: 50vh;
        }
      }
    }
  }
`
export default SingleProduct
