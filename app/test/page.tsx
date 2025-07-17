"use client";

import { Alert } from "@heroui/react";

export default function App() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-full">
        {[
          "default" as const,
          "primary" as const,
          "secondary" as const,
          "success" as const,
          "warning" as const,
          "danger" as const,
        ].map((color) => (
          <div key={color} className="w-full flex items-center my-3">
            <Alert color={color} title={`This is a ${color} alert`} />
          </div>
        ))}
      </div>
    </div>
  );
}
