import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import { NAV_LINKS } from '@/data';
import { Icons } from './Icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-purple-900/20 bg-black/50 backdrop-blur-md'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-1'>
            {/* <div className='relative h-10 w-10'>
              <div className='absolute inset-0 rounded-full bg-purple-600 opacity-70 blur-md'></div>
              <div className='relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-400'>
                <span className='text-xl font-bold'>N</span>
              </div>
            </div> */}
            <img src='/logo.png' alt='logo' className='h-11 w-11' />
            <span className='bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent'>
              Neon Nexus
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className='hidden items-center gap-6 md:flex'>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.id}
                to={link.url}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className='hidden items-center gap-4 md:flex'>
            <Link to='/sign-in'>
              <Button
                variant='ghost'
                className='text-gray-300 hover:bg-purple-950/30 hover:text-purple-400'
              >
                Sign In
              </Button>
            </Link>
            <Link to='/connect-wallet'>
              <Button className='whitespace-nowrap border-none bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600'>
                Connect Wallet
              </Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <button
            className='text-gray-300 md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Icons.x size={24} /> : <Icons.menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className='mt-4 border-t border-purple-900/20 py-4 md:hidden'>
            <nav className='flex flex-col gap-4'>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.url}
                  className={({ isActive }) =>
                    `flex flex-row items-center justify-between py-2 transition-colors ${
                      isActive
                        ? 'text-purple-400'
                        : 'text-gray-300 hover:text-purple-400'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  <Icons.chevronRight className='h-5 w-5' />
                </NavLink>
              ))}

              {/* Mobile buttons */}
              <div className='flex flex-col gap-2 pt-2'>
                <Link to='/sign-in' onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant='ghost'
                    className='w-full text-gray-300 hover:bg-purple-950/30 hover:text-purple-400'
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to='/connect-wallet' onClick={() => setIsMenuOpen(false)}>
                  <Button className='w-full whitespace-nowrap border-none bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600'>
                    Connect Wallet
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
