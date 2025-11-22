import { Check } from '@phosphor-icons/react';
import React from 'react';
import educationData from '../data/education.json';

export const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex px-4 py-20 sm:px-6 md:p-10"
    >
      <div className="flex flex-col gap-y-10 md:gap-y-20 items-start w-full max-w-5xl">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
            EDUCATION
          </h1>
        </div>

        <ul className="flex flex-col text-base sm:text-lg md:text-xl gap-y-8 w-full">
          {educationData.map((edu, idx) => (
            <li key={idx} className="text-lg sm:text-xl md:text-2xl">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col md:flex-row md:justify-between gap-y-2">
                  <div className="flex flex-col">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                      {edu.school}
                    </h3>
                    <h4 className="text-sm sm:text-base md:text-lg">
                      {edu.degree}
                    </h4>
                  </div>
                  <div className="flex justify-start md:justify-end">
                    <h6 className="text-sm sm:text-base md:text-xl text-main">
                      {edu.dateRange}
                    </h6>
                  </div>
                </div>

                {edu.advisor && (
                  <div>
                    <h5 className="font-light text-sm sm:text-base md:text-lg">
                      {edu.advisor}
                    </h5>
                  </div>
                )}

                {edu.concentration && (
                  <div>
                    <h5 className="font-light text-sm sm:text-base md:text-lg">
                      Concentration : {edu.concentration}
                    </h5>
                  </div>
                )}

                {edu.gpa && (
                  <div>
                    <h5 className="font-light text-sm sm:text-base md:text-lg">
                      GPA: {edu.gpa}
                    </h5>
                  </div>
                )}

                {edu.courses && edu.courses.length > 0 && (
                  <div>
                    <ul className="ml-4 sm:ml-6 space-y-1">
                      {edu.courses.map((course, cIdx) => (
                        <li key={cIdx}>
                          <div className="flex flex-row items-center gap-x-3 sm:gap-x-4">
                            <Check size={22} weight="bold" />
                            <span className="text-sm sm:text-base md:text-xl font-light">
                              {course}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};