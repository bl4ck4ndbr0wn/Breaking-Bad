import React, {useState} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';


const Header = (props) => {
  // console.log(props);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="hidden w-full text-gray-600 md:flex md:items-center">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"
                      fill="currentColor"/>
              </svg>
              <span className="mx-1 text-sm">BB</span>
            </div>
            <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
              Breaking Bad
            </div>
            <div className="flex items-center justify-end w-full">
              <div className="flex sm:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <nav className={classNames('sm:flex sm:justify-center sm:items-center mt-4', {'hidden': !isOpen})}>
            <div className="flex flex-col sm:flex-row items-center">
              <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="#">Home</Link>
              <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="#">Quotes</Link>
              <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="#">Categories</Link>
              <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="#">Contact</Link>
              <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="#">About</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;