import { useState, useEffect } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2400;
    const interval = 30;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const eased = Math.min(100, Math.round((step / steps) * 100));
      setProgress(eased);
      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 800);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="text-2xl md:text-3xl font-light tracking-[0.4em] text-foreground mb-2">
        CONCIERGE DXB
      </h1>
      <p className="text-xs tracking-[0.3em] text-muted-foreground font-light">
        YOUR LUXURY EXPERIENCE AWAITS
      </p>
      <div className="loader-progress-bar">
        <div className="loader-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <p className="text-xs text-muted-foreground mt-4 font-light tracking-widest">
        {progress}%
      </p>
    </div>
  );
};

export default Loader;
