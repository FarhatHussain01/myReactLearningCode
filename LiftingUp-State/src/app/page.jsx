'use client'
import React, { useState } from 'react';
import ChildComponentA from '@/app/components/childA';
import ChildComponentB from '@/app/components/childB';

const page = () => {
  // State to be lifted up
  const [sharedState, setSharedState] = useState('');

  // Callback function to update the shared state
  const updateSharedState = (newValue) => {
    setSharedState(newValue);
  };

  return (
    <div>
      <ChildComponentA updateSharedState={updateSharedState} />
      <ChildComponentB sharedState={sharedState} />
    </div>
  );
};

export default page;
