import { useState, useEffect, useRef } from "react";

export const useFloatingTop = () => {
  const [topOffset, setTopOffset] = useState<number | string>(0);

  const prevScrollPos = useRef<number | null>(null);

  const scrollListener = (e: Event) => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos.current && prevScrollPos.current > currentScrollPos) {
      setTopOffset(0);
    } else {
      setTopOffset("-90px");
    }
    //@ts-ignore
    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return topOffset;
};

export const useSubmenu = () => {
  const [currentOpenSubMenuIndex, setCurrentOpenSubMenuIndex] = useState<number | null>(null);

  const openSubMenu = (index: number) => {
    setCurrentOpenSubMenuIndex(index);
  };

  const closeSubMenu = () => {
    setCurrentOpenSubMenuIndex(null);
  };

  const toggleSubMenu = (index: number) => {
    setCurrentOpenSubMenuIndex(
      currentOpenSubMenuIndex === index ? null : index
    );
  };

  return { currentOpenSubMenuIndex, openSubMenu, closeSubMenu, toggleSubMenu };
};
