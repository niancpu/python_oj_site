
import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

interface AuthSuccessPageProps {
  onEnterApp: () => void;
}

const AuthSuccessPage: React.FC<AuthSuccessPageProps> = ({ onEnterApp }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 1,
  };

  const blob1X = useSpring(0, springConfig);
  const blob1Y = useSpring(0, springConfig);
  const blob2X = useSpring(0, springConfig);
  const blob2Y = useSpring(0, springConfig);
  const blob3X = useSpring(0, springConfig);
  const blob3Y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        blob1X.set(x);
        blob1Y.set(y);
        blob2X.set(x);
        blob2Y.set(y);
        blob3X.set(x);
        blob3Y.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [blob1X, blob1Y, blob2X, blob2Y, blob3X, blob3Y]);

  const title = "Welcome to wnz's OJ!".split(" ");

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#F8F9FA] flex items-center justify-center"
      style={{ fontFamily: 'Inter, Roboto, sans-serif' }}
    >
      {/* Fluid Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-[#4285F4] rounded-full blur-3xl"
        style={{ x: blob1X, y: blob1Y, opacity: 0.5, top: -150, left: -150 }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-[#4285F4] rounded-full blur-3xl"
        style={{ x: blob2X, y: blob2Y, opacity: 0.3, bottom: -100, right: -100 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-[#4285F4] rounded-full blur-3xl"
        style={{ x: blob3X, y: blob3Y, opacity: 0.2, bottom: 50, left: 50 }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      />

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className="relative z-10 w-full max-w-md mx-4 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl shadow-gray-300/20 p-12"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          {title.map((el, i) => (
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 12, delay: i * 0.1 }}
              key={i}
              className="inline-block"
            >
              {el}{' '}
            </motion.span>
          ))}
        </h1>

        {/* Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: title.length * 0.1 }}
          whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 200, damping: 10 } }}
          whileTap={{ scale: 0.9 }}
          onClick={onEnterApp}
          className="w-full px-8 py-4 bg-[#4285F4] rounded-full text-white font-semibold text-lg"
        >
          Enter
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AuthSuccessPage;
