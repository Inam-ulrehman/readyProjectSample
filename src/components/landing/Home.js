import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <h1>This is Home page</h1>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: calc(100vh - 3.2rem);
  background-color: var(--grey-2);
`
export default Home
