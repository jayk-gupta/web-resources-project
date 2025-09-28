import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Show button if scrolled down more than 200 pixels
    setIsVisible(window.pageYOffset > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <ButtonContainer isVisible={isVisible} onClick={scrollToTop}>
      <FaArrowUp className="top-btn--icon" />
    </ButtonContainer>
  );
};

// --- Updated styled-components CSS ---
const ButtonContainer = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  
  // 1. Background: Solid Red color
  background: #dc2626; /* Tailwind red-600 */
  color: #fff;
  padding: 14px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  
  // 2. Box Shadow: Red accent glow
  box-shadow: 0 0 15px rgba(220, 38, 38, 0.8), 0 0 30px rgba(255, 100, 100, 0.6);
  
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 999;

  &:hover {
    transform: scale(1.15);
    // 3. Hover Box Shadow: Stronger Red glow
    box-shadow: 0 0 25px rgba(220, 38, 38, 1),
      0 0 45px rgba(255, 100, 100, 0.9);
  }

  .top-btn--icon {
    font-size: 1.5rem;
    animation: bounce 1.2s infinite alternate;
  }

  @keyframes bounce {
    0% {
      transform: translateY(-0.35rem);
    }
    100% {
      transform: translateY(0.45rem);
    }
  }
`;

export default ScrollToTopButton;