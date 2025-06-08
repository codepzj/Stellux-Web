"use client";

import React, { useState } from "react";
import ImageLightbox from "@/components/ImageLightBox";

export default function MdImage({ src, alt }: { src: string, alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img src={src} alt={alt} onClick={() => setIsOpen(true)} className="cursor-pointer" />
      <ImageLightbox isOpen={isOpen} image={src} onClose={() => setIsOpen(false)} />
    </>
  );
}