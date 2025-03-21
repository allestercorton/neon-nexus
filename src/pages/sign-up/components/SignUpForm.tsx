import { useState } from 'react';
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
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import { Checkbox } from '@/components/ui/checkbox';

const SignUpForm = () => {
  const [step, setStep] = useState(1);

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
                Create Your Neon Nexus Account
              </CardTitle>
              <CardDescription className='text-gray-300'>
                Join the future of digital experiences
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
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <form className='space-y-4'>
                        <div className='space-y-2'>
                          <Label htmlFor='name' className='text-gray-300'>
                            Full Name
                          </Label>
                          <Input
                            id='name'
                            type='text'
                            placeholder='Enter your full name'
                            className='border-purple-500/30 bg-black/50 text-white focus:border-purple-500'
                            autoComplete='name'
                          />
                        </div>

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
                          <Label htmlFor='password' className='text-gray-300'>
                            Password
                          </Label>
                          <Input
                            id='password'
                            type='password'
                            placeholder='Create a password'
                            className='border-purple-500/30 bg-black/50 text-white focus:border-purple-500'
                            autoComplete='new-password'
                          />
                          <p className='text-xs text-gray-400'>
                            Password must be at least 8 characters with a number
                            and special character
                          </p>
                        </div>
                        <div className='space-y-2'>
                          <Label
                            htmlFor='confirm-password'
                            className='text-gray-300'
                          >
                            Confirm Password
                          </Label>
                          <Input
                            id='confirm-password'
                            type='password'
                            placeholder='Confirm your password'
                            className='border-purple-500/30 bg-black/50 text-white focus:border-purple-500'
                            autoComplete='new-password'
                          />
                        </div>
                        <div className='flex items-center space-x-2'>
                          <Checkbox
                            id='terms'
                            className='border-purple-500/30 bg-black/50 text-white focus:border-purple-500'
                          />
                          <Label
                            htmlFor='terms'
                            className='text-sm leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                          >
                            I agree to the{' '}
                            <Link
                              to='#'
                              className='text-purple-400 hover:text-purple-300'
                            >
                              Terms of Service{' '}
                            </Link>
                            and{' '}
                            <Link
                              to='#'
                              className='text-purple-400 hover:text-purple-300'
                            >
                              Privacy Policy
                            </Link>
                          </Label>
                        </div>
                        <Button
                          className='w-full border-none bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600'
                          onClick={(e) => {
                            e.preventDefault();
                            setStep(2);
                          }}
                        >
                          Continue
                        </Button>
                      </form>

                      <div className='relative my-6'>
                        <div className='absolute inset-0 flex items-center'>
                          <div className='w-full border-t border-purple-500/20'></div>
                        </div>
                        <div className='relative flex justify-center text-xs'>
                          <span className='bg-black px-2 text-gray-400'>
                            Or sign up with
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
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='space-y-6'
                    >
                      <div className='text-center'>
                        <div className='mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-500/20'>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          >
                            <svg
                              className='h-8 w-8 text-purple-400'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </motion.div>
                        </div>
                        <h3 className='mb-2 text-xl font-bold text-white'>
                          Verify Your Email
                        </h3>
                        <p className='mb-4 text-gray-300'>
                          We've send a verification link to your email address.
                          Please check your inbox and click the link to complete
                          your registration.
                        </p>
                        <p className='mb-6 text-sm text-gray-400'>
                          Didn't receive an email? Check your spam folder or
                          click below to resend.
                        </p>
                        <Button
                          variant='outline'
                          className='border-purple-500/30 bg-black text-purple-400 hover:bg-purple-950/30 hover:text-white'
                        >
                          Resend Verification Email
                        </Button>
                      </div>
                    </motion.div>
                  )}
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
            {step === 1 && (
              <CardFooter className='flex flex-col space-y-4'>
                <div className='text-center text-sm text-gray-400'>
                  Already have an account?{' '}
                  <Link
                    to='/sign-up'
                    className='text-purple-400 hover:text-purple-300'
                  >
                    Sign in
                  </Link>
                </div>
              </CardFooter>
            )}
          </Card>
        </motion.div>
      </div>
    </AnimateOnScroll>
  );
};

export default SignUpForm;
