import {
  Monitor,
  ShieldCheck,
  Headphones,
  Timer,
  BadgeCheck,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: <Monitor size={28} />,
    title: "Interactive\nUser Interface",
    bg: "bg-[#f2a900]",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Strong\nSecurity",
    bg: "bg-[#f5b000]",
  },
  {
    icon: <Headphones size={28} />,
    title: "Technical\nSupport",
    bg: "bg-[#f7c400]",
  },
  {
    icon: <Timer size={28} />,
    title: "On Time\nDelivery",
    bg: "bg-[#f9d54a]",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "100%\nQuality Jobs",
    bg: "bg-[#fde16a]",
  },
  {
    icon: <Wallet size={28} />,
    title: "Projects\nat your Budget",
    bg: "bg-[#fff176]",
  },
];

export default function FeatureStrip() {
  return (
    <div className="flex w-full overflow-hidden rounded-lg">
      {features.map((item, index) => (
        <div
          key={index}
          className={`flex-1 ${item.bg} flex flex-col items-center justify-center py-10 text-center`}
        >
          {/* Icon */}
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0b4da2] text-white">
            {item.icon}
          </div>

          {/* Text */}
          <p className="whitespace-pre-line text-sm font-semibold text-[#1f2937]">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}
