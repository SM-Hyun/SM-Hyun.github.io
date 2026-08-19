'use client';
import { useEffect } from 'react';
import { useActiveSection } from './contexts/ActiceSectionContext';
import { Home } from './components/Home';
import { Education } from './components/Education';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export default function Root() {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const sectionIds = ['home', 'education', 'about', 'publications', 'projects'];
    // threshold(요소 높이 대비 비율) 방식은 뷰포트보다 훨씬 긴 섹션(PROJECTS 등)에서는
    // 절대 도달할 수 없으므로, "뷰포트 세로 중앙 20% 띠에 걸친 섹션"을 활성으로 판정한다.
    const options = {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveSection]);

  return (
    <div className="flex flex-col max-w-[1200px] bg-common-100">
      <Home />
      <Education />
      <About />
      <Publications />
      <Projects />
      <Footer />
    </div>
  );
}