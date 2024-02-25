import React from 'react';
import Headermain from './components/header';
import AnimatedCursor from './hooks/AnimatedCursor';
import AppRoutes from './routes';

export default function App() {
  return (
    <div className="cursor__dot">
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="255, 255 ,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
      <Headermain />
      <AppRoutes />
    </div>
  );
}
