'use client';

import Timeline, { TimelineEntry } from './Timeline';

const timelineData: TimelineEntry[] = [
  {
    title: '2020',
    content: (
      <div>
        <p className="mb-4">
        I began my higher education by pursuing a Bachelor's degree in Informatics Engineering (Computer Science). 
        To independently cover tuition and living expenses, I simultaneously launched and managed a small-scale business in the Food & Beverage (F&B) sector
        </p>
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">bachelor degrees</span>
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">computer science</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">business</span>
        </div>
      </div>
    ),
  },
  {
    title: '2021-2024',
    content: (
      <div>
        <p className="mb-4">
        in response to the challenges brought by the global pandemic, I transitioned into the digital economy, building a sustainable income stream as an online seller of in-game currency across multiple marketplaces. 
        This experience strengthened my expertise in e-commerce, digital marketing, customer relationship management, and financial operations while continuing my studies.
        </p>
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">pandemic</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">transition</span>
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">earn money</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">digital currency</span>
        </div>
      </div>
    ),
  },
  {
    title: 'May 2025',
    content: (
      <div>
        <p className="mb-4">
        I successfully graduated with a Bachelor's degree in Informatics Engineering. With a solid foundation in technology, I am eager to launch my professional career in the tech industry, 
        contributing to innovative projects and continuing to grow in a dynamic technical environment
        </p>
        
        <div className="flex gap-2 flex-wrap mt-4">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">graduated</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">tech industry</span>
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">professional journey</span>
        </div>
      </div>
    ),
  },
];

export default function About() {
  return <Timeline data={timelineData} />;
}



