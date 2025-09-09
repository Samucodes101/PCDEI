'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Activities', path: '/activities' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-dark-blue text-white py-4 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          PCDEI
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`hover:text-light-blue transition-colors ${
                pathname === link.path ? 'text-light-blue' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Navigation Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-dark-blue pt-4 pb-6">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`py-2 hover:text-light-blue transition-colors ${
                  pathname === link.path ? 'text-light-blue' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header