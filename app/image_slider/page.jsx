'use client'
import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    const newIndex = slideIndex + n;

    if (newIndex > images.length) {
      setSlideIndex(1); // Go to the first slide if we're beyond the last
    } else if (newIndex < 1) {
      setSlideIndex(images.length); // Go to the last slide if we're before the first
    } else {
      setSlideIndex(newIndex);
    }
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);
  handleResize();
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <div className="slideshow-container max-w-1000 mx-auto relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides fade ${index + 1 === slideIndex ? 'active' : ''}`}
          style={{
            flex: '0 0 100%',
            height: `${windowWidth>=768?'450px':'250px'}`, // Adjust the height as needed
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            transition: 'transform 0.5s ease-in-out',
            marginLeft: `${(index - slideIndex + 1) * 100}%`,
          }}
        >
        </div>
      ))}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          transform: 'translateY(-50%)',
        }}
      >
        <div
          style={{
            cursor: 'pointer',
            fontSize: '24px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
          }}
          onClick={() => plusSlides(-1)}
        >
          &lt;
        </div>
        <div
          style={{
            cursor: 'pointer',
            fontSize: '24px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
          }}
          onClick={() => plusSlides(1)}
        >
          &gt;
        </div>
      </div>
      <div className="text-center mt-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index + 1 === slideIndex ? 'bg-gray-600' : ''} cursor-pointer inline-block h-6 w-6 mx-1 bg-gray-300 rounded-full transition duration-600 ease-in-out hover:bg-gray-600`}
            onClick={() => currentSlide(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
