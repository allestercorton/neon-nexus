import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icons } from '@/components/Icons';

const RoadmapTimeline = () => {
  return (
    <div className='relative mx-auto max-w-4xl'>
      <div className='absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-purple-600 to-cyan-500'></div>

      <div className='relative z-10'>
        {/* Phase 1 */}
        <AnimateOnScroll>
          <div className='mb-16 flex flex-col items-center gap-8 md:flex-row md:items-start'>
            <div className='order-2 md:order-1 md:w-1/2 md:pr-12 md:text-right'>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className='border border-purple-500/20 bg-black/40 backdrop-blur-sm'>
                  <CardHeader>
                    <div className='mb-2 flex items-center gap-2 md:justify-end'>
                      <Icons.checkCircle className='h-5 w-5 text-gray-500' />
                      <span className='text-sm font-medium text-green-500'>
                        Completed
                      </span>
                    </div>
                    <CardTitle className='text-xl text-white'>
                      Phase 1: Foundation
                    </CardTitle>
                    <CardDescription className='text-gray-400'>
                      Q1 2023 - Q2 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start gap-2 md:justify-end'>
                        <span>Core platform architecture</span>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                      </li>
                      <li className='flex items-start gap-2 md:justify-end'>
                        <span>Blockchain integration</span>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                      </li>
                      <li className='flex items-start gap-2 md:justify-end'>
                        <span>Security framework implementation</span>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                      </li>
                      <li className='flex items-start gap-2 md:justify-end'>
                        <span>Alpha testing with partners</span>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <div className='order-1 flex items-center justify-center md:order-2'>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-500'>
                  <span className='font-bold text-white'>1</span>
                </div>
              </motion.div>
            </div>
            <div className='order-3 hidden md:block md:w-1/2'></div>
          </div>
        </AnimateOnScroll>

        {/* Phase 2 */}
        <AnimateOnScroll delay={0.2}>
          <div className='mb-16 flex flex-col items-center gap-8 md:flex-row md:items-start'>
            <div className='order-1 hidden md:block md:w-1/2'></div>

            <div className='order-1 flex items-center justify-center md:order-2'>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-500'>
                  <span className='font-bold text-white'>2</span>
                </div>
              </motion.div>
            </div>
            <div className='order-2 md:order-3 md:w-1/2 md:pl-12'>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className='border border-purple-500/20 bg-black/40 backdrop-blur-sm'>
                  <CardHeader>
                    <div className='mb-2 flex items-center gap-2'>
                      <Icons.clock className='h-5 w-5 text-purple-400' />
                      <span className='text-sm font-medium text-purple-400'>
                        In Progress
                      </span>
                    </div>
                    <CardTitle className='text-xl text-white'>
                      Phase 2: Expansion
                    </CardTitle>
                    <CardDescription className='text-gray-400'>
                      Q3 2023 - Q1 2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start gap-2'>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                        <span>Virtual worlds marketplace</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                        <span>Digital collectibles platform</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                        <span>DeFi integration</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                        <span>Beta launch to early adopters</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Phase 3 */}
        <AnimateOnScroll delay={0.4}>
          <div className='mb-16 flex flex-col items-center gap-8 md:flex-row md:items-start'>
            <div className='order-2 md:order-1 md:w-1/2 md:pr-12 md:text-right'>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className='border border-purple-500/20 bg-black/40 backdrop-blur-sm'>
                  <CardHeader>
                    <div className='mb-2 flex items-center gap-2 md:justify-end'>
                      <Icons.checkCircle className='h-5 w-5 text-gray-500' />
                      <span className='text-sm font-medium text-gray-500'>
                        Upcoming
                      </span>
                    </div>
                    <CardTitle className='text-xl text-white'>
                      Phase 3: Ecosystem
                    </CardTitle>
                    <CardDescription className='text-gray-400'>
                      Q2 2024 - Q4 2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start gap-2 md:justify-end'>
                        <span>Developer SDK release</span>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                      </li>
                      <li className='flex items-start gap-2 md:justify-end'>
                        <span>Cross-platform integration</span>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                      </li>
                      <li className='flex items-start gap-2 md:justify-end'>
                        <span>Community governance implementation</span>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                      </li>
                      <li className='flex items-start gap-2 md:justify-end'>
                        <span>Public launch</span>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <div className='order-1 flex items-center justify-center md:order-2'>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-500'>
                  <span className='font-bold text-white'>3</span>
                </div>
              </motion.div>
            </div>
            <div className='order-3 hidden md:block md:w-1/2'></div>
          </div>
        </AnimateOnScroll>

        {/* Phase 4 */}
        <AnimateOnScroll delay={0.6}>
          <div className='mb-16 flex flex-col items-center gap-8 md:flex-row md:items-start'>
            <div className='order-1 hidden md:block md:w-1/2'></div>

            <div className='order-1 flex items-center justify-center md:order-2'>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1.5,
                }}
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-500'>
                  <span className='font-bold text-white'>4</span>
                </div>
              </motion.div>
            </div>
            <div className='order-2 md:order-3 md:w-1/2 md:pl-12'>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className='border border-purple-500/20 bg-black/40 backdrop-blur-sm'>
                  <CardHeader>
                    <div className='mb-2 flex items-center gap-2'>
                      <Icons.clock className='h-5 w-5 text-gray-400' />
                      <span className='text-sm font-medium text-gray-400'>
                        Future
                      </span>
                    </div>
                    <CardTitle className='text-xl text-white'>
                      Phase 4: Global Expansion
                    </CardTitle>
                    <CardDescription className='text-gray-400'>
                      2025 and Beyond
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start gap-2'>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                        <span>Enterprise solutions</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                        <span>Global partnerships</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                        <span>Advanced AI integration</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400'></div>
                        <span>Decentralized autonomous organization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
