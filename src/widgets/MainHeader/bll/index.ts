import { selectAuthData } from "@/feature/auth/authSelectors";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const useMainHeader = () => {
  const { isAuth, user } = useSelector(selectAuthData);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setScrolled(!entries[0].isIntersecting);
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return {
    sentinelRef,
    isAuth,
    isOpen,
    setIsOpen,
    scrolled,
    user,
  };
};
