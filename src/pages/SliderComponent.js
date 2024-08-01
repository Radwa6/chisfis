// SliderComponent.jsx
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './SliderComponent.css'

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const slides = [
    {
      img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      text: ' Nature House',
      direction: '17,288 properties',
    },
    {
      img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      text: ' Nature House',
      direction: '17,288 properties',
    },
    {
      img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      text: ' Nature House',
      direction: '17,288 properties',
    },
    {
      img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      text: ' Nature House',
      direction: '17,288 properties',
    },
    {
      img: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      text: ' Nature House',
      direction: '17,288 properties',
    },
  ]

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='slide'>
            <img src={slide.img} alt={`Slide ${index}`} />
            <h1>{slide.text}</h1>
            <p>{slide.direction}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderComponent
