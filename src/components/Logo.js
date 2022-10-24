import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return (
    <Wrapper>
      <p>
        Inam<span>Web</span>Solutions
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  :hover {
    cursor: pointer;
  }
  p {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;

    span {
      color: var(--primary-5);
      font-weight: 700;
    }
    background-color: var(--grey-1);
    width: fit-content;
    border-radius: var(--radius);
    padding: 5px;
    border: 2px solid var(--primary-5);
    box-shadow: var(--shadow-3);
  }
`
export default Logo
