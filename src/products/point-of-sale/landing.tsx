import { modals } from "@mantine/modals";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { RequestDemoPointOfSale, GetQuotePointOfSale } from "../../forms";

import Image from "next/image";
import clsx from "clsx";

export function Landing() {
  return (
    <section
      className={clsx(
        "py-14 pt-6 md:pt-0 px-2 relative clump:px-[clamp(8px,5vw,5rem)] mx-auto",
        "max-w-8xl flex flex-col-reverse md:items-center flex-wrap md:flex-row",
        "gap-y-16 clump:gap-x-[clamp(1rem,2vw,6rem)] gap-x-4"
      )}
    >
      <div className="flex flex-col flex-1 gap-14 gap-y-[clamp(1.5rem,3vw,3.5rem)]">
        <article className="flex flex-col gap-10 gap-y-[clamp(1rem,2vw,2.5rem)] text-davys-grey">
          <h2
            className={clsx(
              "clump:text-[clamp(1.5rem,4vw,2.25rem)] clump:leading-[clamp(2rem,3vw,2.5rem)]",
              "text-4xl font-bold text-violet"
            )}
          >
            Point-of-Sale System for Retail & Hospitality Businesses
          </h2>
          <p className="text-xl">
            Looking for new POS, a modern, integrated retail solution with tools
            to sell everywhere - all managed from one place.
          </p>
        </article>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => {
              modals.open({
                withCloseButton: false,
                children: <GetQuotePointOfSale />,
              });
            }}
            className={clsx(
              "hover:text-davys-grey bg-violet hover:bg-violet/10 text-white",
              "focus-visible:outline-none py-2.5 px-5 cursor-pointer rounded-md"
            )}
          >
            Get Quote
          </button>

          <button
            onClick={() => {
              modals.open({
                withCloseButton: false,
                children: <RequestDemoPointOfSale />,
              });
            }}
            className={clsx(
              "rounded-lg px-5 py-2.5 flex gap-0.5 items-center",
              "hover:bg-smoky-black hover:text-white"
            )}
          >
            Request Demo <ArrowRightIcon />
          </button>
        </div>
      </div>

      <figure
        className={clsx(
          "flex-1 grid aspect-square h-fit w-full max-w-[400px] md:max-w-[500px]",
          "p-5 clump:py-[clamp(1.25rem,2vw,3.5rem)] clump:px-[clamp(0rem,2vw,3.5rem)] sm:p-0",
          "md:m-5 ml-0 md:clump:my-[clamp(1.25rem,8vw,3.5rem)] md:clump:mr-[clamp(0rem,6vw,3.5rem)]"
        )}
      >
        <div className="[grid-area:1/1] bg-gradient-to-b from-vampire-black from-0% to-davys-grey to-100% rounded-[0.875rem] rotate-2" />
        <Image
          className="!relative object-cover [grid-area:1/1] -rotate-[4deg] rounded-[0.875rem]"
          src="/images/image-7.png"
          alt="point of sale"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </figure>
    </section>
  );
}
