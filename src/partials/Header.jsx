import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../utils/Dropdown'

import logo from '../images/logo.png'

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const trigger = useRef(null)
  const mobileNav = useRef(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mt-4 ">
            {/* Logo */}
            <Link
              to="/"
              className="block transition duration-50 ease-in-out"
              aria-label="FireTheBox"
            >
              <img height="160" width="160" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="https://coda.io/@firethebox/firethebox"
                  className="text-tangerine-100 hover:text-tangerine-300 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Soluções
                </Link>
              </li>
              <li>
                <Link
                  to="/404"
                  className="text-tangerine-100 hover:text-tangerine-300 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Preço
                </Link>
              </li>
              <li>
                {/** 
                <Link
                  to="/404"
                  className="text-tangerine-100 hover:text-tangerine-300 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              */}
              </li>
              <li>
                <Link
                  to="/404"
                  className="text-tangerine-100 hover:text-tangerine-300 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Sobre
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown className="text-tangerine-100" title="Suporte">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    to="/404"
                    className="font-medium text-sm text-white-100 hover:text-tangerine-600 flex py-2 px-4 leading-tight"
                  >
                    Contate-nos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="font-medium text-sm text-white-100 hover:text-tangerine-600 flex py-2 px-4 leading-tight"
                  >
                    Help center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="font-medium text-sm text-white-100 hover:text-tangerine-600 flex py-2 px-4 leading-tight"
                  >
                    404
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/404"
                  className="font-medium text-indico-100 hover:text-indico-600 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Iniciar sessão
                </Link>
              </li>
              <li>
                <Link
                  to="https://tally.so/r/nr54GR"
                  className="btn-sm text-white-100 bg-indico-100 hover:bg-indico-600 ml-3"
                >
                  Cadastra-se
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/* Mobile navigation */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-tangerine-100 px-4 py-2">
                <li>
                  <Link
                    to="https://coda.io/@firethebox/firethebox"
                    className="flex text-white-100 hover:text-indico-600 py-2"
                  >
                    Ferramentas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="flex text-white-100 hover:text-indico-600 py-2"
                  >
                    Planos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="flex text-white-100 hover:text-indico-600py-2"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex text-white-100 hover:text-indico-600 py-2"
                  >
                    Sobre
                  </Link>
                </li>
                <li className="py-2 my-2 border-t border-b border-white-100">
                  <span className="flex text-magenta-100 py-2">Support</span>
                  <ul className="pl-4">
                    <li>
                      <Link
                        to="/404"
                        className="text-sm flex font-medium text-white-100 hover:text-indico-600 py-2 "
                      >
                        Contate-nos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/404"
                        className="text-sm flex font-medium text-white-100 hover:text-indico-600 py-2"
                      >
                        Help center
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/404"
                        className="text-sm flex font-medium text-white-100 hover:text-indico-600 py-2"
                      >
                        404
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  {/* <Link
                    to="/signin"
                    className="flex font-medium w-full text-white-100 hover:text-white-300 py-2 justify-center"
                  >
                    Iniciar sessão
                  </Link> */}
                </li>
                <li>
                  <Link
                    to="https://tally.so/r/nr54GR"
                    className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white-100 bg-magenta-100 hover:bg-white-300 transition duration-150 ease-in-out"
                  >
                    Tenho interesse na FireTheBox
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
