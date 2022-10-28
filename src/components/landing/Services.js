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
        })
        .slice(0, 4)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (min-width: 620px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: var(--fixed-width);
    margin: 0 auto;
  }

  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: var(--max-width);
    gap: 1rem;
  }
`
export default Services
