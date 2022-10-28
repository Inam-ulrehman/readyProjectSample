import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { services } from '../utils/data'

const SingleProduct = () => {
  const { id } = useParams()
  const productId = Number(id)

  const SingleObject = services.find((item) => {
    return item.id === productId
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
        max-width: 320px;
      }
    }
  }
  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .image {
        img {
          max-width: 420px;
        }
      }
    }
  }
`
export default SingleProduct
