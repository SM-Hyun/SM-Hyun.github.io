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
      <div className="flex flex-col gap-y-10 md:gap-y-20 max-w-6xl w-full">
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
            ABOUT ME
          </h1>
        </div>

        {/* 학문적 계보: Hutchinson — Yoon — Hyun */}
        <Image
          src="/images/about/about_me.jpg"
          alt="Academic lineage: Seth A. Hutchinson, Han Ul Yoon, and Seungmin Hyun"
          width={1920}
          height={813}
          className="w-full h-auto rounded-md"
        />

        <div className="flex flex-col text-lg sm:text-xl md:text-3xl gap-y-6 md:gap-y-10 font-light leading-relaxed max-w-4xl">
          <h3>
            I received my M.S. in Computer Science from Yonsei University
            Graduate School in February 2026, where I conducted research in the{' '}
            <a
              href="https://hanlabhome.wordpress.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-main hover:text-primary transition-colors duration-200"
            >
              Human Assistive Neurorobotics (HAN) Lab
            </a>{' '}
            under the supervision of Prof. Han Ul Yoon. Prof. Yoon earned his
            Ph.D. under Prof. Seth A. Hutchinson at the University of Illinois
            Urbana-Champaign, placing my research in the direct academic lineage
            of visual servo control.
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
            from Yonsei University Mirae Campus.
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