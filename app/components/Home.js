'use client';
import React from 'react';
import profile from '../data/profile.json';

export const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center p-10">
      <div className="flex flex-col gap-y-20">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-5xl font-semibold md:text-7xl">{profile.name}</h1>
          <div>
            <a
              href={`mailto:${profile.email}`}
              className="text-2xl font-medium text-main hover:text-primary transition-colors duration-300"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <span className="italic font-medium">{profile.quote}</span>
          </div>
        </div>

        {/* 섹션 리스트 */}
        <ul className="flex flex-col list-disc ml-4 text-xl gap-y-2">
          {profile.sections.map((section, index) => (
            <li key={index} className="text-base md:text-2xl">
              {section.title}
              {section.items && section.items.length > 0 && (
                <ul className="list-disc ml-6">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};