import React, { useState } from 'react'
import './Slider.css'

const Slider = () => {
  const slides = [
    {
      img: 'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      title: 'New Yourk',
      description: '188,288 properties',
    },
    {
      img: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Slide 2 Title',
      description: 'This is the description for Slide 2.',
    },
    {
      img: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Slide 3 Title',
      description: 'This is the description for Slide 3.',
    },
    {
      img: 'https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      title: 'Slide 4 Title',
      description: 'This is the description for Slide 4.',
    },
    {
      img: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Slide 5 Title',
      description: 'This is the description for Slide 5.',
    },
    {
      img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      title: 'Slide 6 Title',
      description: 'This is the description for Slide 6.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % (slides.length - 3)
    setCurrentIndex(nextIndex)
  }

  return (
    <div className='slider' onClick={handleClick}>
      <div className='slides-container'>
        {slides.slice(currentIndex, currentIndex + 4).map((slide, index) => (
          <div className='slide' key={index}>
            <img src={slide.img} alt={slide.title} />
            <div className='text'>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
