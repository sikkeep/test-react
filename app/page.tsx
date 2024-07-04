// pages/index.tsx
'use client';

import React from 'react';
import Home from '@/components/Home';
import { Toaster } from 'sonner';


const IndexPage: React.FC = () => {
  return (
    <>
      <Home/>
      <Toaster/>
    </>
  );
};

export default IndexPage;