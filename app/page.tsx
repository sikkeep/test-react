// pages/index.tsx
'use client';

import React from 'react';
import Home from '../components/Home';


const IndexPage: React.FC = () => {
  const formProps = {
    classDisplay: 'someClass',
    label: 'someLabel'
  };
  return (
  <>
    <Home />
  </>  
  );
};

export default IndexPage;