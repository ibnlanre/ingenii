import { ComponentProps } from "react";

interface ServicesProps extends ComponentProps<"div"> {}

export function Services({ children }: ServicesProps) {
  return (
    <section id="services" className="bg-smoky-black">
      <div className="py-14 px-2 relative clump:px-[clamp(8px,5vw,5rem)] max-w-8xl mx-auto gap-16 flex flex-col">
        <svg
          width="861"
          height="545"
          viewBox="0 0 861 545"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-7/12 h-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M279 0C600.43 0 861 260.57 861 582H860.125C844.062 298.191 608.829 73 321 73H-218V0H279Z"
            fill="#8F00FF"
            fillOpacity="0.21"
          />
        </svg>
        <svg
          width="977"
          height="348"
          viewBox="0 0 977 348"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 w-8/12 h-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M582 0C260.57 0 0 260.57 0 582H0.874929C16.9381 298.191 252.171 73 540 73H1079V0H582Z"
            fill="#8F00FF"
            fillOpacity="0.21"
          />
        </svg>
        <h2 className="text-5xl clump:text-[clamp(2.05rem,4vw,3.75rem)] font-bold text-white">
          Services
        </h2>
        {children}
      </div>
    </section>
  );
}
