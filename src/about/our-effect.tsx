import clsx from "clsx";
import Image from "next/image";

export function OurEffect() {
  const images = [
    {
      url: "img1.jpeg",
      rotate: 10,
    },
    {
      url: "image-13.png",
      rotate: 2,
    },
  ];

  return (
    <div className="bg-ghost-white">
      <section
        className={clsx(
          "flex relative md:gap-x-6 px-2 clump:px-[clamp(8px,5vw,5rem)] items-center",
          "max-w-8xl mx-auto flex-col sm:flex-row overflow-hidden py-11"
        )}
      >
        <figure
          className={clsx(
            "overflow-visible grid sm:basis-5/12 bg-transparent w-full self-center",
            "sm:mr-14 sm:clump:mr-[clamp(0px,4vw,3.5rem)] sm:my-14 sm:clump:my-[clamp(0px,4vw,3.5rem)]",
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
              alt="our-effect"
              fill
            />
          ))}
        </figure>

        <article className="flex flex-col sm:basis-7/12 gap-3.5">
          <h3 className="text-3xl font-bold clump:text-[clamp(1.5rem,3vw,1.875rem)] text-smoky-black leading-normal">
            Our effect
          </h3>
          <p className="text-2xl clump:text-[clamp(1.15rem,3vw,1.5rem)] text-philippine-gray leading-normal">
            With our expertise in business and technology, we bring a fresh
            perspective and innovative solutions to propel your growth. We
            understand the challenges you face, and we're here to guide you
            every step of the way.{" "}
            <span className="text-violet">
              From strategic planning to seamless technology integration
            </span>
            , we collaborate closely with you to unleash your full potential.
          </p>
        </article>
      </section>
    </div>
  );
}
