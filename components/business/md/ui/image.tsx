'use client'

import { useEffect, useRef } from 'react'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import Image from 'next/image'
import { Fancybox } from '@fancyapps/ui'

interface ZoomImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  group?: string
  className?: string
}

export function ZoomImage({
  src,
  alt,
  width = 800,
  height = 450,
  group = 'gallery',
  className,
}: ZoomImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    Fancybox.bind('[data-fancybox]', {
      groupAll: true,
    })

    return () => {
      Fancybox.unbind('[data-fancybox]')
      Fancybox.close()
    }
  }, [])

  return (
    <span ref={ref} className={className}>
      <a data-fancybox={group} href={src}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ cursor: 'zoom-in', borderRadius: 8 }}
        />
      </a>
    </span>
  )
}
