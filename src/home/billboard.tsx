import clsx from "clsx";
import Image from "next/image";
// import { useAutoAnimate } from "@formkit/auto-animate/react";
// import { useEffect, useState } from "react";

export function Billboard() {
  // const [parent] = useAutoAnimate({ duration: 500 });
  // const [images, setImages] = useState([
  //   "image-12",
  //   "image-11",
  //   "image-10",
  //   "image-9",
  // ]);

  const images = [
    {
      url: "image-1.jpeg",
      rotate: 0,
    },
    {
      url: "image-2.jpeg",
      rotate: -6,
    },
    { url: "image-9.png", rotate: -10 },
  ];

  // useEffect(() => {
  //   setTimeout(() => {
  //     const juggled = [...images];
  //     juggled.push(juggled.shift() as string);
  //     setImages(juggled);
  //   }, 1000);
  // }, [images]);

  return (
    <section
      className={clsx(
        "flex relative md:gap-x-6 px-2 clump:px-[clamp(8px,5vw,5rem)]",
        "max-w-8xl mx-auto flex-col sm:flex-row overflow-hidden isolate"
      )}
    >
      <article className="flex flex-col sm:basis-7/12 gap-6 self-center py-4 clump:py-[clamp(1rem,8vw,7.5rem)]">
        <h3 className="text-4xl font-bold clump:text-[clamp(2.05rem,4vw,3.75rem)] md:leading-none">
          <span>Enabling Business Success in a</span>{" "}
          <span className="text-violet mix-blend-difference">
            Dynamic Landscape
          </span>
        </h3>
        <p className="text-lg lighten mix-blend-hard-light">
          We empower businesses to conquer the ever-changing business and
          technology landscape, achieve their goals, and thrive in fiercely
          competitive industries through comprehensive services.
        </p>
      </article>
      <figure
        className={clsx(
          "sm:bg-gradient-to-b sm:from-vampire-black sm:from-0% sm:to-davys-grey sm:to-100%",
          "overflow-visible grid sm:basis-5/12 bg-transparent w-full self-center",
          "sm:ml-14 sm:clump:ml-[clamp(0px,4vw,3.5rem)] sm:my-14 sm:clump:my-[clamp(0px,4vw,3.5rem)]",
          "p-5 clump:py-[clamp(1.25rem,8vw,3.5rem)] clump:px-[clamp(0rem,6vw,3.5rem)] sm:p-0",
          "flex-1 aspect-square rounded-[0.875rem] h-fit sm:w-[clamp(30vw,60vw,100vw)]"
        )}
      >
        {images.map(({ url, rotate }) => (
          <Image
            key={url}
            style={{
              rotate: `${rotate}deg`,
            }}
            className={clsx(
              "!relative object-cover [grid-area:1/1] rounded-[0.875rem] aspect-square"
            )}
            src={`/images/${url}`}
            alt="point of sale"
            fill
          />
        ))}
      </figure>
      <svg
        width="739"
        height="423"
        viewBox="0 0 739 423"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          // "sm:clump:mr-[clamp(8px,5vw,5rem)]",
          "absolute bottom-0 sm:right-0 h-2/3 -z-10"
        )}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M582 0C260.57 0 0 260.57 0 582H0.874929C16.9381 298.191 252.171 73 540 73H1079V0H582Z"
          fill="#8F00FF"
        />
      </svg>
    </section>
  );
}
