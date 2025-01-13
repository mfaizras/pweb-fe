import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const NavbarComponent = () => {
  const defaultClass = "transition ease-in-out duration-200 w-full fixed top-0 flex flex-wrap items-center justify-between py-3 bg-none mb-3 z-10 ";

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [classNavbar ,setClassNavbar] = useState(defaultClass + "text-white");


  useEffect(() => {
    const onScroll = () => {
      if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) && window.matchMedia('(min-width: 768px)')) {
        setClassNavbar(defaultClass + "text-black bg-white shadow")
      } else {
        setClassNavbar(defaultClass + "text-white")
      }
    };
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
  })

  return (
    <div className="font-montserrat">
      <nav className={classNavbar}>
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl md:text-3xl font-bold leading-relaxed inline-block mr-4 px-2 py-2 whitespace-nowrap"
              href="/"
            >
              Travelly
            </a>
            <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border 
              border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-center items-center ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75"
                  href="/"
                >
                  {/* <i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i> */}
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75"
                  href="/about"
                >
                  {/* <i className="fab fa-twitter text-lg leading-lg opacity-75"></i> */}
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75"
                  href="/data_buku"
                >
                  {/* <i className="fab fa-twitter text-lg leading-lg  text-blue-700 opacity-75"></i> */}
                  <span className="ml-2">Data Buku</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
