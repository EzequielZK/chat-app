'use client';

import { useState } from 'react';
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register';
import { ScreenType } from './types';

export default function LoginView() {
  const [screen, setScreen] = useState<ScreenType>('login');

  const handleScreen = (screen: ScreenType) => {
    setScreen(screen);
  };

  const screens = {
    login: <LoginComponent handleScreen={handleScreen} />,
    register: <RegisterComponent handleScreen={handleScreen} />,
  };

  const selectedScreen = screens[screen];

  return (
    <div className='flex items-center w-full h-full'>
      <div className='p-8 w-2/3 h-full flex flex-col justify-center bg-background gap-4'>
        <p className='text-6xl text-primary'>ChatApp</p>
        <p className='text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ullamcorper magna sapien, eu pharetra augue viverra sit amet.
          Suspendisse iaculis est ante, ut consequat dui aliquet quis. Integer
          nec massa dictum, dapibus justo et, tempor magna. Vestibulum ultrices
          eget nisi non pretium. Proin dapibus felis eu mollis dapibus. Mauris
          ut mi lacus. Nulla facilisi. Etiam finibus nunc pretium libero
          volutpat dictum. Morbi molestie nulla dui, quis ultricies libero
          vestibulum eget. Morbi lacinia justo eu nibh bibendum gravida. Nulla
          ipsum elit, ornare nec eleifend quis, ultricies vel ipsum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='text-primary-foreground p-8 bg-primary h-full w-1/3 flex flex-col items-center justify-center gap-6 shadow-md'>
        {selectedScreen}
      </div>
    </div>
  );
}
