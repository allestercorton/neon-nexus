import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { CONNECT_WALLET } from '@/data';

const ConnectWalletOptions = () => {
  return (
    <AnimateOnScroll>
      <div className='mx-auto max-w-2xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className='mb-8 border border-purple-500/20 bg-black/40 backdrop-blur-sm'>
            <CardHeader className='text-center'>
              <CardTitle className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent'>
                Connect Your Wallet
              </CardTitle>
              <CardDescription className='text-gray-300'>
                Choose your preferred wallet to connect to Neon Nexus
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4'>
                {CONNECT_WALLET.wallets.map((wallet) => (
                  <motion.div
                    key={wallet.id}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      className={`flex h-auto w-full items-center justify-between border border-purple-500/30 py-4 text-white ${
                        wallet.isPopular
                          ? 'bg-gradient-to-r from-purple-600/20 to-cyan-500/20 hover:from-purple-600/30 hover:to-cyan-500/30'
                          : 'bg-black/50 hover:bg-purple-950/20'
                      }`}
                    >
                      <div className='flex items-center'>
                        <div
                          className={`m-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${wallet.initialBgColor}`}
                        >
                          <span className='font-bold text-white'>
                            {wallet.initial}
                          </span>
                        </div>
                        <span className='font-medium'>{wallet.name}</span>
                      </div>
                      {wallet.isPopular && (
                        <span className='rounded-full bg-purple-500/20 px-2 py-1 text-xs'>
                          Popular
                        </span>
                      )}
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className='mt-6 text-center'>
                <p className='text-sm text-gray-400'>
                  New to blockchain wallets?{' '}
                  <Link
                    to='#'
                    className='text-purple-400 hover:text-purple-300'
                  >
                    Learn more
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <AnimateOnScroll delay={0.3}>
          <div className='grid gap-4 md:grid-cols-3'>
            {CONNECT_WALLET.features.map((feature) => (
              <motion.div
                key={feature.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className='h-full'
              >
                <Card className='flex h-full flex-col border border-purple-500/20 bg-black/40 backdrop-blur-sm'>
                  <CardHeader className='flex flex-row items-start gap-4 pb-2'>
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                    <CardTitle className='text-lg text-white'>
                      {feature.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-gray-400'>{feature.paragraph}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </AnimateOnScroll>
  );
};

export default ConnectWalletOptions;
