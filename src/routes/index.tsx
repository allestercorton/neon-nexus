import MainLayout from '@/layouts/MainLayout';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import HomePage from '@/pages/home';
import Features from '@/pages/features';
import Showcase from '@/pages/showcase';
import Roadmap from '@/pages/roadmap';
import Community from '@/pages/community';
import SignIn from '@/pages/sign-in';
import SignUp from '@/pages/sign-up';
import ConnectWallet from '@/pages/connect-wallet';
import NotFound from '@/pages/404';
import { useEffect } from 'react';

const Root = () => {
  const { pathname } = useLocation();

  // Scrolls to top whenever the path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'features',
        element: <Features />,
      },
      {
        path: 'showcase',
        element: <Showcase />,
      },
      {
        path: 'roadmap',
        element: <Roadmap />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'connect-wallet',
        element: <ConnectWallet />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
