import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { SHOWCASE } from '@/data';

const ShowcasePreview = () => {
  return (
    <section className='relative py-20'>
      <div className='absolute right-1/4 top-1/2 h-[600px] w-[600px] rounded-full bg-purple-700/10 blur-3xl'></div>

      <div className='container relative z-20 mx-auto px-4'>
        <AnimateOnScroll>
          <div className='mx-auto mb-16 max-w-3xl text-center'>
            <h2 className='mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl'>
              Featured Experiences
            </h2>
            <p className='text-lg text-gray-300'>
              Preview some of the revolutionary digital experiences available on
              the Neon Nexus platform.
            </p>
          </div>
        </AnimateOnScroll>

        <div className='mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2'>
          {SHOWCASE.filter((preview) => preview.isPreview).map(
            (preview, index) => (
              <AnimateOnScroll
                key={preview.id}
                direction={index % 2 === 0 ? 'right' : 'left'}
              >
                <div className='group relative aspect-video overflow-hidden rounded-xl border border-purple-500/20'>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={preview.image}
                    alt={preview.name}
                    className='h-full w-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'></div>
                  <div className='absolute bottom-0 left-0 w-full p-6'>
                    <h3 className='mb-2 text-xl font-bold text-white'>
                      {preview.name}
                    </h3>
                    <p className='text-gray-300'>{preview.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ),
          )}
        </div>

        <AnimateOnScroll>
          <div className='text-center'>
            <Link to='/showcase'>
              <Button className='border-none bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600'>
                View Full Showcase
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ShowcasePreview;
