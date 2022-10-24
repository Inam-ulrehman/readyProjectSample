import React from 'react'
import styled from 'styled-components'
import { socialIcons } from '../../utils/data'

const SocialMedia = () => {
  return (
    <Wrapper className='boxDesign'>
      <h3 className='title'>Follow us</h3>
      <ul>
        {socialIcons.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.path} target={item.target} rel={item.rel}>
                {item.icon} <span>{item.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  a {
    font-size: 1.3rem;
    color: var(--primary-8);

    :hover {
      cursor: pointer;
      color: var(--primary-5);
    }
  }
`
export default SocialMedia
