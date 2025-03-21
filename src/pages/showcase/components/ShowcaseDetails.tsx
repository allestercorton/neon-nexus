import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Icons } from '@/components/Icons';
import { SHOWCASE } from '@/data';

const ShowcaseDetails = () => {
  const [activeTab, setActiveTab] = useState('virtual-worlds');
  const filteredItems = SHOWCASE.filter((item) => item.isFeatured);

  const handleNext = () => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.slug === activeTab,
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveTab(filteredItems[nextIndex].slug);
  };

  const handlePrev = () => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.slug === activeTab,
    );
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveTab(filteredItems[prevIndex].slug);
  };

  return (
    <section className='relative py-20'>
      <div className='absolute right-1/4 top-1/2 h-[600px] w-[600px] rounded-full bg-purple-700/10 blur-3xl'></div>
      <div className='absolute bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl'></div>

      <div className='container relative z-20 mx-auto px-4'>
        <AnimateOnScroll>
          <div className='mx-auto mb-16 max-w-3xl text-center'>
            <h2 className='mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl'>
              Experience The Future
            </h2>
            <p className='text-lg text-gray-300'>
              Discover the revolutionary digital experiences that Neon Nexus
              enables through blockchain technology.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Tabs
            defaultValue='virtual-worlds'
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <div className='mb-8 flex items-center justify-center sm:justify-between'>
              <TabsList className='hidden border border-purple-500/20 bg-black/40 backdrop-blur-sm sm:block'>
                {filteredItems.map((item) => (
                  <TabsTrigger
                    key={item.id}
                    value={item.slug}
                    className='data-[state=active]:bg-purple-600 data-[state=active]:text-white'
                  >
                    {item.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className='flex gap-2'>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={handlePrev}
                  className='border-purple-500/20 bg-purple-950/30 text-white hover:bg-purple-700/30 hover:text-white'
                >
                  <Icons.chevronLeft className='h-4 w-4' />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={handleNext}
                  className='border-purple-500/20 bg-purple-950/30 text-white hover:bg-purple-700/30 hover:text-white'
                >
                  <Icons.chevronRight className='h-4 w-4' />
                </Button>
              </div>
            </div>

            {filteredItems.map((item) => (
              <TabsContent key={item.id} value={item.slug} className='mt-0'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className='grid gap-8 text-white md:grid-cols-2'
                >
                  <div className='order-2 md:order-1'>
                    <h3 className='mb-4 text-2xl font-bold text-white'>
                      {item.name}
                    </h3>
                    <p className='mb-6 text-gray-300'>{item.description}</p>

                    <div className='mb-8'>
                      <h4 className='mb-3 text-sm uppercase text-purple-400'>
                        Key Features
                      </h4>
                      <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
                        {item.features.map((feature, index) => (
                          <li key={index} className='flex items-center gap-2'>
                            <div className='h-2 w-2 rounded-full bg-cyan-400'></div>
                            <span className='text-gray-300'>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className='border-none bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600'>
                      Explore {item.name}
                    </Button>
                  </div>

                  <div className='order-1 md:order-2'>
                    <div className='relative overflow-hidden rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm'>
                      <div className='absolute inset-0 z-10 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-500/20'></div>
                      <motion.img
                        src={item.image || '/placeholder.svg'}
                        alt={item.name}
                        loading='lazy'
                        className='aspect-[4/3] w-full object-cover'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ShowcaseDetails;
