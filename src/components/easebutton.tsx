
import React, { ReactElement, useState } from "react";
import "../easebutton.css";

interface EaseButtonProps {
    children: ReactElement
}

const EaseButton = ({children}:EaseButtonProps) => {
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const materializeEffect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = event.currentTarget;
    const { left, top } = button.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    setRipple({ x, y });

    setTimeout(() => {
      setRipple(null); // Remove the ripple after animation is done
    }, 500); // Match the duration of the ripple animation
  };

  return (
    <div className="body">
      <button className="button" onClick={materializeEffect}>
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
    </div>
  );
};

export default EaseButton;