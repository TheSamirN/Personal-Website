import { useEffect, useRef } from "react";
import DottedSurface from "./DottedSurface";

export default function Hero({ dark }) {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const text = "Architecture";
    let cancelled = false;

    function runCycle() {
      if (cancelled) return;
      let index = 0;
      if (typewriterRef.current) typewriterRef.current.textContent = "";

      const interval = setInterval(() => {
        if (cancelled) {
          clearInterval(interval);
          return;
        }
        if (typewriterRef.current && index < text.length) {
          typewriterRef.current.textContent = text.slice(0, index + 1);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            if (!cancelled) runCycle();
          }, 4000);
        }
      }, 150);
    }

    const startTimer = setTimeout(runCycle, 800);
    return () => {
      cancelled = true;
      clearTimeout(startTimer);
    };
  }, []);

  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-8 md:px-16 pt-32 pb-20 relative overflow-hidden">
      <DottedSurface dark={dark} />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
{/* Hero Text */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="space-y-4">
            <span
              className="font-mono text-xs tracking-[0.5em] uppercase text-muted-foreground stagger-item"
              style={{ animationDelay: "0.1s" }}
            >
              Software Developer
            </span>
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter stagger-item"
              style={{ animationDelay: "0.2s" }}
            >
              Building <br />
              <span className="italic ml-8 md:ml-20">Digital</span> <br />
              <span className="typewriter-cursor" ref={typewriterRef}></span>
            </h1>
            <p
              className="max-w-md text-muted-foreground mt-12 leading-relaxed stagger-item"
              style={{ animationDelay: "0.3s" }}
            >
              Building high-performance web applications with Angular, React,
              Java, and Spring Boot. From front-end interfaces to backend
              microservices.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:col-span-5 order-1 lg:order-2 hidden lg:flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-xs lg:max-w-md aspect-[4/5] image-bracket stagger-item"
            style={{ animationDelay: "0.4s" }}
          >
            <img
              alt="Developer Portrait"
              className="w-full h-full object-cover contrast-[0.95] brightness-105"
              src="/selfie.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
