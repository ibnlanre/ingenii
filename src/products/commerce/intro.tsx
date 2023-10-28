import clsx from "clsx";

export function Intro() {
  return (
    <div className="relative overflow-hidden">
      <svg
        width="583"
        height="521"
        viewBox="0 0 583 521"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-[8vw] -top-[8vw]"
      >
        <rect
          x="-23"
          y="458.216"
          width="734.478"
          height="113.54"
          rx="56.7701"
          transform="rotate(-40.9334 -23 458.216)"
          fill="#D59FFF"
          fillOpacity="0.06"
        />
      </svg>

      <svg
        width="532"
        height="432"
        viewBox="0 0 532 432"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 h-4/5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M582 0C260.57 0 0 260.57 0 582H0.874929C16.9381 298.191 252.171 73 540 73H1079V0H582Z"
          fill="#8F00FF"
          fillOpacity="0.54"
        />
      </svg>

      <section
        className={clsx(
          "py-24 px-2 relative clump:px-[clamp(8px,5vw,5rem)] mx-auto",
          "flex flex-col items-center max-w-5xl",
          "gap-y-5 clump:gap-x-[clamp(1rem,2vw,6rem)] gap-x-4"
        )}
      >
        <h2
          className={clsx(
            "clump:text-[clamp(1.5rem,4vw,2.25rem)] text-4xl",
            "font-bold text-violet leading-normal text-center"
          )}
        >
          Revolutionary shopping experience with AR/3D models for online store
        </h2>
        <ul>
          {[
            ["Boost your conversion up to", "94%"],
            ["Increase average order value up to", "40%"],
            ["Grow customer engagement up to", "x11"],
            ["Decrease returns up to", "58%"],
          ].map(([item, retention], idx) => (
            <li key={idx} className="flex gap-4">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M20 6.5L9 17.5L4 12.5"
                  stroke="#8300EB"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-medium leading-normal text-philippine-gray lighten">
                {item} <span className="text-violet">{retention}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
