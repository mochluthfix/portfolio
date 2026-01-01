'use client';

import { AnimatedContent, FadeContent, StarBorder, particles as Particles } from '@appletosolutions/reactbits';
import Image from 'next/image';

const skills = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
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
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedContent direction="vertical" distance={50}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
           Tech Stack Skills
          </h2>
        </AnimatedContent>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <FadeContent key={skill.name} duration={800} delay={index * 100}>
              <StarBorder
                color="#06b6d4"
                speed="3s"
                className="mb-6"
              >
                  <div className="bg-slate-700/80 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
                    <div className="relative w-20 h-20 mb-4">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-white font-semibold text-lg">{skill.name}</span>
                </div>
              </StarBorder>
            </FadeContent>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

