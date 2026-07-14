"use client";

import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { Methods } from './Methods';
import { MethodsItem } from './MethodsItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/services',
    element: <Methods />,
  },
  {
    path: '/services/:method',
    element: <MethodsItem />,
  },
]);

export default router;