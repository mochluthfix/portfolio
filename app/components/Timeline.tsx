'use client';

import { useRef, useEffect, useState } from 'react';
import { AnimatedContent, FadeContent, particles as Particles } from '@appletosolutions/reactbits';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

export type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

interface TimelineProps {
  data: TimelineEntry[];
}

export default function Timeline({ data }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const progressValue = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = progress.on('change', (latest) => {
      progressValue.set(latest);
      const index = Math.min(
        Math.floor((latest / 100) * data.length),
        data.length - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [progress, data.length, progressValue]);

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Particles
          particleCount={400}
          particleSpread={12}
          speed={0.15}
          particleColors={['#06b6d4', '#3b82f6', '#0ea5e9', '#14b8a6', '#22d3ee']}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={1.5}
          cameraDistance={25}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <AnimatedContent direction="vertical" distance={50}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            About Me
          </h2>
        </AnimatedContent>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Sticky Header */}
            <div className="sticky top-20 z-20 mb-8">
              <motion.div
                className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {data[activeIndex]?.title || data[0]?.title}
                </h3>
                <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    style={{ 
                      width: useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Timeline Items */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500 opacity-30" />

              {/* Scroll Beam */}
              <motion.div
                className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400"
                style={{
                  height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
                }}
              />

              {data.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
  isActive,
}: {
  item: TimelineEntry;
  index: number;
  isActive: boolean;
}) {
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={itemRef}
      className="relative pl-20 pb-16 last:pb-0"
    >
      {/* Dot */}
      <motion.div
        className="absolute left-6 top-2 w-4 h-4 rounded-full border-2 border-cyan-500 bg-black z-10"
        animate={{
          scale: isActive ? 1.5 : 1,
          backgroundColor: isActive ? '#06b6d4' : '#000000',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-50 animate-ping" />
      </motion.div>

      {/* Content */}
      <FadeContent duration={800} delay={index * 100}>
        <motion.div
          className={`bg-slate-700/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border transition-all duration-300 ${
            isActive
              ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
              : 'border-slate-600/50'
          }`}
          animate={{
            scale: isActive ? 1.02 : 1,
          }}
        >
          <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
          <div className="text-gray-300 leading-relaxed">{item.content}</div>
        </motion.div>
      </FadeContent>
    </div>
  );
}

