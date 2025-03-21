import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';

const SignInForm = () => {
  return (
    <AnimateOnScroll>
      <div className='mx-auto max-w-md'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className='border border-purple-500/20 bg-black/40 backdrop-blur-sm'>
            <CardHeader className='text-center'>
              <CardTitle className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent'>
                Sign In to Neon Nexus
              </CardTitle>
              <CardDescription className='text-gray-300'>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue='email' className='w-full'>
                <TabsList className='mb-6 grid grid-cols-2 border border-purple-500/20 bg-black/40'>
                  <TabsTrigger
                    value='email'
                    className='data-[state=active]:bg-purple-600 data-[state=active]:text-white'
                  >
                    Email
                  </TabsTrigger>
                  <TabsTrigger
                    value='wallet'
                    className='data-[state=active]:bg-purple-600 data-[state=active]:text-white'
                  >
                    Wallet
                  </TabsTrigger>
                </TabsList>

                <TabsContent value='email'>
                  <form className='space-y-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='email' className='text-gray-300'>
                        Email
                      </Label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='Enter your email'
                        className='border-purple-500/30 bg-black/50 text-white focus:border-purple-500'
                        autoComplete='email'
                      />
                    </div>
                    <div className='space-y-2'>
                      <div className='flex items-center justify-between'>
                        <Label htmlFor='password' className='text-gray-300'>
                          Password
                        </Label>
                        <Link
                          to='#'
                          className='text-xs text-purple-400 hover:text-purple-300'
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id='password'
                        type='password'
                        placeholder='Enter your password'
                        className='border-purple-500/30 bg-black/50 text-white focus:border-purple-500'
                        autoComplete='current-password'
                      />
                    </div>
                    <Button className='w-full border-none bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600'>
                      Sign In
                    </Button>
                  </form>

                  <div className='relative my-6'>
                    <div className='absolute inset-0 flex items-center'>
                      <div className='w-full border-t border-purple-500/20'></div>
                    </div>
                    <div className='relative flex justify-center text-xs'>
                      <span className='bg-black px-2 text-gray-400'>
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-4'>
                    <Button
                      variant='outline'
                      className='border-purple-500/30 bg-black text-white hover:bg-purple-950/30 hover:text-white'
                    >
                      <Icons.github className='mr-2 h-4 w-4' />
                      GitHub
                    </Button>
                    <Button
                      variant='outline'
                      className='border-purple-500/30 bg-black text-white hover:bg-purple-950/30 hover:text-white'
                    >
                      <Icons.github className='mr-2 h-4 w-4' />
                      Discord
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value='wallet'>
                  <div className='space-y-4 text-center'>
                    <div className='rounded-lg border border-purple-500/20 bg-black/30 p-6'>
                      <p className='mb-4 text-gray-300'>
                        Connect your blockchain wallet to sign in securely
                        without a password.
                      </p>
                      <Link to='/connect-wallet'>
                        <Button className='border-none bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600'>
                          Connect Wallet
                        </Button>
                      </Link>
                    </div>
                    <p className='text-xs text-gray-400'>
                      Secure, passwordless authentication using blockchain
                      technology.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className='flex flex-col space-y-4'>
              <div className='text-center text-sm text-gray-400'>
                Don't have an account?{' '}
                <Link
                  to='/sign-up'
                  className='text-purple-400 hover:text-purple-300'
                >
                  Create one
                </Link>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </AnimateOnScroll>
  );
};

export default SignInForm;
