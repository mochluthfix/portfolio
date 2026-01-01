'use client';

import { Bounce, FadeContent, GradientText, ClickSpark, BlurText, particles as Particles } from '@appletosolutions/reactbits';
import Lanyard from './Lanyard';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
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

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Text Section - Kiri */}
          <div className="text-center lg:text-left space-y-10">
            <FadeContent duration={1000} delay={300}>
              <Bounce>
                <GradientText
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                  colors={['#06b6d4', '#3b82f6', '#0ea5e9', '#14b8a6', '#22d3ee']}
                  animationSpeed={2}
                >
                  I'm Muhamad Luthfy Noor
                </GradientText>
              </Bounce>
            </FadeContent>

            <FadeContent duration={1000} delay={600}>
              <BlurText
                text="Recent Informatics Engineering graduate from Universitas Teknologi Bandung with a strong specialization in data analysis and web development. Skilled in programming using Python, SQL, and JavaScript, and experienced with data visualization tools such as Tableau and Power BI. Proficient in full-stack development leveraging Laravel and Vue.js frameworks, as well as other modern technologies. Demonstrated ability to turn raw data into actionable insights and develop ERP web applications. Additionally, I have freelance experience assembling computers and troubleshooting hardware and software issues. Known as a fast learner who quickly adapts to new technologies, I possess excellent communication, hard work, and problem-solving skills, along with strong collaboration abilities. I am eager to contribute to innovative projects and grow professionally in a dynamic environment."
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0"
                delay={80}
                animateBy="words"
                direction="bottom"
              />
            </FadeContent>

            <FadeContent duration={1200} delay={900}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <ClickSpark sparkColor="#06b6d4" sparkCount={15}>
                  <a
                    href="#projects"
                    className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    See Portfolio
                  </a>
                </ClickSpark>

                <ClickSpark sparkColor="#14b8a6" sparkCount={15}>
                 
                </ClickSpark>
              </div>
            </FadeContent>
          </div>

          {/* Lanyard Section - Kanan */}
          <FadeContent duration={1200} delay={200}>
            <div className="flex justify-center lg:justify-end">
              <Lanyard
                position={[0, 0, 20]}
                gravity={[0, -40, 0]}
                className="w-[28rem] h-[21rem] sm:w-[36rem] sm:h-[27rem] lg:w-[48rem] lg:h-[36rem]"
              />
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}