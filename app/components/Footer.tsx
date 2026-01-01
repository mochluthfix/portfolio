'use client';

import { FadeContent, particles as Particles } from '@appletosolutions/reactbits';

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden py-8 border-t border-slate-800/50">
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
        <FadeContent duration={800}>
          <div className="text-center text-gray-400">
            <p> @2025 Developed by: Muhamad Luthfy Noor</p>
          </div>
        </FadeContent>
      </div>
    </footer>
  );
}



