import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const CommunityHero = () => {
  return (
    <AnimateOnScroll>
      <div className='mx-auto mb-16 max-w-4xl'>
        <div className='relative'>
          <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-purple-600/20 blur-md'></div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className='relative overflow-hidden rounded-xl border border-purple-500/20'
          >
            <img
              src='https://images.pexels.com/photos/8117545/pexels-photo-8117545.jpeg?auto=compress&cs=tinysrgb&w=1080'
              alt='Neon Nexus Community'
              className='w-full object-cover'
              loading='lazy'
            />
            <div className='absolute inset-0 hidden items-end justify-center bg-gradient-to-t from-black/80 via-transparent to-black/40 sm:flex'>
              <div className='max-w-2xl p-6 text-center'>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className='mb-4 text-2xl font-bold text-white md:text-3xl'
                >
                  Join Thousands of Innovators
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className='text-gray-300'
                >
                  Our global community is building the future of digital
                  experiences together. Connect, collaborate, and create with
                  us.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default CommunityHero;
