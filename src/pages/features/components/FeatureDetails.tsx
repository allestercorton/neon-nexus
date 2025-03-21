import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { FEATURES } from '@/data';

const FeatureDetails = () => {
  return (
    <section className='relative py-20'>
      <div className='absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-3xl'></div>
      <div className='absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl'></div>

      <div className='container relative z-20 mx-auto px-4'>
        <AnimateOnScroll>
          <div className='mx-auto mb-16 max-w-3xl text-center'>
            <h2 className='mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl'>
              Comprehensive Feature Set
            </h2>
            <p className='text-lg text-gray-400'>
              Explore the full range of capabilities that make Neon Nexus the
              most advanced blockchain platform for digital experiences.
            </p>
          </div>
        </AnimateOnScroll>

        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {FEATURES.map((feature, index) => (
            <AnimateOnScroll
              key={feature.id}
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'up' : 'down'}
            >
              <Card className='h-full border border-purple-500/20 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:bg-purple-950/20'>
                <CardHeader>
                  <div className='mb-4'>
                    <feature.icon className={feature.iconClassName} />
                  </div>
                  <CardTitle className='text-xl text-white'>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base text-gray-400'>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureDetails;
