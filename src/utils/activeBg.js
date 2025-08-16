import { useEffect, useState } from "react";

export default function useActiveBackground() {
  const [activeBg, setActiveBg] = useState("primary");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-bg]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBg(entry.target.getAttribute("data-bg"));
          }
        });
      },
      { threshold: 0.5 } // at least 50% visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  console.log(activeBg);

  return activeBg;
}
