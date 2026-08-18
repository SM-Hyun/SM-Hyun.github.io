// app/components/LazyVideo.js
'use client';
import { useEffect, useRef } from 'react';

/**
 * 화면에 가까워질 때만 로드하고, 보일 때만 재생하는 비디오.
 * - 첫 진입 200px 전에 로드를 시작하고, 화면을 벗어나면 일시정지한다.
 * - 페이지 첫 로딩 때 모든 mp4가 한꺼번에 다운로드/재생되는 것을 방지.
 */
export const LazyVideo = ({ src, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = video.dataset.src; // 처음 보일 때 한 번만 로드
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      data-src={src}
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  );
};
