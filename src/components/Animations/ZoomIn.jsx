import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const ZoomIn = ({ children, direction }) => {
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
      return direction === 'in'
        ? { transform: 'scale(0.5)', opacity: 0, transition: 'all 0.3s ease-in-out', width: '100%' }
        : { transform: 'scale(1.5)', opacity: 0, transition: 'all 0.3s ease-in-out', width: '100%' };
    }

    return { transform: 'scale(1)', opacity: 1, transition: 'all 0.3s ease-in-out', width: '100%' };
  };

  return (
    <div ref={ref} style={getAnimationStyles()}>
      {children}
    </div>
  );
};
