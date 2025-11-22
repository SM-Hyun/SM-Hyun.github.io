import React from 'react';
import profile from '../data/profile.json';

export const About = () => {
  const linkedinLink = profile.socialLinks?.find(
    (link) => link.id === 'linkedin'
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-4 py-20 sm:px-6 md:p-10"
    >
      <div className="flex flex-col gap-y-10 md:gap-y-20 max-w-4xl">
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
            ABOUT ME
          </h1>
        </div>

        <div className="flex flex-col text-lg sm:text-xl md:text-3xl gap-y-6 md:gap-y-10 font-light leading-relaxed">
          <h3>
            I am a graduate student in the{' '}
            <a
              href="https://hanlabhome.wordpress.com/"
              target="_blank"
              className="font-medium text-main hover:text-primary transition-colors duration-200"
            >
              HAN Lab
            </a>{' '}
            at Yonsei University pursuing a MS in Computer Science under{' '} Dr. Han Ul Yoon.
          </h3>
          <h3>
            My research centers primarily on combining diffusion-based models
            with visual servo control, with a focus on the intersection of
            robotics, control, and artificial intelligence. This approach
            leverages diffusion-based models to achieve consistently stable
            visual servoing even in highly unstructured environments, ultimately
            enabling robots to operate reliably in disaster response scenarios
            where robustness and adaptability are critical.
          </h3>
          <h3>
            Previously, I received a Bachelor of Science in Computer Engineering
            from Yonsei University.
          </h3>
          <h3>
            I can be reliably reached on{' '}
            <a
              href={linkedinLink?.url ?? '#'}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-main hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </a>
            .
          </h3>
        </div>
      </div>
    </section>
  );
};