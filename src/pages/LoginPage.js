import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className='login-container'>
      <h2 className='login-title'>Login</h2>

      <Button className='btn-social ' variant='primary' block>
        Continue with Facebook
      </Button>

      <Button className='btn-social' variant='info' block>
        Continue with Twitter
      </Button>

      <Button className='btn-social ' variant='danger' block>
        Continue with Google
      </Button>
      <div className='relative text-center '>
        <span
          className='relative z-10 inline-block px-4  font-medium text-sm bg-[#161b33] text-white'
          style={{
            position: 'relative',
            top: '14px',
            zIndex: '1',
            padding: '5px',
          }}
        >
          OR
        </span>{' '}
        <div
          className='absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800'
          style={{ zIndex: '0' }}
        ></div>
      </div>

      <Form>
        <Form.Group className='mb-3  mt-4'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className='input'
            type='email'
            placeholder='example@example.com'
          />
        </Form.Group>

        <Form.Group className='mb-3 '>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' className='input' />
        </Form.Group>

        <button type='button' className='forgot-password '>
          Forgot password?
        </button>

        <Button type='submit' className='w-100' variant='primary'>
          Continue
        </Button>
      </Form>

      <p className='create-account d-flex text-center justify-content-center'>
        New user? <a href=''> Create an account </a>
      </p>
    </div>
  )
}

export default LoginPage
