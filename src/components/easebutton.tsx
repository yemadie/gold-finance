
import React, { useState } from "react";
import "../easebutton.css";

interface EaseButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const EaseButton: React.FC<EaseButtonProps> = ({ children, onClick }) => {
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const materializeEffect = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const { left, top } = button.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    setRipple({ x, y });

    // Reset the ripple after animation duration (500ms)
    setTimeout(() => {
      setRipple(null);
    }, 500);
  };

  return (
    <button className="button" onClick={(e) => { materializeEffect(e); onClick(); }}>
      {ripple && (
        <div
          className="circle"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      )}
      {children}
    </button>
  );
};

export default EaseButton;