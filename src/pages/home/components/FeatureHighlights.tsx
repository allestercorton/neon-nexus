import { Link } from 'react-router-dom';
import { FEATURES } from '@/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const FeatureHighlights = () => {
  return (
    <section className='relative py-20'>
      <div className='absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-3xl'></div>

      <div className='container relative z-20 mx-auto px-4'>
        <AnimateOnScroll>
          <div className='mx-auto mb-16 max-w-3xl text-center'>
            <h2 className='mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl'>
              Revolutionary Technology
            </h2>
            <p className='text-lg text-gray-300'>
              Neon Nexus combines advanced blockchain technology with immersive
              digital experiences to create a platform that's both powerful and
              accessible.
            </p>
          </div>
        </AnimateOnScroll>

        <div className='mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3'>
          {FEATURES.filter((feature) => feature.isFeatured).map(
            (highlight, index) => (
              <AnimateOnScroll key={highlight.id} delay={index * 0.2}>
                <Card className='h-full border border-purple-500/20 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:bg-purple-950/20'>
                  <CardHeader>
                    <div className='mb-4'>
                      <highlight.icon className={highlight.iconClassName} />
                    </div>
                    <CardTitle className='text-xl text-white'>
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-base text-gray-400'>
                      {highlight.featuredDescription}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ),
          )}
        </div>

        <AnimateOnScroll delay={0.4}>
          <div className='text-center'>
            <Link to='/features'>
              <Button
                variant='outline'
                className='border-purple-500/50 bg-black text-purple-400 hover:bg-purple-800/20 hover:text-white hover:text-white/80'
              >
                Explore All Features
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FeatureHighlights;
