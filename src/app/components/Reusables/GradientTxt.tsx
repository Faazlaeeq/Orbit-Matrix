import { createElement } from "react";

interface GradientTxtProps {
  tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  txt: string;
  className?: string;
}
export default function GradientTxt({
  tagName,
  txt,
  className,
}: GradientTxtProps) {
  return createElement(
    tagName,
    {
      className: `bg-clip-text text-transparent ${className}`,
      style: {
        backgroundImage: 'linear-gradient(to right, #6c7fea 14%, #5eccff 57%, #56ffe3 81%, #4bff90)',
      }
    },
    txt,
  );
}

// bg-gradient-to-r from-purple-400 via-red-500 bg-clip-text text-transparent to-orange-600
