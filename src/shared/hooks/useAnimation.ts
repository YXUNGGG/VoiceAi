import { useEffect, useRef, useState } from "react";

type UseAnimationOptions<T extends HTMLElement = HTMLElement> = {
  trigger?: 'hover' | 'click';
  initialVsibility?: boolean;
  closeOnOutsideClick?: boolean;
};

const useAnimation = <T extends HTMLElement = HTMLElement>(
  options: UseAnimationOptions<T> = {}
) => {
  const {
    trigger= "click",
    initialVsibility = false,
    // closeOnOutsideClick = true
  } = options;
  
  const [isVisible, setIsVisible] = useState(initialVsibility);
  const [isFadeOut, setIsFadeOut] = useState(false);

  const containerRef = trigger === "hover" ? useRef<T>(null) : null;

  const handleOpen = (newVisibility: React.MouseEvent<T>) => {
    if (newVisibility && !isVisible) {
      setIsVisible(true);
      setIsFadeOut(false);
    } else {
      setIsFadeOut(true);
    }
  }

  const handleAnimationEnd = (e: React.AnimationEvent<T>) => {
    if (e.animationName.includes("fadeOut") && isFadeOut) {
        setIsVisible(false);
        setIsFadeOut(false);
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<T>) => {
    if (
      trigger === "hover" &&
      containerRef?.current &&
      !containerRef.current.contains(e.relatedTarget as Node)
    ) {
      setIsFadeOut(true);
    }
  };
  
  // const handleClickOutside = (e: MouseEvent) => {
  //   if (
  //     closeOnOutsideClick &&
  //     containerRef.current &&
  //     !containerRef.current.contains(e.target as Node)
  //   ) {
  //     setIsVisible(false);
  //     setIsFadeOut(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [closeOnOutsideClick]);

  const eventHandlers = {
    ...(trigger === 'hover' && {
      onMouseEnter: handleOpen as React.MouseEventHandler<T>,
      onMouseLeave: handleMouseLeave as React.MouseEventHandler<T>,
    }),
  };

  return {
    ...(trigger === 'hover' && { containerRef, eventHandlers }),
    isVisible,
    isFadeOut,
    handleOpen,
    handleAnimationEnd
  };
}

export default useAnimation;