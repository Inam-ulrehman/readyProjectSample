import React from 'react'
import styled from 'styled-components'
import { services } from '../../utils/data'
import Service from '../Service'
// image size is 720px

const Services = () => {
  return (
    <Wrapper>
      {services
        .map((item, index) => {
          const { title, image, description } = item
          return (
            <Service
              key={index}
              title={title}
              image={image}
              description={description}
            />
          )
        })
        .slice(0, 4)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: calc(100vh - 3.2rem);
  display: grid;
  place-items: center;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default Services
