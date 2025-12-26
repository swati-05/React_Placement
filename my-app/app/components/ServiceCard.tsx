"use client";
import { buttonPrimary, paraText } from "../style/ui";

interface ServiceCardProps {
  image: string;
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  href: string;
}

const ServiceCard = ({
  image,
  title,
  highlight,
  description,
  buttonText,
  href,
}: ServiceCardProps) => {
  return (
    <div className="max-w-sm rounded-[32px] bg-white shadow-lg overflow-hidden">
      <div className="bg-[#00cab1] p-6 flex justify-center">
        <img src={image} alt={title} className="max-h-52 object-contain" />
      </div>

      <div className="p-8 text-center">
        <h3 className="text-2xl font-semibold">
          {title} <span className="text-orange-500"> <br /> {highlight}</span>
        </h3>

        <p className="mt-4 text-gray-500">{description}</p>

        <a
          href={href}
          className={buttonPrimary}
        >
          {buttonText} →
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
