import { Link } from 'react-router-dom';
import { SOCIALS, PLATFORMS, RESOURCES, COMPANY } from '@/data';

const Footer = () => {
  return (
    <footer className='border border-purple-900/20 bg-black/80 backdrop-blur-md'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div className='md:col-span-1'>
            <Link to='/' className='mb-4 flex items-center gap-2'>
              <div className='relative h-8 w-8'>
                <div className='absolute inset-0 rounded-full bg-purple-600 opacity-70 blur-md'></div>
                <div className='relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-400'>
                  <span className='text-sm font-bold'>N</span>
                </div>
              </div>
              <span className='bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-lg font-bold text-transparent'>
                Neon Nexus
              </span>
            </Link>
            <p className='mb-6 text-gray-400'>
              Building the bridge between digital experiences and real-world
              utility through blockchain technology.
            </p>
            <div className='flex gap-4'>
              {SOCIALS.map((social) => (
                <Link
                  key={social.id}
                  to={social.url}
                  className='text-gray-400 transition-colors hover:text-purple-400'
                >
                  <social.icon size={20} />
                  <span className='sr-only'>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className='mb-4 font-semibold text-white'>Platform</h3>
            <ul className='space-y-3'>
              {PLATFORMS.map((platform) => (
                <li key={platform.id}>
                  <Link
                    to={platform.url}
                    className='text-gray-400 transition-colors hover:text-purple-400'
                  >
                    {platform.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-4 font-semibold text-white'>Resources</h3>
            <ul className='space-y-3'>
              {RESOURCES.map((resource) => (
                <li key={resource.id}>
                  <Link
                    to={resource.url}
                    className='text-gray-400 transition-colors hover:text-purple-400'
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-4 font-semibold text-white'>Company</h3>
            <ul className='space-y-3'>
              {COMPANY.map((company) => (
                <li key={company.id}>
                  <Link
                    to={company.url}
                    className='text-gray-400 transition-colors hover:text-purple-400'
                  >
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mt-12 border-t border-purple-900/20 p-8 text-center'>
          <p className='text-sm text-gray-400'>
            © {new Date().getFullYear()} Neon Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
