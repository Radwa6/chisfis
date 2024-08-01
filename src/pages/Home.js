import React, { useState } from 'react'
import './Home.css'
import Slider from './Slider'
import SliderComponent from './SliderComponent'

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('')

  const handleTabClick = (tab) => {
    setSelectedTab(tab)
  }
  return (
    <div className='HomePage'>
      <div className='Home row'>
        <div className='col-sm-6'>
          <h1>Hotel, car & experiences</h1>
          <p>
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels
          </p>
          <button>Start your search</button>
        </div>
        <div className='col-sm-6 imgheader'>
          <img src='/hero-right.ee78c0ffae92062cbe4e.png' alt='' />
        </div>
      </div>
      <div className='container Homee'>
        <div className='row '>
          <ul className='nav'>
            <li onClick={() => handleTabClick('stays')}>Stays</li>
            <li onClick={() => handleTabClick('experiences')}>Experiences</li>
            <li onClick={() => handleTabClick('cars')}>Cars</li>
            <li onClick={() => handleTabClick('flights')}>Flights</li>
          </ul>
        </div>

        <div className='row  content'>
          {selectedTab === 'stays' && (
            <div className='row stays'>
              <div className='col-sm-4'>
                <div className='icon-text'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                    data-slot='icon'
                    className='w-5 h-5 lg:w-7 lg:h-7'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
                    ></path>
                  </svg>
                  <div>
                    <h2>Location</h2>
                    <p>Where are you going?</p>
                  </div>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='icon-text'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                    data-slot='icon'
                    className='w-5 h-5 lg:w-7 lg:h-7'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
                    ></path>
                  </svg>
                  <div>
                    <h2>Location</h2>
                    <p>Where are you going?</p>
                  </div>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='row'>
                  <div className='col-sm-8'>
                    <div className='icon-text'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                        data-slot='icon'
                        className='w-5 h-5 lg:w-7 lg:h-7'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
                        ></path>
                      </svg>
                      <div>
                        <h2>Location</h2>
                        <p>Where are you going?</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <div class='pr-2 xl:pr-4 flex items-center justify-center'>
                      <a
                        type='button'
                        href='/listing-stay-map'
                        style={{
                          backgroundColor: '#4f46e5',
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                        }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='h-6 w-6 '
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='white'
                          style={{
                            width: '60%',
                            marginTop: '20%',
                            marginLeft: '20%',
                          }}
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='1.5'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 'experiences' && <div>Content for Experiences</div>}
          {selectedTab === 'cars' && <div>Content for Cars</div>}
          {selectedTab === 'flights' && <div>Content for Flights</div>}
        </div>
      </div>
      <div className='Heading container'>
        <h2>Heading of sections</h2>
        <p>Descriptions for sections</p>
        <div className='App'>
          <Slider />
        </div>
      </div>
      <div className='Happening container'>
        <div className='row'>
          <div className='col-sm-6'>
            <img
              src='https://chisfis-template.vercel.app/static/media/our-features.d69027726b5a972c1b17.png'
              alt=''
              style={{ width: '100%' }}
            />
          </div>

          <div className='col-sm-6'>
            <p>BENnefits</p>
            <h2>Happening cities</h2>
            <div>
              <span className='one'>Advertising</span>
              <h3>Cost-effective advertising</h3>
              <p>
                With a free listing, you can advertise your rental with no
                upfront costs
              </p>
            </div>
            <div>
              <span className='one'>Advertising</span>
              <h3>Cost-effective advertising</h3>
              <p>
                With a free listing, you can advertise your rental with no
                upfront costs
              </p>
            </div>
            <div>
              <span className='one'>Advertising</span>
              <h3>Cost-effective advertising</h3>
              <p>
                With a free listing, you can advertise your rental with no
                upfront costs
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='Featured '>
        <div className='container'>
          <h1>Featured places to stay</h1>
          <p>Popular places to stay that Chisfis recommends for you</p>
          <ul>
            <li className='active'>New York</li>
            <li>Tokyo</li>
            <li>Paris</li>
            <li>London</li>
          </ul>
          <div className='row '>
            <div className='col-sm-3'>
              <div className='cart'>
                <img
                  src='https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
                />
                <div className='container'>
                  <p>Entire cabin · 10 beds</p>
                  <h3>
                    <span>ADS</span>Best Western Cedars...
                  </h3>
                  <p>1 Anzinger Court</p>
                  <hr />
                  <p>
                    <span>$26</span>/night
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='cart'>
                <img
                  src='https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
                />
                <div className='container'>
                  <p>Entire cabin · 10 beds</p>
                  <h3>
                    <span>ADS</span>Best Western Cedars...
                  </h3>
                  <p>1 Anzinger Court</p>
                  <hr />
                  <p>
                    <span>$26</span>/night
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='cart'>
                <img
                  src='https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
                />
                <div className='container'>
                  <p>Entire cabin · 10 beds</p>
                  <h3>
                    <span>ADS</span>Best Western Cedars...
                  </h3>
                  <p>1 Anzinger Court</p>
                  <hr />
                  <p>
                    <span>$26</span>/night
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='cart'>
                <img
                  src='https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
                />
                <div className='container'>
                  <p>Entire cabin · 10 beds</p>
                  <h3>
                    <span>ADS</span>Best Western Cedars...
                  </h3>
                  <p>1 Anzinger Court</p>
                  <hr />
                  <p>
                    <span>$26</span>/night
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row '>
            <div className='col-sm-3'>
              <div className='cart'>
                <img
                  src='https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
                />
                <div className='container'>
                  <p>Entire cabin · 10 beds</p>
                  <h3>
                    <span>ADS</span>Best Western Cedars...
                  </h3>
                  <p>1 Anzinger Court</p>
                  <hr />
                  <p>
                    <span>$26</span>/night
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='cart'>
                <img
                  src='https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
                />
                <div className='container'>
                  <p>Entire cabin · 10 beds</p>
                  <h3>
                    <span>ADS</span>Best Western Cedars...
                  </h3>
                  <p>1 Anzinger Court</p>
                  <hr />
                  <p>
                    <span>$26</span>/night
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='cart'>
                <img
                  src='https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
                />
                <div className='container'>
                  <p>Entire cabin · 10 beds</p>
                  <h3>
                    <span>ADS</span>Best Western Cedars...
                  </h3>
                  <p>1 Anzinger Court</p>
                  <hr />
                  <p>
                    <span>$26</span>/night
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='cart'>
                <img
                  src='https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
                />
                <div className='container'>
                  <p>Entire cabin · 10 beds</p>
                  <h3>
                    <span>ADS</span>Best Western Cedars...
                  </h3>
                  <p>1 Anzinger Court</p>
                  <hr />
                  <p>
                    <span>$26</span>/night
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <button>Show me more</button>
          </div>
        </div>
      </div>
      <div className=' workk'>
        <div style={{ color: '#fff' }}>
          <h1>How it work</h1>
          <p>Keep calm & travel on</p>
          <div className='work'>
            <div className='row'>
              <div className='col-sm-4'>
                <img
                  src='https://chisfis-template.vercel.app/static/media/HIW1.bbef046fd6951afd08a7.png'
                  alt=''
                  style={{ width: '60%' }}
                />
                <h4>Book & relax</h4>
                <p>
                  Let each trip be an inspirational journey, each room a
                  peaceful space
                </p>
              </div>
              <div className='col-sm-4'>
                <img
                  src='https://chisfis-template.vercel.app/static/media/HIW1.bbef046fd6951afd08a7.png'
                  alt=''
                  style={{ width: '60%' }}
                />
                <h4>Book & relax</h4>
                <p>
                  Let each trip be an inspirational journey, each room a
                  peaceful space
                </p>
              </div>
              <div className='col-sm-4'>
                <img
                  src='https://chisfis-template.vercel.app/static/media/HIW1.bbef046fd6951afd08a7.png'
                  alt=''
                  style={{ width: '60%' }}
                />
                <h4>Book & relax</h4>
                <p>
                  Let each trip be an inspirational journey, each room a
                  peaceful space
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Featured '>
        <div className='Suggestions text-lg-center'>
          <h1>Suggestions for discovery</h1>
          <p>Popular places to stay that Chisfis recommends for you</p>
        </div>
        <SliderComponent />
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
      <div className='Featured '>
        <div className='Suggestions text-lg-left  '>
          <div className='row'>
            {' '}
            <div className='col-sm-6'>
              <img
                src='https://chisfis-template.vercel.app/static/media/BecomeAnAuthorImg.02703848a9dd53f8bbac.png'
                alt=''
                style={{ width: '100%' }}
              />
            </div>
            <div className='col-sm-6 p-5'>
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
                <circle
                  cx='13.5'
                  cy='14'
                  r='3.5'
                  fill='#EEF2FF'
                  stroke='white'
                />
                <path
                  d='M31.8601 25.2216C32.951 25.2216 33.897 24.3097 33.9055 23.1761C33.897 22.0597 32.951 21.1477 31.8601 21.1477C30.7351 21.1477 29.8061 22.0597 29.8146 23.1761C29.8061 24.3097 30.7351 25.2216 31.8601 25.2216ZM43.9261 11.9091H41.3267V11.0312C41.3267 10.1449 41.6847 9.625 42.75 9.625C43.1847 9.625 43.6278 9.71875 43.9176 9.8125L44.5568 7.08523C44.1051 6.94886 43.108 6.72727 41.9915 6.72727C39.5284 6.72727 37.696 8.11648 37.696 10.9631V11.9091H35.8466V14.6364H37.696V25H41.3267V14.6364H43.9261V11.9091ZM46.1442 25H49.7749V11.9091H46.1442V25ZM47.968 10.2216C49.0504 10.2216 49.9368 9.39489 49.9368 8.38068C49.9368 7.375 49.0504 6.54829 47.968 6.54829C46.8942 6.54829 46.0078 7.375 46.0078 8.38068C46.0078 9.39489 46.8942 10.2216 47.968 10.2216ZM63.5753 15.642C63.2514 13.2301 61.3082 11.7386 58.0014 11.7386C54.652 11.7386 52.4446 13.2898 52.4531 15.8125C52.4446 17.7727 53.6804 19.0426 56.2372 19.554L58.5043 20.0057C59.6463 20.2358 60.1662 20.6534 60.1832 21.3097C60.1662 22.0852 59.3224 22.6392 58.0526 22.6392C56.7571 22.6392 55.8963 22.0852 55.6747 21.0199L52.1037 21.2074C52.4446 23.7131 54.5753 25.2557 58.044 25.2557C61.4361 25.2557 63.8651 23.5256 63.8736 20.9432C63.8651 19.0511 62.6293 17.9176 60.0895 17.3977L57.7202 16.9205C56.5014 16.6562 56.0497 16.2386 56.0582 15.608C56.0497 14.8239 56.9361 14.3125 58.0611 14.3125C59.3224 14.3125 60.0724 15.0028 60.2514 15.8466L63.5753 15.642Z'
                  fill='white'
                ></path>
              </svg>
              <h1>Why did you choose us?</h1>
              <p>
                Accompanying us, you have a trip full of experiences. With
                Chisfis, booking accommodation, resort villas, hotels, private
                houses, apartments... becomes fast, convenient and easy.
              </p>
              <button>Become an author</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
