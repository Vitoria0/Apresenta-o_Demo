import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const AnimatedComponent = ({ children, direction }) => {
  const { ref, inView, entry } = useInView({ threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else if (entry && !inView) {
      setIsVisible(false);
    }
  }, [inView, entry]);

  const getAnimationStyles = () => {
    if (!isVisible) {
      return direction === 'left'
        ? { transform: 'translateX(-300px)', opacity: 0, transition: 'all 0.8s ease-in-out', width: '100%' }
        : { transform: 'translateX(300px)', opacity: 0, transition: 'all 0.8s ease-in-out', width: '100%' };
    }

    return { transform: 'translateX(0)', opacity: 1, transition: 'all 0.8s ease-in-out', width: '100%' };
  };

  return (
    <div ref={ref} style={getAnimationStyles()}>
      {children}
    </div>
  );
};
