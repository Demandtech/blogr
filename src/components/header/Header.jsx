import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/images/logo.svg'
import menuOpen from '../../assets/images/icon-hamburger.svg'
import menuClose from '../../assets/images/icon-close.svg'
//import arrowDark from '../../assets/images/icon-arrow-dark.svg'
import arrowLight from '../../assets/images/icon-arrow-light.svg'
import Hero from '../hero/Hero'

function NavBar() {
  const [navOpen, setNavOpen] = useState(false)
  const [companyDropdown, setCompanyDropDown] = useState(false)
  const [connectDropdown, setConnectDropDown] = useState(false)
  const [productDropdown, setProductDropDown] = useState(false)

  const handleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <nav className='header'>
      <div className='container'>
        
          <div className='nav-wrapper'>
            <div className='logo-wrapper'>
              <div className='logo'>
                <img src={logo} alt='' />
              </div>
              <div className='hamburger'>
                <button onClick={handleNav}>
                  <img src={navOpen ? menuClose : menuOpen} alt='' />
                </button>
              </div>
            </div>

            <div
              className={
                navOpen ? 'nav-list-wrapper openNav' : 'nav-list-wrapper'
              }
            >
              <ul className='nav-lists'>
                <li
                  onClick={() => setProductDropDown(!productDropdown)}
                  className={productDropdown ? 'nav-item drop' : 'nav-item'}
                >
                  <div className='nav-item-header'>
                    Product <img src={arrowLight} alt='' />
                  </div>
                  {productDropdown && (
                    <ul className='sub-navlists'>
                      <li>Overview</li>
                      <li>Pricing</li>
                      <li>Marketplace</li>
                      <li>Features</li>
                      <li>Integrations</li>
                    </ul>
                  )}
                </li>
                <li
                  onClick={() => setCompanyDropDown(!companyDropdown)}
                  className={companyDropdown ? 'nav-item drop' : 'nav-item'}
                >
                  <div className='nav-item-header'>
                    Company <img src={arrowLight} alt='' />
                  </div>
                  {companyDropdown && (
                    <ul className='sub-navlists'>
                      <li> About </li>
                      <li>Team</li>
                      <li>Blog</li>
                      <li>Careers</li>
                    </ul>
                  )}
                </li>

                <li
                  onClick={() => setConnectDropDown(!connectDropdown)}
                  className={connectDropdown ? 'nav-item drop' : 'nav-item'}
                >
                  <div className='nav-item-header'>
                    Connect <img src={arrowLight} alt='' />
                  </div>
                  {connectDropdown && (
                    <ul className='sub-navlists'>
                      <li>Contact</li>
                      <li>Newsletter</li>
                      <li>LinkedIn</li>
                    </ul>
                  )}
                </li>
              </ul>
              <div className='mobile-nav-btns'>
                <a className='login-btn' href='/'>
                  Login
                </a>
                <a className='mb-sign-up-btn' href='/'>
                  Sign Up
                </a>
              </div>
            </div>

            <div className='desktop-nav-btns'>
              <a className='login-btn' href='/'>
                Login
              </a>
              <a className='sign-up-btn' href='/'>
                Sign Up
              </a>
            </div>
          </div>
        
      </div>
    </nav>
  )
}

const Header = () => {
  return (
    <header>
      <NavBar />
      <Hero />
    </header>
  )
}

export default Header
