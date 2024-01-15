'use client';
import React, { useState, useEffect } from 'react';
import { Libre_Baskerville} from 'next/font/google';
import Header from './header/page';
import ImageSlider from './image_slider/page';
import HoverButton from './hover_button/page';
import ServiceCard from './service_card/page';

const lb= Libre_Baskerville({ subsets: ['latin'], weight: '400' });

export default function Home() {

const [fade, setFade] = useState(false);

  // Effect to trigger the fade-in animation after a short delay (e.g., 500ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(true);
    }, 1000); // Adjust the delay as needed

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

const [fadein, setFadein] = useState(false);

  // Effect to trigger the fade-in animation after a short delay (e.g., 500ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadein(true);
    }, 300); // Adjust the delay as needed

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

const [fadeIn, setFadeIn] = useState(false);

const handleScroll = () => {
  const scrollY = window.scrollY;

  // Adjust these values according to your scroll position
  const fadeInThreshold = 200; // Set the threshold for fade-in effect
  const fadeOutThreshold = 1000; // Set the threshold for fade-out effect

  if (scrollY > fadeInThreshold && scrollY < fadeOutThreshold) {
    setFadeIn(true);
  } else {
    setFadeIn(false);
  }
};

useEffect(() => {
  // Attach the scroll event listener when the component mounts
  window.addEventListener('scroll', handleScroll);

  // Detach the scroll event listener when the component unmounts
  return () => window.removeEventListener('scroll', handleScroll);
}, []);



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

  return ((windowWidth >= 768 ?
    <div className='bg-gradient-to-r from-[#a19f9f] via-[#c9c9c9] to-[#ffffff]' style={{ position: 'relative', width: '100%', height: '400vh'}}>
    <Header windowWidth={windowWidth}/>
    <div
      className={`h-[100vh] w-[80vh] ms-14 mt-16 absolute rounded-t-full transition-opacity duration-1000 ${fadein ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundImage: `url(../my_pic.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        boxShadow: '0 0 20px rgba(0, 0, 0, 1)',
      }}
    >
      <div
        className='h-[80vh] w-[60vh] ms-[75vh] mt-[60vh]'
        style={{
          backgroundImage: `url(/my_pic2.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          boxShadow: '0 0 20px rgba(0, 0, 0, 1)',
        }}>
          <p id='about' className={`ms-[76vh] pt-[20vh] ${lb.className} text-[#000000] text-5xl w-[22vh] transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>I am,<br/><br/>Arghyadip Biswas</p>
          <p className={`text-[#000000] text-3xl ${lb.className} pt-10 ms-[80vh] w-[50vh] transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>a certified fitness coach, nutrition diet planner, and calisthenics coach, possessing expertise in exercise physiology, nutrition science, and bodyweight training.</p>
          <p id='certificates' className={`ms-[60vh] pt-[30vh] ${lb.className} text-[#000000] text-5xl w-[60vh]`}>My Certificates</p>
       </div>
    </div>
    <p className={`text-[10vh] ms-[120vh] mt-[15vh] bg-clip-text ${lb.className} text-transparent bg-gradient-to-r from-[#f25811] via-[#555DA1] to-[#208049] transition-opacity duration-1000 transform  ${fade ? 'opacity-100' : 'opacity-0'}`}>
      Transform Your<br />Body, get<br />your Dream Life
    </p>
     <div className=' mt-[120vh] ms-[20vh] w-[113vh] h-[60vh]'>
        <ImageSlider/>
     </div>
     <p className={`ms-[20vh] pt-[40vh] ${lb.className} text-[#000000] text-5xl w-[60vh]`}>My Services</p>
     <div id='services' className='flex flex-col'>
      <div className='flex flex-row justify-between px-16 py-10'>
        <ServiceCard 
         title="Fitness Coaching"
         description="Personalized workout programs tailored to your goals."
         price={99.99}
         imageUrl="/nutrition.jpg"/>
            <ServiceCard 
         title="Fitness Coaching"
         description="Personalized workout programs tailored to your goals."
         price={99.99}
         imageUrl="/nutrition.jpg"/>
            <ServiceCard 
         title="Fitness Coaching"
         description="Personalized workout programs tailored to your goals."
         price={99.99}
         imageUrl="/nutrition.jpg"/>
      </div>
      <div className='flex flex-row'>

      </div>
      <div className='flex flex-row'>

      </div>
     </div>
    <div className='fixed bottom-[-200px] right-40'>
      <HoverButton />
    </div>
  </div>
    :
    <div className='bg-[#ffffff]' style={{ position: 'relative', width: '100%', height: '400vh'}}>
    <Header />
    <p className={`text-5xl mx-10 mt-10 bg-clip-text ${lb.className} text-transparent bg-gradient-to-r from-[#f25811] via-[#555DA1] to-[#208049] transition-opacity duration-1000 transform  ${fade ? 'opacity-100' : 'opacity-0'}`}>
      Transform Your<br />Body, get<br />your Dream Life
    </p>
    <div
      className={`h-[50vh] w-[90%] flex mx-5 mt-5 rounded-t-full transition-opacity duration-1000 ${fadein ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundImage: `url(../my_pic.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
    <div className='flex flex-row mx-5 mt-16'>
    <div className='flex flex-col'>
        <p id='about' className={`ms-3 pt-3 ${lb.className} text-[#000000] text-2xl w-20 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>I am,<br/>Arghyadip Biswas</p>
        <p className={`text-[#000000] text-sm ${lb.className} pt-2 ms-3 w-40 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>a certified fitness coach, nutrition diet planner, and calisthenics coach, possessing expertise in exercise physiology, nutrition science, and bodyweight training.</p>
      </div>
      <div
        className='h-[40vh] w-[25vh]'
        style={{
          backgroundImage: `url(/my_pic2.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}/>
    </div>
    <p id='certificates' className={`ms-5 pt-16 ${lb.className} text-[#000000] text-3xl`}>My Certificates</p>
     <div className='mx-5 w-[90%]'>
        <ImageSlider/>
     </div>
     <p className={`ms-5 pt-20 ${lb.className} text-[#000000] text-3xl`}>My Services</p>
      <div id='services' className='flex flex-col mx-5 gap-5 justify-between pt-5'>
        <ServiceCard
         title="Fitness Coaching"
         description="Personalized workout programs tailored to your goals."
         price={99.99}
         imageUrl="/nutrition.jpg"/>
          <ServiceCard
         title="Fitness Coaching"
         description="Personalized workout programs tailored to your goals."
         price={99.99}
         imageUrl="/nutrition.jpg"/>
          <ServiceCard
         title="Fitness Coaching"
         description="Personalized workout programs tailored to your goals."
         price={99.99}
         imageUrl="/nutrition.jpg"/>
      </div>
  </div>
    )
  );
}
