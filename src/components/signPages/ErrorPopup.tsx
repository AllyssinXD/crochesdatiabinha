import { useEffect, useRef, useState } from "react";
import "./Popups.css";

interface ErrorProps {
  error: string;
  vanish_time: number;
  onVanish(): void;
}

export default function Error({ error, vanish_time, onVanish }: ErrorProps) {
  const errorMessageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const selfDestruct = () => {
    if (errorMessageRef.current)
      errorMessageRef.current.className = "errorMessage vanishing";

    setTimeout(() => {
      setIsVisible(false);
      onVanish();
    }, 1000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      selfDestruct();
    }, vanish_time);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="error-message message" ref={errorMessageRef}>
      <p>{error}</p>
      <button onClick={() => selfDestruct()}>x</button>
    </div>
  );
}
