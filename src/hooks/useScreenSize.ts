import { useEffect, useState } from 'react';

export function useScreenSize() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();

    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return Number(width);
}
