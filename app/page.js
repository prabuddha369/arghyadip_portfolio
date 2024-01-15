'use client';
import React, { useState, useEffect } from 'react';
import { Libre_Baskerville} from 'next/font/google';
import Header from './header/page';
import ImageSlider from './image_slider/page';
import HoverButton from './hover_button/page';
import ServiceCard from './service_card/page';
import Image from 'next/image'
import Link from 'next/link'

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
    <div className='bg-[#f4f8fd]' style={{ position: 'relative', width: '100%', height: '450vh'}}>
    <Header windowWidth={windowWidth}/>
    <div className='flex flex-row mt-20 mx-20 justify-between gap-2'>
    <div className='flex flex-col'>
    <p className={`text-[10vh] bg-clip-text ${lb.className} text-transparent bg-gradient-to-r from-[#f25811] via-[#555DA1] to-[#208049] transition-opacity duration-1000 transform  ${fade ? 'opacity-100' : 'opacity-0'}`}>
      Transform Your<br />Body, get<br />your Dream Life
    </p>
    <p id='about' className={`pt-20 ${lb.className} text-[#000000] text-4xl transition-opacity duration-500`}>I am, Arghyadip Biswas</p>
    <p className={`text-[#4d4d4d] text-lg ${lb.className} pt-3 w-[70vh] transition-opacity duration-500`}>a certified fitness coach, nutrition diet planner, and calisthenics coach, possessing expertise in exercise physiology, nutrition science, and bodyweight training.</p>
    <div className='justify-start'>
    <Link href="#services">
    <button className='px-20 py-5 mt-10 rounded-md bg-[#132dbf]'>My services</button>
    </Link>
    </div>
    </div>
    <div
      className={`h-[100vh] w-[100vh] rounded-xl transition-opacity duration-1000 ${fadein ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundImage: `url(../my_pic.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
    </div>
    <div className='flex flex-row justify-between items-center mx-16 mt-10'>
      <div className='flex flex-col text-2xl text-black text-center'>
        <p className='text-5xl'>4.8</p>
        <div className='flex flex-row'>
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        </div>
        <p className='font-bold'>2,123&nbsp;&nbsp;&nbsp;&nbsp;Ratings</p>
        <p className='font-bold'>Google Reviews</p>
      </div>
      <div className='flex flex-col text-2xl text-black text-center'>
        <p className='text-5xl'>A+</p>
        <div className='flex flex-row'>
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        </div>
        <p className='font-bold'>123&nbsp;&nbsp;&nbsp;&nbsp;Reviews</p>
        <p className='font-bold'>XYZ Rating</p>
      </div>
      <div className='flex flex-col w-[100vh] mt-16 text-black'>
      <p className='text-black text-2xl font-bold'>Client Success Stories</p>
        <p className='text-[#18a811] font-bold text-xl mt-5'>Prabuddha Chatterjee</p>
        <p>Arghyadip’s personalized coaching has transformed my body and mind. His holistic approach to fitness and nutrition has helped me achieve my goals and maintain a healthy lifestyle.</p>
        <p className='text-[#18a811] font-bold text-xl mt-5'>Surojit Chakroborty</p>
        <p>Arghyadip’s personalized coaching has transformed my body and mind. His holistic approach to fitness and nutrition has helped me achieve my goals and maintain a healthy lifestyle.</p>
    </div>
    </div>

    <p className={`ms-20 pt-20 ${lb.className} text-[#000000] text-5xl w-[60vh]`}>My Services</p>
     <div id='services' className='flex flex-col'>
      <div className='flex flex-row gap-5 justify-between px-16 py-10'>
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

     <p id='certificates' className={`ms-20 pt-20 ${lb.className} text-[#000000] text-5xl`}>My Credentials</p>
     <div className=' mt-10 ms-40 w-[113vh] h-[60vh]'>
        <ImageSlider/>
     </div>

    <div className='fixed bottom-[-200px] right-40'>
      <HoverButton />
    </div>
  </div>
    :
    <div className='bg-[#f4f8fd]' style={{ position: 'relative', width: '100%', height: '500vh'}}>
    <Header />
    <p className={`text-4xl mx-10 mt-10 bg-clip-text text-center ${lb.className} text-transparent bg-gradient-to-r from-[#f25811] via-[#555DA1] to-[#208049] transition-opacity duration-1000 transform  ${fade ? 'opacity-100' : 'opacity-0'}`}>
      Transform Your<br />Body, get<br />your Dream Life
    </p>
    <p id='about' className={`mx-5 pt-10 ${lb.className} text-center text-[#000000] text-2xl w-[90%] transition-opacity duration-500`}>I am, Arghyadip Biswas</p>
    <p className={`text-[#000000] text-sm ${lb.className} text-center pt-2 mx-5 w-[90%] transition-opacity duration-500`}>a certified fitness coach, nutrition diet planner, and calisthenics coach, possessing expertise in exercise physiology, nutrition science, and bodyweight training.</p>
    <div className='w-screen flex text-sm justify-center my-10'>
       <button className='px-5 py-3 rounded-md bg-[#132dbf]'>My services</button>
    </div>
    <div
      className='h-[30vh] w-[80%] flex mx-10 mt-5 transition-opacity duration-1000'
      style={{
        backgroundImage: `url(../my_pic.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
    <div className='flex flex-row justify-between mx-16 mt-10'>
      <div className='flex flex-col text-md text-black text-center'>
        <p className='text-2xl'>4.8</p>
        <div className='flex flex-row'>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        </div>
        <p className='font-bold'>2,123&nbsp;&nbsp;&nbsp;&nbsp;Ratings</p>
        <p className='font-bold'>Google Reviews</p>
      </div>
      <div className='flex flex-col text-md text-black text-center'>
        <p className='text-2xl'>A+</p>
        <div className='flex flex-row'>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        </div>
        <p className='font-bold'>123&nbsp;&nbsp;&nbsp;&nbsp;Reviews</p>
        <p className='font-bold'>XYZ Rating</p>
      </div>
    </div>

    <div className='flex flex-col mx-10 mt-16 text-black'>
      <p className='text-black text-2xl font-bold'>Client Success Stories</p>
        <p className='text-[#18a811] font-bold text-xl mt-5'>Prabuddha Chatterjee</p>
        <p>Arghyadip’s personalized coaching has transformed my body and mind. His holistic approach to fitness and nutrition has helped me achieve my goals and maintain a healthy lifestyle.</p>
        <p className='text-[#18a811] font-bold text-xl mt-5'>Surojit Chakroborty</p>
        <p>Arghyadip’s personalized coaching has transformed my body and mind. His holistic approach to fitness and nutrition has helped me achieve my goals and maintain a healthy lifestyle.</p>
    </div>

    <div className='flex flex-col mx-10 mt-16 text-black'>
      <p className='text-black text-2xl font-bold'>Client Ratings</p>

      <div className='flex flex-row mt-10'>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
      </div>
        <p className='text-black text-sm mt-2'>Arghyadip's fitness programs are challenging, yet fun and rewarding. He pushes me to my limits and helps me achieve milestones I never thought were possible.</p>
      <div className='flex items-center mt-2 gap-4'>
        <Image className='rounded-full' src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D" height={40} width={35}/>
        <p className='text-[#18a811] font-bold text-xl'>Prabuddha Chatterjee</p>
      </div>
      
      <div className='flex flex-row mt-10'>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        <img width="20" height="20" src="https://img.icons8.com/color/48/star--v1.png" alt="star--v1"/>
      </div>
        <p className='text-black text-sm mt-2'>Working with Arghyadip has been a life-changing experience. His expertise and personalized guidance have transformed my body and mind, and I feel more confident and empowered than ever before.</p>
      <div className='flex items-center mt-2 gap-4'>
        <Image className='rounded-full' src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww" height={40} width={35}/>
        <p className='text-[#18a811] font-bold text-xl'>Surojit Chakroborty</p>
      </div>
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

    <p id='certificates' className={`ms-5 pt-16 ${lb.className} text-[#000000] text-3xl`}>My Credentials</p>
     <div className='mx-5 w-[90%] mt-5'>
        <ImageSlider/>
     </div>
  </div>
    )
  );
}
