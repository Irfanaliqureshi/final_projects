import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="header-area">
      <div className="main-header">
        {/* Header Top (Hidden on small screens) */}
        <div className="header-top hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Contact Info */}
              <div className="header-info-left">
                <ul className="flex space-x-4 text-sm text-gray-700">
                  <li>needhelp@gmail.com</li>
                  <li>666 7475 25252</li>
                </ul>
              </div>
              {/* Login/Register */}
              <div className="header-info-right">
                <ul className="flex space-x-4 text-sm">
                  <li>
                    <Link href="/login" legacyBehavior>
                      <a className="text-gray-700 hover:text-blue-500">
                        <i className="ti-user mr-1"></i>Login
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" legacyBehavior>
                      <a className="text-gray-700 hover:text-blue-500">
                        <i className="ti-lock mr-1"></i>Register
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Header Bottom */}
        <div className="header-bottom py-4 bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="menu-wrapper flex justify-between items-center">
              {/* Logo (large screens) */}
              <div className="logo hidden lg:block">
                <Link href="/" legacyBehavior>
                  <a>
                    <Image src="/assets/img/logo/logo.png" alt="Logo" width={150} height={40} />
                  </a>
                </Link>
              </div>
              {/* Logo (mobile) */}
              <div className="logo logo2 block lg:hidden">
                <Link href="/" legacyBehavior>
                  <a>
                    <Image src="/assets/img/logo/logo.png" alt="Logo" width={120} height={32} />
                  </a>
                </Link>
              </div>

              {/* Main Menu */}
              <div className="main-menu hidden lg:block">
                <nav>
                  <ul className="flex space-x-8">
                    <li>
                      <Link href="/" legacyBehavior>
                        <a className="text-gray-800 hover:text-blue-500">Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" legacyBehavior>
                        <a className="text-gray-800 hover:text-blue-500">About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/courses" legacyBehavior>
                        <a className="text-gray-800 hover:text-blue-500">Courses</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/instructors" legacyBehavior>
                        <a className="text-gray-800 hover:text-blue-500">Instructors</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" legacyBehavior>
                        <a className="text-gray-800 hover:text-blue-500">Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" legacyBehavior>
                        <a className="text-gray-800 hover:text-blue-500">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Search Box */}
              <div className="header-search hidden lg:block">
                <form action="#" className="relative">
                  <input type="text" name="Search" placeholder="Search Courses" className="border rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                  <div className="search-icon absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-search text-gray-500"></i>
                  </div>
                </form>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
                <button className="text-gray-800 focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
