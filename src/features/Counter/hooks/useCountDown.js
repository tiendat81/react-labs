import { useEffect, useState } from 'react';

export default function useCountDown({ initialSeconds, onFinished }) {
  const [seconds, setSecond] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((preSecond) => {
        const nextSecond = preSecond - 1;

        if (nextSecond <= 0) {
          clearInterval(interval);
          return 0;
        }
        return nextSecond;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return seconds;
}
