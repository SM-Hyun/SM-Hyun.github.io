// app/components/Publications.js
import React from 'react';
import publications from '../data/publications.json';

const PubList = ({ items }) => (
  <ul className="flex flex-col gap-y-6 md:gap-y-8 w-full">
    {items.map((pub, idx) => (
      <li key={idx} className="flex flex-col gap-y-1">
        <div className="flex flex-row items-baseline gap-x-3 sm:gap-x-4">
          <span className="text-main font-semibold text-sm sm:text-base md:text-xl shrink-0">
            {pub.year}
          </span>
          <h3 className="text-base sm:text-lg md:text-2xl font-semibold leading-snug">
            {pub.link ? (
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-main transition-colors duration-200 underline decoration-light-80 underline-offset-4"
              >
                {pub.title}
              </a>
            ) : (
              pub.title
            )}
          </h3>
        </div>
        <div className="ml-10 sm:ml-12 md:ml-16 flex flex-col gap-y-1">
          <p className="text-sm sm:text-base md:text-lg font-light">
            {pub.authors.map((author, i) => (
              <React.Fragment key={i}>
                {author === 'Seungmin Hyun' ? (
                  <span className="font-semibold text-main">{author}</span>
                ) : (
                  author
                )}
                {i < pub.authors.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-secondary">
            <span className="italic">{pub.venue}</span>
            {pub.venueNote && <span>{pub.venueNote}</span>}
            {pub.award && (
              <span className="ml-2 font-medium text-main">🏆 {pub.award}</span>
            )}
          </p>
        </div>
      </li>
    ))}
  </ul>
);

export const Publications = () => {
  return (
    <section
      id="publications"
      className="min-h-screen flex px-4 py-20 sm:px-6 md:p-10"
    >
      <div className="flex flex-col gap-y-10 md:gap-y-16 items-start w-full max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
          PUBLICATIONS
        </h1>

        <div className="flex flex-col gap-y-6 md:gap-y-8 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            First-Author
          </h2>
          <PubList items={publications.firstAuthor} />
        </div>

        <div className="w-full h-[1px] bg-light-90" />

        <div className="flex flex-col gap-y-6 md:gap-y-8 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Second-Author
          </h2>
          <PubList items={publications.coAuthored} />
        </div>

        {publications.underReviewNote && (
          <p className="text-sm sm:text-base md:text-lg text-secondary italic">
            {publications.underReviewNote}
          </p>
        )}
      </div>
    </section>
  );
};
