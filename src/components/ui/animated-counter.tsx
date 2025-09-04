
'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({ end, duration = 2, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const [start, setStart] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setStart(true);
    }
  }, [inView]);

  return (
    <span ref={ref}>
      {start ? <CountUp start={0} end={end} duration={duration} prefix={prefix} suffix={suffix} /> : '0'}
    </span>
  );
}
