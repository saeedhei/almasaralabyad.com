'use client';

import Image from 'next/image';
import { useState } from 'react';

interface InteractiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function InteractiveImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
}: InteractiveImageProps) {
  const [scale, setScale] = useState(1.02);

  const handleMouseEnter = () => {
    setScale(1.05);
  };

  const handleMouseLeave = () => {
    setScale(1.02);
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease-in-out' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}