import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { navbar } from '../../utils/data'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const MobileNavbar = () => {
  const [show, setShow] = useState(true)
  const sidebar = useRef()
  const sidebarLink = useRef()
  // sidebar
  const handleClick = (e) => {
    setShow(!show)
    if (show) {
      sidebar.current.classList.add('show')
      sidebarLink.current.classList.add('show')
    } else {
      sidebar.current.classList.remove('show')
      sidebarLink.current.classList.remove('show')
    }
  }
  useEffect(() => {}, [show])
  return (
    <Wrapper>
      <button className='icon' onClick={handleClick}>
        <FaBars />
      </button>

      <div className='sidebar' ref={sidebar}>
        <ul ref={sidebarLink}>
          {navbar.map((item, index) => {
            return (
              <li key={index} onClick={handleClick}>
                <Link to={item.path}>
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: var(--primary-5);
  height: 3.2rem;
  position: fixed;
  width: 100vw;

  .icon {
    margin: 10px;
    color: var(--primary-8);
    font-size: 2rem;
    background-color: transparent;
    border: transparent;
    display: flex;

    :hover {
      cursor: pointer;
    }
  }
  /* sidebar */
  .sidebar {
    margin-top: -9px;
    height: calc(100vh);
    width: 60vw;
    background-color: var(--grey-2);
    position: relative;
    transition: var(--transition);
    margin-left: -350px;
    ul {
      li {
        :hover {
          background-color: var(--grey-3);
        }
        a,
        svg {
          font-size: 1.5rem;
        }
        a {
          color: var(--primary-8);
          display: flex;
          align-items: center;
          padding: 1rem;
          svg {
            margin-right: 1rem;
          }
        }
      }
    }
  }

  .show {
    margin-left: 0px;
    transition: var(--transition);
  }
  @media (min-width: 600px) {
    display: none;
  }
`
export default MobileNavbar
