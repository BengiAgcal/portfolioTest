"use client";

import React, { useState } from "react";
import Image from "next/image";

const ImageWithFallback = ({
  fallback = "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*56i1w9SNBldDKBXFGldwIA.png",
  alt,
  src,
  layout,
  width,
  height,
  className,
}) => {
  const [imgSrc, setImgSrc] = useState(src); // Start with the original src

  const handleError = () => {
    setImgSrc(fallback); // Set fallback image on error
  };

  return (
    <Image
      alt={alt}
      src={imgSrc}
      layout={layout}
      width={width}
      height={height}
      className={className}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Fallback in case the image fails to load
          handleError();
        }
      }}
      onError={handleError} // Handles fallback if an error occurs
    />
  );
};

export default ImageWithFallback;
