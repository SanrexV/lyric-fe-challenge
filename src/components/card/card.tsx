"use client";

import React, { useState } from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  album: string;
  imageUrl: string;
  fallbackUrl: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  album,
  imageUrl,
  fallbackUrl,
}) => {
  const [errorOnImage, setError] = useState(false);

  const handleOnError = () => {
    setError(true);
  };

  return (
    <div className="rounded-xl overflow-hidden bg-neutral-950 cursor-pointer">
      <Image
        className="w-full h-40 object-cover"
        src={errorOnImage ? fallbackUrl : imageUrl}
        alt={title}
        width={400}
        height={192}
        onError={handleOnError}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-teal-700">{title}</h2>
        <h3 className="text-xs my-1">{album}</h3>
        <p className="hidden md:block text-xs text-neutral-500 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
