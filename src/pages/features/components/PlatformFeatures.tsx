import AnimateOnScroll from '@/components/AnimateOnScroll';

const PlatformFeatures = () => {
  return (
    <section className='relative py-20'>
      <div className='absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-3xl'></div>

      <div className='container relative z-20 mx-auto px-4'>
        <AnimateOnScroll>
          <div className='mx-auto mb-16 max-w-3xl text-center'>
            <h1 className='mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
              Platform Features
            </h1>

            <p className='mb-10 text-lg text-gray-300'>
              Discover the revolutionary capabilities that make Neon Nexus the
              leading platform for blockchain-powered digital experiences.
            </p>

            <div className='relative mx-auto max-w-4xl'>
              <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-purple-600/20 blur-md'></div>
              <div className='relative overflow-hidden rounded-xl border border-purple-500/20'>
                <img
                  src='https://images.pexels.com/photos/7567606/pexels-photo-7567606.jpeg?auto=compress&cs=tinysrgb&w=1080'
                  alt='Neon Nexus Platform Features'
                  className='w-full object-cover'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
                <div className='absolute bottom-0 left-0 hidden w-full p-6 text-left sm:block'>
                  <h3 className='mb-2 text-xl font-bold text-white md:text-2xl'>
                    Next-Generation Digital Experiences
                  </h3>
                  <p className='text-gray-300'>
                    Powered by blockchain technology and decentralized
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PlatformFeatures;
