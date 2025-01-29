import React, { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="sticky top-0 z-50 ">
        <nav className="flex flex-row h-20 w-full items-center justify-between px-4 md:px-4 sm:px-16 backdrop-blur-lg">
          <div className="flex flex-start gap-4">
            <p>
              <span>
                <i className="ri-sun-fill">{" "}</i>
              </span>
              &nbsp;TEJAS SHINDE
            </p>
          </div>

          {/* Desktop Menu */}
          <ul className="items-center gap-5 mr-10 hidden lg:flex">
            <li className="hover:underline">
              <a href="#about">ABOUT</a>
            </li>
            <li className="hover:underline">
              <a href="#experience">EXPERIENCE'S</a>
            </li>
            <li className="hover:underline">
              <a href="##">WORKS</a>
            </li>
            <li className="hover:underline">
              <a href="#contact">CONTACT</a>
            </li>
            <li className="hover:underline border-gray-500">
              <a href="##">
                VIEW RESUME <i className="ri-file-text-fill">{" "}</i>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <li className="inline lg:hidden" onClick={toggleMenu}>
            { menuOpen ? (	
				<i className="ri-close-large-fill">{" "}</i>
			  ) : (
			  	<i class="ri-menu-fill">{" "}</i>
			)}
          </li>
        </nav>


      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="z-40 bg-black bg-opacity-50 h-screen  fixed inset-0 ">
          <ul className="flex flex-col items-center justify-center bg-white shadow-lg text-black font-semibold w-[60%] gap-4 mt-2 p-4 h-full lg:hidden fixed right-0 ">
            <li className="hover:underline ">
              <button type="button" ><a href="#about" >ABOUT</a></button>
            </li>
            <li className="hover:underline">
              <a href="#description">EXPERIENCE'S</a>
            </li>
            <li className="hover:underline">
              <a href="#about">WORKS</a>
            </li>
            <li className="hover:underline">
              <a href="#description">CONTACT</a>
            </li>
            <li className="hover:underline border-gray-500">
              <a href="#contact">
                VIEW RESUME <i className="ri-file-text-fill">{" "}</i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
