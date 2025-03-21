import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className='relative overflow-hidden py-20 md:py-32'>
      <div className='absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-3xl'></div>
      <div className='absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl'></div>

      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 backdrop-blur-sm'>
            <p className='flex items-center gap-2 text-sm'>
              <Icons.zap size={14} className='text-purple-400' />
              <span>The future of digital experiences is here</span>
            </p>
          </div>

          <h1
            className={`mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent transition-all duration-1000 md:text-6xl lg:text-7xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            Immersive Digital Experiences Powered by Blockchain
          </h1>

          <p
            className={`mx-auto mb-8 max-w-2xl text-lg text-gray-300 transition-all delay-300 duration-1000 md:text-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            Neon Nexus bridges the gap between virtual and reality, creating a
            seamless ecosystem where digital assets have real-world utility.
          </p>

          <div
            className={`flex flex-col justify-center gap-4 transition-all delay-500 duration-1000 sm:flex-row ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <Button className='border-none bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-6 text-lg text-white hover:from-purple-700 hover:to-cyan-600'>
              Get Started
            </Button>
            <Button
              variant='outline'
              className='border-purple-500/50 bg-black px-8 py-6 text-lg text-purple-400 hover:bg-purple-800/20 hover:text-white hover:text-white/80'
            >
              <span>Explore Demos</span>
              <Icons.arrowRight size={18} className='ml-2' />
            </Button>
          </div>
        </div>

        <div
          className={`relative mx-auto mt-16 max-w-5xl transition-all delay-700 duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-purple-600/20 blur-md'></div>
          <div className='relative overflow-hidden rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm'>
            <div className='relative aspect-[16/9] w-full bg-gradient-to-br from-black via-purple-950/40 to-black'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <video
                  src='/blockchain.mp4'
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='h-full w-full object-cover opacity-90'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
