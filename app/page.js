'use client';
import React, { useState, useEffect } from 'react';
import { Libre_Baskerville} from 'next/font/google';
import Header from './header/page';
import ServiceCard from './service_card/page';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { toast, Toaster } from "react-hot-toast";
import Link from 'next/link'

const lb= Libre_Baskerville({ subsets: ['latin'], weight: '400' });

export default function Home() {

const [fade, setFade] = useState(false);
const [fadein, setFadein] = useState(false);

  // Effect to trigger the fade-in animation after a short delay (e.g., 500ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(true);
    }, 1000); // Adjust the delay as needed

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  // Effect to trigger the fade-in animation after a short delay (e.g., 500ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadein(true);
    }, 300); // Adjust the delay as needed

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);



const [name, setName] = useState('');
const [age, setAge] = useState('');
const [contact, setContact] = useState('');
const [email, setEmail] = useState('');
const [isFormVisible, setFormVisibility] = useState(false);

const handleButtonClick = () => {
  setFormVisibility(!isFormVisible);
  setName('');
  setAge('');
  setContact('');
  setEmail('');
};


const handleUpload = async () => {
  if (name === "" || email === "" || age==="") {
    toast.error("Please fill in all the fields.");
    return;
  }
  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Include any required data in the request body
      body: JSON.stringify({
        name,
        email,
        contact,
        age,
      }),
    });
    
    if (response.ok) {
      toast.success("Submitted successfully!");
      handleButtonClick;
    } else {
      const errorData = await response.json();
      console.log('Error sending email:', errorData);
      toast.error("An error occured, please try again!");
      handleButtonClick;
    }
  } catch (error) {
    console.log('An error occurred:', error);
    toast.error("An error occured, please try again!");
    handleButtonClick;
  }
}

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
    <div className='bg-[#f4f8fd]' style={{ position: 'relative', width: '100%', height: '600vh'}}>
    <Header windowWidth={windowWidth}/>
    <Toaster toastOptions={{ duration: 2000 }} />
    <div className='flex flex-row mt-20 mx-20 justify-between gap-2'>
    <div className='flex flex-col'>
    <p className={`text-[10vh] bg-clip-text ${lb.className} text-transparent bg-gradient-to-r from-[#f25811] via-[#555DA1] to-[#208049] transition-opacity duration-1000 transform  ${fade ? 'opacity-100' : 'opacity-0'}`}>
      Transform Your<br />Body, get<br />your Dream Physique
    </p>
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
    <div className='flex flex-row justify-start items-center mt-10'>
      <Image src="/my_pic2.jpg" width={300} height={300} className='rounded-full ms-[10%]'/>
      <div className='flex flex-col'>
      <p id='about' className={`${lb.className} text-center ms-20 text-[#000000] text-5xl transition-opacity duration-500`}>Arghyadip Biswas</p>
      <div className="ms-20">
      <ul className={`text-[#000000] text-lg ${lb.className} pt-2 transition-opacity duration-500`}>
        <ul className="list-disc pl-5">
         <li>Fitness Trainer</li>
         <li>Sports Nutrition Consultant</li>
          <li>Dietary Suppliments Advisor</li>
          <li>Athlete in Calisthenics</li>
       </ul>
      </ul>
    </div>
    </div>
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
         title="Online Personal Consultancey"
         description="Provided virtual personal training sessions and customized workout plans to clients, ensuring flexibility and convenience."
         price="30 mins ₹499"
         imageUrl="/1.jpg"/>
          <ServiceCard
         title="Weight Loss Transformation"
         description="Helped clients achieve their weight loss goals through personalized training programs and nutrition guidance."
         price="30 mins ₹499"
         imageUrl="/2.jpg"/>
          <ServiceCard
         title="Functional Fitness Training"
         description="Designed functional fitness programs to improve overall strength, flexibility, and endurance for clients of all fitness levels."
         price="30 mins ₹499"
         imageUrl="/3.jpg"/>
      </div>
      <div className='flex flex-row gap-5 justify-between px-16 py-10'>
      <ServiceCard
         title="Sports Nutritrion"
         description="Optimize performance with personalized sports nutrition plans for peak fitness and well-being of the body."
         price="30 mins ₹499"
         imageUrl="/4.jpg"/>
          <ServiceCard
         title="Diet & Nutuion Planing"
         description="Helped clients achieve their weight loss goals through personalized training programs and nutrition guidance."
         price="30 mins ₹499"
         imageUrl="/5.jpg"/>
          <ServiceCard
         title="Group Fitness Classes"
         description="Led energizing and motivating group fitness classes, catered to different fitness levels and goals, fostering a sense of community."
         price="30 mins ₹499"
         imageUrl="/6.jpg"/>
      </div>
     </div>

     <p id='certificates' className={`ms-20 text-center pt-20 ${lb.className} text-[#000000] text-5xl`}>My Credentials</p>
     <div className='flex flex-row mx-10 w-[90%] mt-5 justify-center'>
     <Carousel className='w-[60%]'>
                    <div className="image-container">
                      <Image
                        className="rounded-xl"
                        src="/c1.jpg"
                        alt="Property thumbnail"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="image-container">
                      <Image
                        className="rounded-xl"
                        src="/c2.jpg"
                        alt="Property thumbnail"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="image-container">
                      <Image
                        className="rounded-xl"
                        src="/c3.jpg"
                        alt="Property thumbnail"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="image-container">
                      <Image
                        className="rounded-xl"
                        src="/c4.jpg"
                        alt="Property thumbnail"
                        width={400}
                        height={400}
                      />
                    </div>
                  </Carousel>
                  <style>
                    {`
  .image-container {
    height: 450px; 
    overflow: hidden;
  }

  .image-container img {
    object-fit: cover;
    width: 100%; 
    height: 100%; 
  }
`}</style>
     </div>

    <div className='fixed bottom-10 right-40'  onClick={handleButtonClick} style={{ cursor: 'pointer' }}>
    <div className="flex p-4 items-center bg-black px-4 cursor-pointer transition duration-300 hover:bg-white hover:text-black" style={{boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'}}>
        <span>Contact Now</span>
    </div>
    </div>
    {isFormVisible && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg mx-10 text-black shadow-md'>
          <div className='flex bg-[#c7c7c7] rounded-t-lg px-5 flex-row justify-between'>
            <p className='mb-5 pt-10'>We need few details of your's</p>
            <button
              onClick={handleButtonClick}
              className='text-black hover:text-gray-700'
            >
              X
            </button>
          </div>
          <form className='flex flex-col px-10 py-5'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              className='border border-2 rounded-lg ps-2'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor='contact'>Contact Number:</label>
            <input
              type='text'
              id='contact'
              name='contact'
              className='border border-2 rounded-lg ps-2'
              value={contact}
              placeholder='optional'
              onChange={(e) => setContact(e.target.value)}
            />

            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              className='border border-2 rounded-lg ps-2'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          <label htmlFor='age'>Ask Arghyadip:</label>
          <textarea
            type='text'
            id='age'
            name='age'
            className='h-20 border border-2 rounded-lg resize-none box-border p-2'
            style={{ width: '300px' }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />

            <button type='button' onClick={handleUpload} className='bg-[#000000] mt-5 mx-10 rounded-lg text-white p-3'>
              Submit
            </button>
          </form>
          </div>
        </div>
      )}
  </div>
    :
    <div className='bg-[#f4f8fd]' style={{ position: 'relative', width: '100%', height: '700vh'}}>
    <Header />
    <Toaster toastOptions={{ duration: 2000 }} />
    <p className={`text-4xl mx-10 mt-10 bg-clip-text text-center ${lb.className} text-transparent bg-gradient-to-r from-[#f25811] via-[#555DA1] to-[#208049] transition-opacity duration-1000 transform  ${fade ? 'opacity-100' : 'opacity-0'}`}>
      Transform Your<br />Body, get<br />your Dream Physique
    </p>
    <div className='flex flex-row justify-start items-center mx-10 mt-10'>
      <Image src="/my_pic2.jpg" width={110} height={110} className='rounded-full'/>
      <div className='flex flex-col'>
      <p id='about' className={`${lb.className} text-center ms-4 text-[#000000] text-xl transition-opacity duration-500`}>Arghyadip Biswas</p>
      <div className="ms-4 mt-3">
    <ul className={`text-[#000000] text-[10px] ${lb.className} transition-opacity duration-500`}>
      <ul className="list-disc pl-5">
        <li>Fitness Trainer</li>
        <li>Sports Nutrition Consultant</li>
        <li>Dietary Suppliments Advisor</li>
        <li>Athlete in Calisthenics</li>
      </ul>
     </ul>
      </div>
      </div>
    </div>
    <div className='w-screen flex text-sm justify-center my-10'>
       <Link href="#services">
       <button className='px-5 py-3 rounded-md bg-[#132dbf]'>My services</button>
       </Link>
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

    <p className={`ms-5 pt-20 ${lb.className} text-[#000000] text-3xl`}>My Services</p>
      <div id='services' className='flex flex-col mx-5 gap-5 justify-between pt-5'>
        <ServiceCard
         title="Online Personal Consultancey"
         description="Provided virtual personal training sessions and customized workout plans to clients, ensuring flexibility and convenience."
         price="30 mins ₹499"
         imageUrl="/1.jpg"/>
          <ServiceCard
         title="Weight Loss Transformation"
         description="Helped clients achieve their weight loss goals through personalized training programs and nutrition guidance."
         price="30 mins ₹499"
         imageUrl="/2.jpg"/>
          <ServiceCard
         title="Functional Fitness Training"
         description="Designed functional fitness programs to improve overall strength, flexibility, and endurance for clients of all fitness levels."
         price="30 mins ₹499"
         imageUrl="/3.jpg"/>
          <ServiceCard
         title="Sports Nutritrion"
         description="Optimize your athletic performance with personalized sports nutrition guidance. As an internationally accredited sports nutrition consultant, I craft tailored dietary plans to fuel your body, enhance recovery, and elevate your overall well-being, ensuring you achieve peak performance and reach your fitness goals."
         price="30 mins ₹499"
         imageUrl="/4.jpg"/>
          <ServiceCard
         title="Diet & Nutuion Planing"
         description="Helped clients achieve their weight loss goals through personalized training programs and nutrition guidance."
         price="30 mins ₹499"
         imageUrl="/5.jpg"/>
          <ServiceCard
         title="Group Fitness Classes"
         description="Led energizing and motivating group fitness classes that catered to different fitness levels and goals, fostering a sense of community."
         price="30 mins ₹499"
         imageUrl="/6.jpg"/>
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

    <p id='certificates' className={`text-center pt-16 ${lb.className} text-[#000000] text-3xl`}>My Credentials</p>
     <div className='flex flex-row mx-10 w-[90%] mt-5'>
     <Carousel className='w-[90%]'>
                    <div className="image-container">
                      <Image
                        className="rounded-xl"
                        src="/c1.jpg"
                        alt="Property thumbnail"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="image-container">
                      <Image
                        className="rounded-xl"
                        src="/c2.jpg"
                        alt="Property thumbnail"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="image-container">
                      <Image
                        className="rounded-xl"
                        src="/c3.jpg"
                        alt="Property thumbnail"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="image-container">
                      <Image
                        className="rounded-xl"
                        src="/c4.jpg"
                        alt="Property thumbnail"
                        width={400}
                        height={400}
                      />
                    </div>
                  </Carousel>
                  <style>
                    {`
  .image-container {
    height: 240px; 
    overflow: hidden;
  }

  .image-container img {
    object-fit: cover;
    width: 100%; 
    height: 100%; 
  }
`}</style>
     </div>
     <div className='fixed bg-white rounded-full p-5 bottom-5 right-5 shadow-md'>
        <img
          width="44"
          height="44"
          src="https://img.icons8.com/color/96/speech-bubble-with-dots.png"
          alt="speech-bubble-with-dots"
          onClick={handleButtonClick}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {isFormVisible && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg mx-10 text-black shadow-md'>
          <div className='flex bg-[#c7c7c7] rounded-t-lg px-5 flex-row justify-between'>
            <p className='mb-5 pt-10'>We need few details of your's</p>
            <button
              onClick={handleButtonClick}
              className='text-black hover:text-gray-700'
            >
              X
            </button>
          </div>
          <form className='flex flex-col px-10 py-5'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              className='border border-2 rounded-lg ps-2'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor='contact'>Contact Number:</label>
            <input
              type='text'
              id='contact'
              name='contact'
              className='border border-2 rounded-lg ps-2'
              value={contact}
              placeholder='optional'
              onChange={(e) => setContact(e.target.value)}
            />

            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              className='border border-2 rounded-lg ps-2'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          <label htmlFor='age'>Ask Arghyadip:</label>
          <textarea
            type='text'
            id='age'
            name='age'
            className='h-20 border border-2 rounded-lg resize-none box-border p-2'
            style={{ width: '300px' }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />

            <button type='button' onClick={handleUpload} className='bg-[#000000] mt-5 mx-10 rounded-lg text-white p-3'>
              Submit
            </button>
          </form>
         </div>
      </div>
      )}
  </div>
    )
  );
}