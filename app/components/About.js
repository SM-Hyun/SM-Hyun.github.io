import React from 'react';
import Image from 'next/image';
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

        {/* 학문적 계보: Hutchinson — Yoon — Hyun */}
        <Image
          src="/images/about/about_me.jpg"
          alt="Academic lineage: Seth A. Hutchinson, Han Ul Yoon, and Seungmin Hyun"
          width={720}
          height={303}
          className="w-full max-w-[720px] h-auto rounded-md"
        />

        <div className="flex flex-col text-lg sm:text-xl md:text-3xl gap-y-6 md:gap-y-10 font-light leading-relaxed">
          <h3>
            I received an MS in Computer Science from Yonsei University in
            February 2026, where I conducted research in the{' '}
            <a
              href="https://hanlabhome.wordpress.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-main hover:text-primary transition-colors duration-200"
            >
              HAN Lab
            </a>{' '}
            under Dr. Han Ul Yoon.
          </h3>
          <h3>
            My research centers on risk-aware robot control in extreme
            environments — leveraging digital twin-based frameworks to detect
            operational risks in real time, so that robots can carry out their
            tasks safely and reliably even under severe real-world uncertainty.
          </h3>
          <h3>
            This work lies at the intersection of robotics, control, and
            artificial intelligence. Within field robotics, my main focus is
            disaster robotics — the ultimate goal of my work is to enable
            robots to operate reliably in disaster response scenarios, where
            robustness and adaptability are critical.
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