"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const showScroll = scrollPosition > 200;

  return (
    <>
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-10 z-50  hover:bg-forest-800 text-white p-1 rounded-full transition-all duration-150"
        >
          <Image src="/chevron-up.svg" width={40} height={30} alt='lumunate_scrollToTop'/>
        </button>
      )}
    </>
  );
}