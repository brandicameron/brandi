import { useState, useEffect } from 'react';

export function useIsScrolling() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 700);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleScroll = () => {
    let scrolling;
    window.clearTimeout(scrolling);
    setIsScrolling(true);

    // Run after scrolling ends
    scrolling = setTimeout(() => {
      setIsScrolling(false);
    }, 600);
  };

  return { isScrolling };
}
