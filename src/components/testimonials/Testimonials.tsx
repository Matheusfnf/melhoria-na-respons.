import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialControls } from './TestimonialControls';
import { testimonialData } from './types';
import { useTestimonialGestures } from './useTestimonialGestures';
import { useTestimonialTimer } from './useTestimonialTimer';

export function Testimonials() {
  const {
    currentIndex,
    direction,
    paginate,
    jumpToIndex
  } = useTestimonialTimer(testimonialData.length);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTestimonialGestures(
    () => paginate(1),  // Swipe left
    () => paginate(-1)  // Swipe right
  );

  return (
    <div className="bg-gray-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Palavras de Nossos Parceiros
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Experiências reais de quem já transformou sua produção com nossas soluções
            </p>
          </motion.div>
        </div>

        <div className="relative min-h-[450px] pb-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full cursor-grab active:cursor-grabbing"
            >
              <TestimonialCard 
                testimonial={testimonialData[currentIndex]}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 w-full">
            <TestimonialControls
              currentIndex={currentIndex}
              totalTestimonials={testimonialData.length}
              onDotClick={jumpToIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}