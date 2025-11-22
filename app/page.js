'use client';
import { useEffect } from 'react';
import { useActiveSection } from './contexts/ActiceSectionContext';
import { Home } from './components/Home';
import { Education } from './components/Education';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export default function Root() {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const sectionIds = ['home', 'education', 'about', 'projects'];
    const options = {
        root: null,
        threshold: 0.15,
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
      <Projects />
      <Footer />
    </div>
  );
}