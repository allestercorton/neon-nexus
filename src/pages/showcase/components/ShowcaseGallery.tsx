import AnimateOnScroll from '@/components/AnimateOnScroll';
import ShowcaseItems from './ShowcaseItems';

const ShowcaseGallery = () => {
  return (
    <section className='relative py-20'>
      <div className='absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-3xl'></div>

      <div className='container relative z-20 mx-auto px-4'>
        <AnimateOnScroll>
          <div className='mx-auto mb-16 max-w-3xl text-center'>
            <h1 className='mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
              Showcase Gallery
            </h1>
            <p className='mb-10 text-lg text-gray-300'>
              Explore our revolutionary digital experiences powered by
              blockchain technology.
            </p>
          </div>
        </AnimateOnScroll>

        <ShowcaseItems />
      </div>
    </section>
  );
};

export default ShowcaseGallery;
