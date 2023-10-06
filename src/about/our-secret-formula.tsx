import { Stack } from "@mantine/core";
import clsx from "clsx";
import Image from "next/image";

export function OurSecretFormula() {
  const images = [
    {
      url: "img1.jpeg",
      rotate: 4,
    },
    {
      url: "img4.jpeg",
      rotate: -4,
    },
  ];

  return (
    <section
      className={clsx(
        "flex relative md:gap-x-6 px-2 clump:px-[clamp(8px,5vw,5rem)] items-center",
        "max-w-screen-xl mx-auto flex-col-reverse sm:flex-row overflow-hidden py-11"
      )}
    >
      <article className="flex flex-col sm:basis-7/12 gap-3.5">
        <h3 className="text-3xl font-bold clump:text-[clamp(1.5rem,3vw,1.875rem)] text-smoky-black leading-normal">
          Our secret formula
        </h3>
        <Stack className="text-2xl clump:text-[clamp(1.15rem,3vw,1.5rem)] text-philippine-gray leading-normal lighten mix-blend-hard-light">
          <p>
            What sets us apart is not just our exceptional services, but also
            our unwavering dedication to your satisfaction. We forge strong
            partnerships built on trust, transparency, and mutual growth.
            Together, we can unlock new opportunities, outpace the competition,
            and achieve lasting success.
          </p>
          <p>
            Choose Ingenii as your business and technology development partner
            and unlock the true potential of your enterprise. Let's embark on
            this transformative journey together and create a future where your
            business thrives and flourishes.
          </p>
        </Stack>
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
            fill
          />
        ))}
      </figure>
      <svg
        width="422"
        height="452"
        viewBox="0 0 422 452"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          "absolute bottom-0 -left-16 sm:left-auto sm:right-0 h-2/3 -z-10"
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
