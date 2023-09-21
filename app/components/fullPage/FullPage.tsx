import React, { createRef, useEffect, RefObject } from 'react';
import HomeSection from '../sections/HomeSection';
import AboutUsSection from '../sections/AboutUsSection';

const FullPage: React.FC = () => {
  // Crear las referencias con createRef y almacenarlas en un array.
  const sectionRefs = [
    createRef<HTMLDivElement>(),
    createRef<HTMLDivElement>(),
  ];

  let isScrolling = false;

  const handleScroll = (e: WheelEvent) => { // Cambiar React.WheelEvent a WheelEvent
    if (isScrolling) return;
    isScrolling = true;

    const currentSectionIndex = sectionRefs.findIndex((sectionRef) =>
      sectionRef.current?.contains(e.target as Node) ?? false
    );

    let nextSectionIndex = currentSectionIndex;

    if (e.deltaY > 0) {
      // Scrolling Down
      nextSectionIndex = Math.min(currentSectionIndex + 1, sectionRefs.length - 1);
    } else {
      // Scrolling Up
      nextSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }

    sectionRefs[nextSectionIndex].current?.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div>
      <div ref={sectionRefs[0]}>
        <HomeSection />
      </div>
      <div ref={sectionRefs[1]}>
        <AboutUsSection />
      </div>
    </div>
  );
};

export default FullPage;
