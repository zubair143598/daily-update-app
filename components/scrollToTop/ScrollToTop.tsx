"use client"
import styled from 'styled-components';
import { FaChevronUp } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';

const StyledArrow = styled(FaChevronUp )`
  position: fixed;
  bottom: 40px;
  right: 50px;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
`;

export default function ScrollToTop() {
    const [scrollPosition, setScrollPosition] = useState(0);;
//   const { showScroll, scrollTop } = useScrollToTop({ pageYOffset: 200 });

  useEffect(() => {
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const showScroll = scrollPosition > 200;
    return (
        <>
      {showScroll && (
        <StyledArrow size={40} className=' text-forest-800 hover:text-forest-500 hover:bg-gray-700 p-[6px] rounded-full' onClick={() => window.scrollTo(0, 0)} />
      )}
    </>
    );
  }