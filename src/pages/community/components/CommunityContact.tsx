import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { COMMUNITY } from '@/data';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const CommunityContact = () => {
  return (
    <AnimateOnScroll delay={0.4}>
      <div className='mx-auto grid max-w-5xl gap-8 md:grid-cols-2'>
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
          <Card className='h-full border border-purple-500/20 bg-black/40 backdrop-blur-sm'>
            <CardHeader>
              <CardTitle className='text-2xl text-white'>
                Community Stats
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              {COMMUNITY.Stats.map((stat) => (
                <div key={stat.id} className='flex items-center gap-4'>
                  <div className='rounded-lg bg-gradient-to-br from-purple-600/20 to-cyan-500/20 p-4'>
                    <stat.icon className={stat.iconStyle} />
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>{stat.name}</p>
                    <p className='text-2xl font-bold text-white'>
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
          <Card className='border border-purple-500/20 bg-black/40 backdrop-blur-sm'>
            <CardHeader>
              <CardTitle className='text-2xl text-white'>Contact Us</CardTitle>
              <CardDescription className='text-gray-400'>
                Have a question? Reach out to our team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className='space-y-4'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  <div className='space-y-2'>
                    <label htmlFor='name' className='text-sm text-gray-300'>
                      Name
                    </label>
                    <Input
                      id='name'
                      type='text'
                      placeholder='Your name'
                      className='border-purple-500/30 bg-black/50 text-white focus:border-r-purple-500'
                      autoComplete='name'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='email' className='text-sm text-gray-300'>
                      Email
                    </label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='Your email'
                      className='border-purple-500/30 bg-black/50 text-white focus:border-r-purple-500'
                      autoComplete='email'
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <label htmlFor='message' className='text-sm text-gray-300'>
                    Message
                  </label>
                  <Textarea
                    id='message'
                    placeholder='Your message'
                    className='min-h-[120px] border-purple-500/30 bg-black/50 text-white focus:border-purple-500'
                  />
                </div>
                <Button className='w-full border-none bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600'>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AnimateOnScroll>
  );
};

export default CommunityContact;
