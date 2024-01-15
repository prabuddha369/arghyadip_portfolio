'use client';
import React, { useState, useEffect, useRef } from 'react';

const ImageSlider = () => {
  const images = [
    '/c1.jpg',
    '/c2.jpg',
    '/c3.jpg',
    '/c4.jpg'
  ];

  const [slideIndex, setSlideIndex] = useState(1);
  const [startX, setStartX] = useState(null);

  const sliderRef = useRef();

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const xDiff = startX - e.touches[0].clientX;

    if (xDiff > 50) {
      // Swipe left
      plusSlides(1);
    } else if (xDiff < -50) {
      // Swipe right
      plusSlides(-1);
    }

    setStartX(null);
  };

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
    <div
      className="slideshow-container max-w-1000 mx-auto relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      ref={sliderRef}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides fade ${index + 1 === slideIndex ? 'active' : ''}`}
          style={{
            flex: '0 0 100%',
            height: `${windowWidth >= 768 ? '450px' : '250px'}`,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            transition: 'transform 0.5s ease-in-out',
            marginLeft: `${(index - slideIndex + 1) * 100}%`,
          }}
        ></div>
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
