import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { Service } from '../components'

import { services } from '../utils/data'

const Product = () => {
  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta name='description' content='Welcome to our Services Page' />
        <link rel='canonical' href='/about' />
      </Helmet>
      <Wrapper>
        <div className='Service-heading'>
          <h1 className='title'>Services we offer </h1>
          <div className='title-underline'></div>
        </div>
        <div className='service'>
          {services.map((item, index) => {
            const { id, title, image, description } = item
            return (
              <Service
                key={index}
                id={id}
                title={title}
                image={image}
                description={description}
              />
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  display: grid;
  .title {
    padding-top: 1rem;
  }
  .service {
    display: grid;
    place-items: center;
  }
  @media (min-width: 600px) {
    .service {
      grid-template-columns: 1fr 1fr;

      margin-top: 3.2rem;
    }
  }
`
export default Product
