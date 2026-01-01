'use client';

import { AnimatedContent, FadeContent, particles as Particles } from '@appletosolutions/reactbits';

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 bg-black relative overflow-hidden">
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

      {/* Content - Full center */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <AnimatedContent direction="vertical" distance={50}>
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-12 tracking-tight">
            Contact
          </h2>
        </AnimatedContent>

        <FadeContent duration={1200}>
          <div className="text-center">
            <p className="text-white/70 text-lg md:text-xl mb-12">
              Connect with me
            </p>

            <div className="flex justify-center items-center gap-12 md:gap-16">
              {/* GitHub */}
              <a
                href="https://github.com/mochluthfix" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-12 h-12 md:w-14 md:h-14">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/muhamad-luthfy-noor" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-14 md:h-14">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.164 0-2.108-.944-2.108-2.108 0-1.164.944-2.108 2.108-2.108 1.164 0 2.108.944 2.108 2.108 0 1.164-.944 2.108-2.108 2.108zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/62881023698185" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="https://icons8.com/icon/16733/whatsapp" viewBox="0 0 16 16" fill="currentColor" className="w-12 h-12 md:w-14 md:h-14">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.643-.182-.065-.315-.099-.448.099-.133.197-.513.643-.628.778-.116.133-.232.148-.415.05-.182-.099-0.772-.365-1.471-.823-.546-.357-.916-.797-1.025-1.012-.109-.215-.011-.331.082-.43.091-.099.198-.232.298-.347.099-.116.133-.215.198-.33.066-.116.033-.215-.016-.314-.05-.099-.448-.778-.613-.1065-.165-.331-.365-.215-.498-.215-.133 0-.265.016-.398.083-.133.066-.513.182-.778.613-.265.432-.448.778-.448.943 0 .165.083.364.182.547.099.182.513.778 1.285 1.232.772.448 1.42.713 1.67.797.25.083.398.066.547-.05.149-.116.613-.448.778-.713.165-.265.331-.398.464-.464.133-.066.265-.083.398-.016.133.066.843.365 1.025.448.182.083.365.116.498.05.133-.066.843-.365 1.025-.713.182-.347.182-.645.133-.713-.05-.066-.182-.099-.365-.182z"/>
                </svg>
              </a>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}