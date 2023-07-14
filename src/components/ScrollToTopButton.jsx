import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ButtonContainer isVisible={isVisible} onClick={scrollToTop}>
      <FaArrowUp className="top-btn--icon" />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgb(0,0,0);
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: none;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  .top-btn--icon {
    animation: gototop 1.2s linear infinite alternate-reverse;
  }

  @keyframes gototop {
    0% {
      transform: translateY(-0.45rem);
    }
    100% {
      transform: translateY(0.55rem);
    }
  }
`;

export default ScrollToTopButton;
