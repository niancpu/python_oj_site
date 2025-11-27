import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface AuthSuccessPageProps {
  onEnterApp: () => void;
}

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocityX: number;
  velocityY: number;
}

const AuthSuccessPage: React.FC<AuthSuccessPageProps> = ({ onEnterApp }) => {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRippling, setIsRippling] = useState(false);

  // Initialize lava lamp orbs
  useEffect(() => {
    const initialOrbs: Orb[] = [
      {
        id: 1,
        x: 20,
        y: 30,
        size: 400,
        color: 'rgba(66, 133, 244, 0.3)', // Google Blue
        velocityX: 0.3,
        velocityY: 0.2,
      },
      {
        id: 2,
        x: 60,
        y: 60,
        size: 500,
        color: 'rgba(156, 39, 176, 0.25)', // Soft Purple
        velocityX: -0.2,
        velocityY: 0.3,
      },
      {
        id: 3,
        x: 80,
        y: 20,
        size: 350,
        color: 'rgba(0, 188, 212, 0.25)', // Light Teal
        velocityX: 0.25,
        velocityY: -0.25,
      },
      {
        id: 4,
        x: 40,
        y: 70,
        size: 300,
        color: 'rgba(103, 58, 183, 0.2)', // Deep Purple
        velocityX: -0.15,
        velocityY: -0.2,
      },
    ];
    setOrbs(initialOrbs);
  }, []);

  // Animate orbs
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((orb) => {
          let newX = orb.x + orb.velocityX;
          let newY = orb.y + orb.velocityY;
          let newVelocityX = orb.velocityX;
          let newVelocityY = orb.velocityY;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newVelocityX = -orb.velocityX;
            newX = newX <= 0 ? 0 : 100;
          }
          if (newY <= 0 || newY >= 100) {
            newVelocityY = -orb.velocityY;
            newY = newY <= 0 ? 0 : 100;
          }

          return {
            ...orb,
            x: newX,
            y: newY,
            velocityX: newVelocityX,
            velocityY: newVelocityY,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleButtonClick = () => {
    setIsRippling(true);
    setTimeout(() => {
      onEnterApp();
    }, 300);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 flex items-center justify-center"
      style={{ fontFamily: 'Inter, "Google Sans", Roboto, sans-serif' }}
    >
      {/* Lava Lamp Background */}
      <div className="absolute inset-0 overflow-hidden">
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full blur-3xl"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: orb.color,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Material You Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          mass: 1.2,
        }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="backdrop-blur-2xl bg-white/40 border border-white/60 rounded-[32px] shadow-lg shadow-black/5 p-12">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 0.2,
            }}
            className="flex justify-center mb-8"
          >
            <div className="p-4 bg-blue-500/10 rounded-full">
              <Code2 className="w-12 h-12 text-blue-600" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: 0.3,
            }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
            style={{ fontWeight: 700 }}
          >
            Welcome to wnz's OJ!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-center mb-3 text-gray-700"
            style={{ fontWeight: 500 }}
          >
            Start your learning now
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base text-center mb-10 text-gray-600"
            style={{ fontWeight: 400 }}
          >
            Click here to learn more about wnz
          </motion.p>

          {/* Material Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: 0.7,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleButtonClick}
            className="relative w-full overflow-hidden"
          >
            {/* Ripple Effect */}
            {isRippling && (
              <motion.div
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-white rounded-full"
              />
            )}

            <div className="relative px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold text-lg transition-colors duration-200">
              Enter Online Judge
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Subtle Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default AuthSuccessPage;
