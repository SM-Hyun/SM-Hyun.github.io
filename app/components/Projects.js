// app/components/Projects.js
import React from 'react';
import Image from 'next/image';
import projects from '../data/projects.json';

export const Projects = () => {
  const formatLinkLabel = (key) => key.replace(/_/g, ' ').toUpperCase();

  const colsClass = (gridColumns) => {
    switch (gridColumns) {
      case 1:
        return 'sm:grid-cols-1';
      case 2:
        return 'sm:grid-cols-2';
      case 3:
        return 'sm:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'sm:grid-cols-2 lg:grid-cols-4';
      default:
        return 'sm:grid-cols-2';
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col px-4 py-20 sm:px-6 md:p-10"
    >
      <div className="flex flex-col gap-y-6 md:gap-y-10 items-start w-full pb-10 max-w-6xl">
        {/* 헤더 */}
        <div className="flex flex-col gap-y-6 md:gap-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
            PROJECTS
          </h1>
          <h2 className="text-base sm:text-lg md:text-2xl">
            HERE ARE SOME OF THE PROJECTS I HAVE UNDERTAKEN. MORE INFORMATION CAN BE FOUND ON A PROJECT{"'"}S CORRESPONDING GITHUB REPOSITORY.
          </h2>
        </div>

        <div className="w-full h-[1px] bg-light-90" />

        {/* 프로젝트 리스트 */}
        <ul className="flex flex-col text-base sm:text-lg md:text-xl gap-y-10 w-full">
          {projects.map((project, projectIdx) => (
            <React.Fragment key={project.id ?? projectIdx}>
              <li className="flex flex-col gap-y-4">
                {/* 타이틀 */}
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold">
                  {project.title}
                </h2>

                {/* (선택) 프로젝트 전체 description */}
                {project.description &&
                  project.description.trim() !== '' && (
                    <p className="text-sm sm:text-base text-neutral-600">
                      {project.description}
                    </p>
                  )}

                {/* 링크 */}
                {project.links && Object.keys(project.links).length > 0 && (
                  <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2">
                    {Object.entries(project.links).map(([key, url]) => (
                      <li key={`${project.id}-link-${key}`}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-blue-60 hover:text-primary transition-colors duration-200 text-sm sm:text-xl"
                        >
                          {formatLinkLabel(key)}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {/* mediaGroups */}
                {project.mediaGroups &&
                  project.mediaGroups.map((group, groupIdx) => {
                    if (!group.sources || group.sources.length === 0) return null;

                    return (
                      <div
                        key={`${project.id}-group-${groupIdx}`}
                        className="flex flex-col gap-y-2"
                      >


                        {/* 그리드 */}
                        <div
                          className={`grid gap-4 grid-cols-1 ${colsClass(
                            group.gridColumns
                          )}`}
                        >
                          {group.sources.map((item, srcIdx) => {
                            // 문자열 or { src, caption } 둘 다 지원
                            const source =
                              typeof item === 'string'
                                ? { src: item, caption: null }
                                : item;

                            const { src, caption } = source || {};

                            // 비디오
                            if (group.type === 'videos' || group.type === 'video') {
                              return (
                                <div
                                  key={`${project.id}-video-${groupIdx}-${srcIdx}`}
                                  className="flex flex-col gap-1"
                                >
                                  <video
                                    src={src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full rounded-md"
                                  />
                                  {caption && (
                                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                                      {caption}
                                    </p>
                                  )}
                                </div>
                              );
                            }

                            // 이미지
                            return (
                              <div
                                key={`${project.id}-image-${groupIdx}-${srcIdx}`}
                                className="flex flex-col gap-1"
                              >
                                <div className="relative w-full">
                                  <Image
                                    src={src}
                                    alt={`${project.title} image ${srcIdx + 1}`}
                                    width={1280}
                                    height={720}
                                    className="w-full h-auto object-cover rounded-md"
                                  />
                                </div>
                                {caption && (
                                  <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                                    {caption}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* 섹션(그룹) 설명 */}
                        {group.description &&
                          group.description.trim() !== '' && (
                            <p className="text-xs sm:text-base text-neutral-500">
                              {group.description}
                            </p>
                          )}
                      </div>
                    );
                  })}
              </li>

              {/* divider */}
              {projectIdx !== projects.length - 1 && (
                <div className="w-full h-[2px] bg-light-90" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};