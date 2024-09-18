import { useEffect, useRef, useState } from "react";
import "./style/Popups.css";

interface SucessProps {
  sucess: string;
  vanish_time: number;
  onVanish(): void;
}

export default function Sucess({ sucess, vanish_time, onVanish }: SucessProps) {
  const sucessMessageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Função de Auto-Destruição do Componente
  const selfDestruct = () => {
    // Animação de desaparecimento
    if (sucessMessageRef.current)
      sucessMessageRef.current.className = "sucessMessage vanishing";

    // Tempo para a animação rodar + Chamada do Callback
    setTimeout(() => {
      setIsVisible(false);
      onVanish();
    }, 1000);
  };

  //Ao renderizar componente, Já setta a função para auto-destruição em alguns segundos
  useEffect(() => {
    const timeout = setTimeout(() => {
      selfDestruct();
    }, vanish_time);

    return () => clearTimeout(timeout);
  }, []);

  //Destruir elemento efetivamente
  if (!isVisible) return null;

  return (
    <div className="sucess-message message" ref={sucessMessageRef}>
      <p>{sucess}</p>
    </div>
  );
}
