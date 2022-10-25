import React from 'react'
import { Helmet } from 'react-helmet-async'

const Product = () => {
  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta name='description' content='Welcome to our Services Page' />
        <link rel='canonical' href='/about' />
      </Helmet>
    </>
  )
}

export default Product
