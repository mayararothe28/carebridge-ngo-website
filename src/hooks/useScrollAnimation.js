import { useEffect, useRef } from "react";

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all children with animation classes
    const animatedElements = element.querySelectorAll(
      ".fade-in, .fade-in-left, .fade-in-right, .scale-in"
    );

    animatedElements.forEach((el) => observer.observe(el));

    // Also observe the element itself if it has animation classes
    if (
      element.classList.contains("fade-in") ||
      element.classList.contains("fade-in-left") ||
      element.classList.contains("fade-in-right") ||
      element.classList.contains("scale-in")
    ) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
