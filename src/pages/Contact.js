import React from 'react'
import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import image from '../images/contact_us.svg'

const Contact = () => {
  const name = useRef(null)
  const lastName = useRef(null)
  const email = useRef(null)
  const details = useRef(null)

  const handleSubmit = (e) => {
    // Prepare axios and good to go.
    e.preventDefault()
    let nameValue = name.current.value
    let lastNameValue = lastName.current.value
    let emailValue = email.current.value
    let detailsValue = details.current.value
    console.log(nameValue, lastNameValue, emailValue, detailsValue)
    name.current.value = ''
    lastName.current.value = ''
    email.current.value = ''
    details.current.value = ''
  }
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name='description' content='Welcome to our Contact Form' />
        <link rel='canonical' href='/contact' />
      </Helmet>

      <Wrapper>
        <form onSubmit={handleSubmit} className='form'>
          <h1 className='title'>Get In Touch with us</h1>
          <div className='title-underline'></div>
          {/* name */}
          <div>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input className='form-input' type='text' ref={name} />
          </div>
          {/* Last Name */}
          <div>
            <label htmlFor='lastName' className='form-label'>
              LastName
            </label>
            <input className='form-input' type='text' ref={lastName} />
          </div>
          {/* Email */}
          <div>
            <label htmlFor='email' className='form-label'>
              email
            </label>
            <input className='form-input' type='text' ref={email} />
          </div>
          {/* Details */}
          <div>
            <label htmlFor='details' className='form-label'>
              Details
            </label>
            <textarea
              className='form-input'
              type='text'
              cols='50'
              rows='5'
              ref={details}
            />
          </div>
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </form>
        <div className='contactImage'>
          <img src={image} alt='' />
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  h1 {
    margin-top: 0;
    font-size: 1rem;
  }
  /* margin: 0; */
  display: flex;
  align-items: center;
  .contactImage {
    img {
      max-width: 400px;
    }
  }

  @media (max-width: 720px) {
    .contactImage {
      display: none;
    }
  }
`
export default Contact
