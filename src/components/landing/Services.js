import React from 'react'
import styled from 'styled-components'

const Services = () => {
  return (
    <Wrapper>
      <div className='box box-1'>Box-1</div>
      <div className='box box-2'>Box-2</div>
      <div className='box box-3'>Box-3</div>
      <div className='box box-4'>Box-4</div>
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
    :hover {
      box-shadow: var(--shadow-3);
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    .box {
      height: 43vh;
      max-width: 43vw;
    }
  }
`
export default Services
