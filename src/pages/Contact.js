import React from 'react'
import { Button, Form } from 'react-bootstrap'

import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className='contact container'>
        <h1 className='d-flex justify-content-center text-center'>Contact</h1>
        <div className='row'>
          <div className='col-sm-6'>
            <h4>🗺 ADDRESS</h4>
            <p>
              Photo booth tattooed prism, portland taiyaki hoodie neutra
              typewriter
            </p>
            <br />
            <h4>💌 EMAIL</h4>
            <p>nc.example@example.com</p>
            <br />
            <h4>☎ PHONE</h4>
            <p>000-123-456-7890</p>
            <br />
            <h4>🌏 SOCIALS</h4>
            <p>
              <nav
                class='nc-SocialsList flex space-x-5 text-2xl text-neutral-6000 dark:text-neutral-300 mt-2'
                data-nc-id='SocialsList'
              >
                <a
                  class='block'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Facebook'
                >
                  <i class='lab la-facebook-square'></i>
                </a>
                <a
                  class='block'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Twitter'
                >
                  <i class='lab la-twitter'></i>
                </a>
                <a
                  class='block'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Youtube'
                >
                  <i class='lab la-youtube'></i>
                </a>
                <a
                  class='block'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Instagram'
                >
                  <i class='lab la-instagram'></i>
                </a>
              </nav>
            </p>
          </div>
          <div className='col-sm-6'>
            <Form>
              <Form.Group className='mb-3 mt-4'>
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  className='input'
                  type='email'
                  placeholder='Example Doe'
                />
              </Form.Group>
              <Form.Group className='mb-3  mt-4'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className='input'
                  type='email'
                  placeholder='example@example.com'
                />
              </Form.Group>
              <Form.Group className='mb-3  mt-4'>
                <Form.Label>Message</Form.Label>
                <br />
                <textarea class='block w-full ' rows='6'></textarea>
              </Form.Group>
              <Button type='submit' className='Message w-100' variant='primary'>
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <div className='Happening container '>
        <div className='row '>
          <div className='col-sm-6 p-5'>
            <div>
              <h3> Join our newsletter 🎉</h3>
              <p>
                Read and share new perspectives on just about any topic.
                Everyone's welcome.
              </p>
            </div>
            <div style={{ color: '#fff' }}>
              <h5>
                <span>01 </span>
                Get more discount
              </h5>
              <h5>
                <span>02 </span>Get premium magazines
              </h5>
            </div>
            <div>
              <input
                type='email'
                class='block w-full border focus:border focus:ring focus:ring-opacity-50 bg-transparent dark:focus:ring-opacity-25 text-sm font-normal h-11 px-4 py-3'
                required=''
                aria-required='true'
                placeholder='Enter your email'
                style={{
                  borderColor: '#f7f7f7',
                  borderRadius: '50px',
                  width: '80%',
                  marginTop: '5%',
                }}
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <img
              src='https://chisfis-template.vercel.app/static/media/SVG-subcribe2.efb832b25bd6eca32484.png'
              alt=''
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
