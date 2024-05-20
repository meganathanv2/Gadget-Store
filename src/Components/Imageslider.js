
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerSlider.css';

const bannerImages = [
  {
    id: 1,
    src: 'https://example.com/your-banner-image1.jpg',
    alt: 'First Slide',
    title: 'Welcome to Our Gadget Store',
    description: 'Find the latest gadgets and accessories here'
  },
  {
    id: 2,
    src: 'https://example.com/your-banner-image2.jpg',
    alt: 'Second Slide',
    title: 'New Arrivals',
    description: 'Check out the newest gadgets in our collection'
  },
  {
    id: 3,
    src: 'https://example.com/your-banner-image3.jpg',
    alt: 'Third Slide',
    title: 'Special Offers',
    description: 'Enjoy great discounts on selected items'
  }
];

function Imageslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {bannerImages.map((image) => (
          <div key={image.id} className="slide">
            <img src={image.src} alt={image.alt} />
            <div className="slide-text">
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Imageslider;
