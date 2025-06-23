"use client"

import { useEffect, useRef } from "react"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import Image from "next/image"
import { Fancybox } from "@fancyapps/ui"

interface FancyboxImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  group?: string
}

export default function FancyboxImage({
  src,
  alt,
  width = 600,
  height = 400,
  group = "gallery",
}: FancyboxImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      groupAll: true, 
    })

    return () => {
      Fancybox.unbind("[data-fancybox]")
      Fancybox.close()
    }
  }, [])

  return (
    <span ref={ref}>
      <a data-fancybox={group} href={src}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ cursor: "zoom-in", borderRadius: 8 }}
        />
      </a>
    </span>
  )
}
