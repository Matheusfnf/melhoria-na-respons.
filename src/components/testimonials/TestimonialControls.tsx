import React from 'react';

interface TestimonialControlsProps {
  currentIndex: number;
  totalTestimonials: number;
  onDotClick: (index: number) => void;
}

export function TestimonialControls({
  currentIndex,
  totalTestimonials,
  onDotClick,
}: TestimonialControlsProps) {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: totalTestimonials }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-8 h-1 rounded-full transition-all duration-300 ${
            index === currentIndex ? 'bg-primary w-12' : 'bg-white/30'
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  );
}