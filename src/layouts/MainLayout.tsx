import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageTransition from '@/components/PageTransition';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='min-h-screen overflow-hidden bg-black text-white'>
      <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
      <div className='relative z-10'>
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <Analytics />
      </div>
    </div>
  );
}
