import clsx from "clsx";
import Image from "next/image";

export function Landing() {
  const images = [
    {
      url: "image-1.jpeg",
      rotate: 10,
    },
    {
      url: "image-3.png",
      rotate: 0,
    },
    {
      url: "image-2.jpeg",
      rotate: 4,
    },
  ];

  return (
    <section
      className={clsx(
        "flex relative md:gap-x-6 px-2 clump:px-[clamp(8px,5vw,5rem)] items-center",
        "max-w-8xl mx-auto flex-col-reverse sm:flex-row overflow-hidden py-11"
      )}
    >
      <article className="flex flex-col sm:basis-7/12 gap-3.5 isolate text-smoky-black">
        <h3 className="text-3xl font-bold clump:text-[clamp(1.5rem,3vw,1.875rem)] leading-normal">
          About us
        </h3>
        <p className="text-2xl clump:text-[clamp(1.15rem,3vw,1.5rem)] leading-normal">
          <span className="text-violet mix-blend-difference">At Ingenii</span>
          <span className="lighten">
            , we are your trusted partner in driving business and technology
            development. As a leading consultancy, we offer a wide range of
            comprehensive services designed to empower businesses to thrive in
            today's ever-changing landscape. Our mission is simple: to help you
            adapt, achieve, and conquer your industry.
          </span>
        </p>
      </article>
      <figure
        className={clsx(
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
              "!relative object-cover [grid-area:1/1]",
              "rounded-[0.875rem] aspect-square"
            )}
            src={`/images/${url}`}
            alt="about-us"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        ))}
      </figure>
      <svg
        width="930"
        height="479"
        viewBox="0 0 930 479"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          "absolute bottom-0 -left-16 sm:left-auto sm:right-0 h-2/3 -z-10"
        )}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M582 0C260.57 0 0 260.57 0 582H0.932449C17.4908 298.662 252.509 74 540 74H1079V0H582Z"
          fill="#8F00FF"
        />
      </svg>
    </section>
  );
}
