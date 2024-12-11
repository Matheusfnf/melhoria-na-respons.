import { useState, useEffect, useCallback, useRef } from 'react';

export function useTestimonialTimer(totalItems: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 5000);
  }, [totalItems]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return totalItems - 1;
      if (nextIndex >= totalItems) return 0;
      return nextIndex;
    });
    startTimer(); // Reset timer when user interacts
  }, [totalItems, startTimer]);

  const jumpToIndex = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    startTimer(); // Reset timer when user interacts
  }, [currentIndex, startTimer]);

  return {
    currentIndex,
    direction,
    paginate,
    jumpToIndex
  };
}