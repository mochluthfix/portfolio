'use client';

import Image from 'next/image';
import { AnimatedContent, FadeContent, GlareHover, particles as Particles } from '@appletosolutions/reactbits';

interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  linkUrl?: string;
}

const projects: Project[] = [
  {
    title: 'ERP System Website',
    description: 'Build a modern website to help the business run better and serve customers faster.',
    tech: ['Laravel', 'Livewire', 'MYSQL', 'Vue.js'],
    imageUrl: '/be.png',
    linkUrl: 'https://www.youtube.com/watch?v=GpWFNm8Uk0I&t=5s',
  },
  {
    title: 'Data Analyst',
    description: 'Cleaning datasets, handling missing values, transforming variables, and integrating data from diverse sources such as SQL databases, Excel, APIs, and large CSV files, primarily using Python (pandas, numpy) and SQL to ensure data quality and consistency. My passion lies in Exploratory Data Analysis (EDA), where I uncover patterns, trends, and anomalies through visualizations (matplotlib, seaborn, Tableau) and statistical techniques, transforming raw data into actionable business insights—such as identifying high-churn customer segments, key drivers of sales decline, or operational optimization opportunities.',
    tech: ['Spreadsheet', 'SQL', 'Pandas', 'Python'],
    imageUrl: '/data.png',
    linkUrl: 'https://drive.google.com/drive/folders/1_ybUsSR-gQ2_NPeImPqLLMG5_PjSEWWB?usp=drive_link',
  },
  {
    title: 'Data Visualization',
    description: 'I design intuitive layouts incorporating a mix of charts (bar, line, maps, treemaps), filters, dashboard actions (highlight, filter, URL), and custom tooltips for enhanced usability. The result is responsive, real-time, and mobile-friendly dashboards that empower stakeholders to monitor key performance indicators (KPIs), spot trends, and make data-driven decisions quickly such as sales performance trackers or executive summaries Ive developed to effectively visualize critical metrics..',
    tech: ['Tabelau'],
    imageUrl: '/das.png', 
    linkUrl: 'https://drive.google.com/file/d/1FLuQshcoDFLD7sYG501cQgGJRunQBvdr/view?usp=drive_link', 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
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
            Projects
          </h2>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <FadeContent key={project.title} duration={800} delay={index * 200}>
              <GlareHover>
                <div className="bg-slate-700/80 backdrop-blur-sm rounded-xl overflow-hidden h-full hover:bg-slate-600/80 transition-all duration-300 transform hover:scale-105 flex flex-col">
                  {/* Image Preview */}
                  <div className="relative w-full h-64 md:h-56 overflow-hidden"> {/* Tinggi lebih besar agar konsisten */}
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    
                    {/* Deskripsi dengan clamp agar tidak terpotong & tetap rapi */}
                    <p className="text-gray-300 mb-4 text-sm line-clamp-5 md:line-clamp-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link Button - hanya muncul jika ada link */}
                    {project.linkUrl && (
                      <a
                        href={project.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg text-sm font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Lihat Projek
                      </a>
                    )}
                  </div>
                </div>
              </GlareHover>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}