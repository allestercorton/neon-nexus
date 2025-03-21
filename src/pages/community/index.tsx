import AnimateOnScroll from '@/components/AnimateOnScroll';
import CommunityHero from './components/CommunityHero';
import CommunitySocial from './components/CommunitySocial';
import CommunityContact from './components/CommunityContact';

export default function Community() {
  return (
    <section className='relative py-20'>
      <div className='absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-3xl'></div>

      <div className='container relative z-20 mx-auto px-4'>
        <AnimateOnScroll>
          <div className='mx-auto mb-16 max-w-3xl text-center'>
            <h1 className='mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
              Join Our Community
            </h1>
            <p className='text-lg text-gray-300'>
              Connect with like-minded individuals and be part of the Neon Nexus
              ecosystem.
            </p>
          </div>
        </AnimateOnScroll>

        <CommunityHero />
        <CommunitySocial />
        <CommunityContact />
      </div>
    </section>
  );
}
