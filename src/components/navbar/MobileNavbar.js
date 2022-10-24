import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { navbar } from '../../utils/data'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  const [show, setShow] = useState(false)
  const sidebar = useRef()
  const sidebarLink = useRef()

  // sidebar
  const handleClick = (e) => {
    setShow(!show)
    if (show) {
      sidebar.current.classList.remove('show')
      sidebarLink.current.classList.add('hide')
    } else {
      sidebar.current.classList.add('show')
      sidebarLink.current.classList.remove('hide')
    }
  }

  return (
    <Wrapper>
      <button className='icon' onClick={handleClick}>
        <FaBars />
      </button>

      <div className='sidebar' ref={sidebar}>
        <ul className='hide' ref={sidebarLink}>
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
    height: calc(100vh - 60px);
    width: 0px;
    background-color: var(--grey-2);
    position: relative;
    transition: var(--transition);
    ul {
      li {
        :hover {
          background-color: var(--grey-3);
        }
        a,
        svg {
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
  .hide {
    margin-left: -100px;
    transition: var(--transition);
  }
  .show {
    width: 200px;
  }
  @media (min-width: 600px) {
    display: none;
  }
`
export default MobileNavbar
