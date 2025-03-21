import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CommunityCTA = () => {
  return (
    <section className='relative py-20'>
      <div className='container relative z-20 mx-auto px-4'>
        <AnimateOnScroll>
          <div className='mx-auto max-w-4xl rounded-xl border border-purple-500/20 bg-black/40 p-8 backdrop-blur-sm'>
            <div className='mb-8 text-center'>
              <h2 className='mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl'>
                Join Us On This Journey
              </h2>
              <p className='text-gray-300'>
                Be part of our community and help shape the future of Neon
                Nexus.
              </p>
            </div>
            <div className='flex justify-center'>
              <Link to='/community'>
                <Button className='border-none bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600'>
                  Join Community
                  <Icons.arrowRight size={16} className='ml-2' />
                </Button>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CommunityCTA;
