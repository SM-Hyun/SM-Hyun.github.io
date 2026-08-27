// app/components/ResearchExperience.js
import React from 'react';
import research from '../data/research.json';

export const ResearchExperience = () => {
  return (
    <section
      id="research"
      className="min-h-screen flex px-4 py-20 sm:px-6 md:p-10"
    >
      <div className="flex flex-col gap-y-10 md:gap-y-16 items-start w-full max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
          RESEARCH EXPERIENCE
        </h1>

        <ul className="flex flex-col gap-y-8 md:gap-y-10 w-full">
          {research.map((item, idx) => (
            <li key={idx} className="flex flex-col gap-y-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-y-1 gap-x-8">
                <div className="flex flex-col gap-y-1">
                  {/* 과제명 (한글, 크게) */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                    {item.titleKo}
                  </h3>
                  {/* 과제명 (영문, 살짝 작게) */}
                  <p className="text-sm sm:text-base md:text-lg font-light text-secondary leading-snug">
                    {item.titleEn}
                  </p>
                </div>
                {/* 참여 기간 */}
                <div className="flex md:justify-end shrink-0">
                  <h6 className="text-sm sm:text-base md:text-xl text-main whitespace-nowrap">
                    {item.period}
                  </h6>
                </div>
              </div>
              {idx !== research.length - 1 && (
                <div className="w-full h-[1px] bg-light-90 mt-6" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
