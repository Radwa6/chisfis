import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Popover } from '@headlessui/react'
import './Navbar.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav className='navbar row'>
      <div className='col-sm-3'>
        <svg
          width='116'
          height='50'
          viewBox='0 0 66 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M24.9444 13.0325C24.9444 20.4807 13.4444 28.3945 13.4444 28.3945C13.4444 28.3945 1.94444 20.4807 1.94444 13.0325C1.94444 6.51522 7.34722 1.39453 13.4444 1.39453C19.5417 1.39453 24.9444 6.51522 24.9444 13.0325Z'
            fill='#4F46E5'
          />
          <path
            d='M13.4444 28.3945C13.4444 28.3945 24.9444 20.4807 24.9444 13.0325C24.9444 6.51522 19.5417 1.39453 13.4444 1.39453C7.34722 1.39453 1.94444 6.51522 1.94444 13.0325C1.94444 20.4807 13.4444 28.3945 13.4444 28.3945ZM13.4444 28.3945V1.6807'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle cx='13.5' cy='14' r='3.5' fill='#EEF2FF' stroke='white' />
          <path
            d='M31.8601 25.2216C32.951 25.2216 33.897 24.3097 33.9055 23.1761C33.897 22.0597 32.951 21.1477 31.8601 21.1477C30.7351 21.1477 29.8061 22.0597 29.8146 23.1761C29.8061 24.3097 30.7351 25.2216 31.8601 25.2216ZM43.9261 11.9091H41.3267V11.0312C41.3267 10.1449 41.6847 9.625 42.75 9.625C43.1847 9.625 43.6278 9.71875 43.9176 9.8125L44.5568 7.08523C44.1051 6.94886 43.108 6.72727 41.9915 6.72727C39.5284 6.72727 37.696 8.11648 37.696 10.9631V11.9091H35.8466V14.6364H37.696V25H41.3267V14.6364H43.9261V11.9091ZM46.1442 25H49.7749V11.9091H46.1442V25ZM47.968 10.2216C49.0504 10.2216 49.9368 9.39489 49.9368 8.38068C49.9368 7.375 49.0504 6.54829 47.968 6.54829C46.8942 6.54829 46.0078 7.375 46.0078 8.38068C46.0078 9.39489 46.8942 10.2216 47.968 10.2216ZM63.5753 15.642C63.2514 13.2301 61.3082 11.7386 58.0014 11.7386C54.652 11.7386 52.4446 13.2898 52.4531 15.8125C52.4446 17.7727 53.6804 19.0426 56.2372 19.554L58.5043 20.0057C59.6463 20.2358 60.1662 20.6534 60.1832 21.3097C60.1662 22.0852 59.3224 22.6392 58.0526 22.6392C56.7571 22.6392 55.8963 22.0852 55.6747 21.0199L52.1037 21.2074C52.4446 23.7131 54.5753 25.2557 58.044 25.2557C61.4361 25.2557 63.8651 23.5256 63.8736 20.9432C63.8651 19.0511 62.6293 17.9176 60.0895 17.3977L57.7202 16.9205C56.5014 16.6562 56.0497 16.2386 56.0582 15.608C56.0497 14.8239 56.9361 14.3125 58.0611 14.3125C59.3224 14.3125 60.0724 15.0028 60.2514 15.8466L63.5753 15.642Z'
            fill='white'
          ></path>
        </svg>
      </div>
      <div className='col-sm-5'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className='col-sm-4 '>
        <ul>
          <li>
            <button
              id='toggle-dark-mode'
              onClick={toggleDarkMode}
              className='dark-mode-button'
              aria-label='Toggle dark mode'
              style={{
                color: '#ffff',
                backgroundColor: '#161b33',
                border: 'none',
                padding: '10px',
              }}
            >
              {darkMode ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                  className='w-7 h-7'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                  ></path>
                </svg>
              ) : (
                <svg
                  width='24'
                  height='24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
            </button>
          </li>
          <li>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`${
                      open ? '' : 'text-opacity-90'
                    } group inline-flex items-left`}
                    onClick={toggleSearch}
                    style={{
                      color: '#ffff',
                      backgroundColor: '#161b33',
                      border: 'none',
                      padding: '10px',
                    }}
                  >
                    <i
                      className={`las la-search h-5 w-5 text-white`}
                      aria-hidden='true'
                      style={{
                        fontSize: '30px',
                      }}
                    />
                  </Popover.Button>
                  {isSearchOpen && (
                    <Popover.Panel className='absolute right-0 z-10 w-screen max-w-sm mt-3'>
                      <form action='' method='POST'>
                        <input
                          type='search'
                          className='block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3'
                          placeholder='Type and press enter'
                        />
                        <input type='submit' hidden value='' />
                      </form>
                    </Popover.Panel>
                  )}
                </>
              )}
            </Popover>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
