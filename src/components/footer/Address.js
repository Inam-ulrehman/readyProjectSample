import React from 'react'
import styled from 'styled-components'
import { address } from '../../utils/data'

const Address = () => {
  return (
    <Wrapper className='boxDesign'>
      <h3 className='title'>Contact US</h3>
      {address.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title} : </p>
            <a href={item.titleInfo} target={item.target}>
              {item.titleText}
            </a>
          </div>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  p,
  a {
    margin: 0;
    display: inline;
    color: var(--primary-8);
    :hover {
      cursor: pointer;
      color: var(--primary-5);
    }
  }
`
export default Address
