import { useState, useEffect } from 'react';

export function useFoundBug() {
  const [bugsFound, setBugsFound] = useState(0);
  const [clickSound, setClickSound] = useState(null);

  useEffect(() => {
    setClickSound(new Audio('./sounds/coin.wav'));
  }, []);

  const handleFoundBug = () => {
    setBugsFound((prev) => prev + 1);
    clickSound.volume = 0.1;
    clickSound.play();
  };

  console.log(bugsFound);

  return { handleFoundBug, bugsFound };
}
