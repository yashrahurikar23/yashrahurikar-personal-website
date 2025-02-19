"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-muted">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built using Aceternity UI and ShadCN UI
    </div>
  );
};
