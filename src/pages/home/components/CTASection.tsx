import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Watches when the section comes into view and applies the animation.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className='relative py-20'>
      <div
        ref={sectionRef}
        className='container relative z-20 mx-auto translate-y-10 px-4 opacity-0 transition-all duration-1000'
      >
        <div className='relative mx-auto max-w-5xl'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-600/30 via-cyan-500/20 to-purple-600/30 blur-xl'></div>
          <div className='relative overflow-hidden rounded-2xl border border-purple-500/30 bg-black/60 p-8 backdrop-blur-md md:p-12'>
            <div className='grid items-center gap-8 md:grid-cols-2'>
              <div>
                <h2 className='mb-4 bg-gradient-to-tr from-purple-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl'>
                  Join the Neon Nexus Community
                </h2>

                <p className='mb-6 text-gray-300'>
                  Be among the first to experience the future of digital
                  interactions. Sign up for early access and exclusive updates.
                </p>

                <div className='flex flex-col gap-3 sm:flex-row'>
                  <Input
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    className='border-y-purple-500/30 bg-black/50 text-white focus:border-purple-500'
                    autoComplete='email'
                  />
                  <Button className='whitespace-nowrap border-none bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600'>
                    Get Early Access
                    <ArrowRight size={16} className='ml-2' />
                  </Button>
                </div>

                <p className='mt-3 text-xs text-gray-400'>
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>

              <div className='relative flex h-full items-center justify-center'>
                <div className='relative h-48 w-48 md:h-64 md:w-64'>
                  <div className='absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-purple-600/80 to-cyan-500/80'></div>
                  <div className='absolute inset-2 flex items-center justify-center overflow-hidden rounded-full bg-black'>
                    <div className="absolute h-full w-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-30"></div>
                    <div className='relative z-10 p-4 text-center'>
                      <div className='mb-2 text-4xl font-bold text-white md:text-5xl'>
                        2.5K+
                      </div>
                      <div className='text-sm text-gray-300'>
                        Early Adopters
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
