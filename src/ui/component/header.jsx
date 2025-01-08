import React from 'react';

export const Header = () => {
  return (
    <>
        <div className='sticky top-0'>
          <nav className='flex flex-row h-20 items-center justify-between  pl-[3rem] pr-[3rem] backdrop-blur-lg'>
            <div className='flex gap-4 ml-10 '><p> <span className=''> <i class="ri-sun-line" > </i></span>   &nbsp;TEJAS SHINDE </p></div>
              <ul className=' items-center gap-3  md:gap-5 mr-10 hidden  md:flex '>
                <li className='hover:underline'><a href="##">ABOUT</a></li> 
                <li className='hover:underline' ><a href="##">EXPERIENCE'S</a></li>
                <li className='hover:underline' ><a href="##">WORKS</a></li>
                <li className='hover:underline' ><a href="##">CONTACT</a></li>
                <li className=' hover:underline border-gray-500'><a href="##">VIEW RESUME <i class="ri-file-text-fill"> </i></a></li>
                <li className='md:opacity-100 lg:opacity-0'><i class="ri-menu-3-fill"> </i></li>
              </ul>
          </nav>
        </div>
    </>
  );
}

