import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { SHOWCASE } from '@/data';

const ShowcaseItems = () => {
  return (
    <div className='mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {SHOWCASE.map((item, index) => (
        <AnimateOnScroll key={item.id} delay={0.1 * (index + 1)}>
          <div className='group relative aspect-square overflow-hidden rounded-xl border border-purple-500/20'>
            <motion.img
              src={item.image}
              alt={item.name}
              className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
              whileHover={{ scale: 1.05 }}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
            <div className='absolute bottom-0 left-0 w-full translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0'>
              <h3 className='text-lg font-bold text-white'>{item.name}</h3>
              <p className='text-sm text-gray-300'>{item.headline}</p>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
};

export default ShowcaseItems;
