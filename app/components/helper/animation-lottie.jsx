"use client"

import dynamic from 'next/dynamic';

// Dynamically import the Lottie component with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div style={{ width: '95%', height: '100%' }}></div>,
});

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;