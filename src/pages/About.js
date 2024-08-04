import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='About container '>
      <div className='row  '>
        <div className='col-sm-5'>
          <h1>👋 About Us.</h1>
          <p>
            We're impartial and independent, and every day we create
            distinctive, world-class programmes and content which inform,
            educate and entertain millions of people in the around the world.
          </p>
        </div>
        <div className='col-sm-7'>
          <img
            src='https://chisfis-template.vercel.app/static/media/about-hero-right.534fc28b738f026ab253.png'
            alt=''
            style={{ width: '100%' }}
          />
        </div>
      </div>
      <div className='row'>
        <div>
          <h1>⛱ Founder</h1>
          <p>
            We're impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-sm-3'>
          <div className='cust'>
            <img
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
              alt=''
              style={{ width: '100%' }}
            />
            <h2>Niamh O'Shea</h2>
            <p>Co-founder and Chief Executive</p>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='cust'>
            <img
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
              alt=''
              style={{ width: '100%' }}
            />
            <h2>Niamh O'Shea</h2>
            <p>Co-founder and Chief Executive</p>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='cust'>
            <img
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
              alt=''
              style={{ width: '100%' }}
            />
            <h2>Niamh O'Shea</h2>
            <p>Co-founder and Chief Executive</p>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='cust'>
            <img
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
              alt=''
              style={{ width: '100%' }}
            />
            <h2>Niamh O'Shea</h2>
            <p>Co-founder and Chief Executive</p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h1>🚀 Fast Facts</h1>
        <p>
          We're impartial and independent, and every day we create distinctive,
          <br />
          world-class programmes and content
        </p>
        <div className='row'>
          <div className='col-sm-4 '>
            <div className='million'>
              <h1>10 million</h1>
              <p>
                Articles have been public around the world (as of Sept. 30,
                2021)
              </p>
            </div>
          </div>
          <div className='col-sm-4 '>
            <div className='million'>
              <h1>100,000</h1>
              <p>
                Articles have been public around the world (as of Sept. 30,
                2021)
              </p>
            </div>
          </div>
          <div className='col-sm-4 '>
            <div className='million'>
              <h1>220+</h1>
              <p>
                Articles have been public around the world (as of Sept. 30,
                2021)
              </p>
            </div>
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

export default About
