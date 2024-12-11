import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialType } from './types';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: TestimonialType;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
}

export function TestimonialCard({ 
  testimonial,
  onTouchStart,
  onTouchMove,
  onTouchEnd
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 touch-pan-y max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-shrink-0 md:sticky md:top-0">
          <motion.div 
            className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary mx-auto md:mx-0"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="flex-1 min-w-0">
          <Quote className="h-6 w-6 md:h-8 md:w-8 text-primary/80 mb-4" />
          <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-4 line-clamp-none">
            {testimonial.content}
          </p>
          <div className="text-center md:text-left">
            <p className="text-white font-semibold text-sm md:text-base">
              {testimonial.author}
            </p>
            <p className="text-gray-400 text-sm">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}