'use client';
import React,{ useState} from 'react';
import Image from 'next/image';
import { IoIosMenu } from "react-icons/io";
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';

const dancing_script = Dancing_Script({ subsets: ['latin'], weight: '400' });

const Header = ({windowWidth}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`h-[10vh] text-black w-full bg-[#ffffff] flex place-items-center relative`} style={{ borderBottom: '1px solid white' }}>
      <div className='flex place-items-center'>
        <Image className='mx-[4vh] rounded-full' src="/logo.jpg" width={50} height={100} />
        <p className={`text-xl ${dancing_script.className}`}>Arghyadip Biswas</p>
      </div>
      {windowWidth >= 768 ? (
        <div className='flex gap-14 absolute right-20'>
        <Link href='#about'>
          <p className='transition duration-300 hover:text-blue-500'>About</p>
        </Link>
        <Link href='/events'>
          <p className='transition duration-300 hover:text-blue-500'>Events</p>
        </Link>
        <Link href='#contact'>
          <p className='transition duration-300 hover:text-blue-500'>Contact</p>
        </Link>
        <Link href='#services'>
          <p className='transition duration-300 hover:text-blue-500'>Services</p>
        </Link>
      </div>
      ) : (
        <>
          <button className='absolute right-6 top-6' onClick={toggleMenu}>
          <IoIosMenu size={30}/>
          </button>
          {isMenuOpen && (
            <div className='z-10 absolute top-[10vh] right-0 left-0 bg-[#010421] flex flex-col items-center'>
              <Link href='#about'>
                <p className='my-4 text-white cursor-pointer'>About</p>
              </Link>
              <Link href='#contact'>
                <p className='my-4 text-white cursor-pointer'>Contact</p>
              </Link>
              <Link href='/events'>
                <p className='my-4 text-white cursor-pointer'>Events</p>
              </Link>
              <Link href='#services'>
                <p className='my-4 text-white cursor-pointer'>Services</p>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Header;