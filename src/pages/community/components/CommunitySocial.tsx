import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { COMMUNITY } from '@/data';

const CommunitySocial = () => {
  return (
    <AnimateOnScroll delay={0.2}>
      <div className='mx-auto mb-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {COMMUNITY.socials.map((social) => (
          <motion.div
            key={social.id}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className='border border-purple-500/20 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:bg-purple-950/20'>
              <CardHeader className='flex flex-row items-start gap-4'>
                <div className='rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 p-3'>
                  <social.icon className='h-6 w-6 text-white' />
                </div>
                <div>
                  <CardTitle className='text-xl text-white'>
                    {social.name}
                  </CardTitle>
                  <CardDescription className='text-gray-400'>
                    {social.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className='mb-4 text-gray-300'>{social.paragraph}</p>
                <Button className={social.buttonStyle}>
                  {social.buttonName}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimateOnScroll>
  );
};

export default CommunitySocial;
