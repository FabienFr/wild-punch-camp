"use client";

import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick || (() => alert("La réservation sera bientôt disponible !"))} 
      className={className}
    >
      {children}
    </button>
  );
} 