import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Icons } from '@/components/Icons';

const CallToAction = () => {
  return (
    <section className='relative py-20'>
      <div className='container relative z-20 mx-auto px-4'>
        <AnimateOnScroll>
          <div className='mx-auto max-w-4xl rounded-xl border border-purple-500/20 bg-black/40 p-8 backdrop-blur-sm'>
            <div className='mb-8 text-center'>
              <h2 className='mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl'>
                Ready to Experience the Future?
              </h2>
              <p className='text-gray-300'>
                Explore our showcase to see these features in action or join our
                community to learn more.
              </p>
            </div>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Link to='/showcase'>
                <Button className='w-full border-none bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600 sm:w-auto'>
                  View Showcase
                </Button>
              </Link>
              <Link to='/community'>
                <Button
                  variant='outline'
                  className='w-full border-purple-500/50 bg-black text-purple-400 hover:bg-purple-800/20 hover:text-white hover:text-white/80'
                >
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

export default CallToAction;
