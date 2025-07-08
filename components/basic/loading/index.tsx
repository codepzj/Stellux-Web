"use client";

import React from "react";
import "./index.css";

interface LoadingProps {
  className?: string;
}

const defaultText = "别着急，马上就好";

export const Loading: React.FC<LoadingProps> = ({ className = "" }) => {
  return (
    <div
      className={`h-[calc(100vh-12rem)] w-full flex flex-col items-center justify-center p-4 ${className}`}
    >
      <div className="flex space-x-1.5 h-5" suppressHydrationWarning>
        <span
          className="w-2 h-2 bg-foreground rounded-full loading-bounce"
          style={{ animationDelay: "0s" }}
        />
        <span
          className="w-2 h-2 bg-foreground rounded-full loading-bounce"
          style={{ animationDelay: "0.05s" }}
        />
        <span
          className="w-2 h-2 bg-foreground rounded-full loading-bounce"
          style={{ animationDelay: "0.1s" }}
        />
      </div>
      <div className="text-sm text-foreground mt-2">{defaultText}</div>
    </div>
  );
};
