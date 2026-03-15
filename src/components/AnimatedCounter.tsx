import { useState, useEffect } from "react";

interface AnimatedCounterProps {
  end: number | string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ end, duration = 2000, className = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    const endValue = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) : end;
    const increment = endValue / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        current = endValue;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  const displayValue = typeof end === 'string' ? end.replace(/\d+/, count.toString()) : count;

  return (
    <span id={`counter-${end}`} className={className}>
      {displayValue}
    </span>
  );
};

export default AnimatedCounter;
