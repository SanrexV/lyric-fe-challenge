import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-neutral-950 cursor-pointer">
      {imageUrl && (
        <Image
          className="w-full h-40 object-cover"
          src={imageUrl}
          alt={title}
          width={400}
          height={192}
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-teal-700">{title}</h2>
        <p className="text-xs text-neutral-500 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
