"use client";

import { ArrowRightIcon, CaretDownIcon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import clsx from "clsx";

export function PointOfSale() {
  return (
    <section className="flex flex-col flex-wrap gap-x-24 md:flex-row gap-y-8 clump:gap-x-[clamp(1rem,5vw,6rem)]">
      <figure
        className={clsx(
          "flex-1 aspect-square rounded-[0.875rem] h-fit w-full min-[440px]:w-[clamp(30vw,60vw,100vw)]",
          "bg-gradient-to-b from-vampire-black from-0% to-davys-grey to-100%"
        )}
      >
        <Image
          className="!relative object-cover -rotate-[4deg] rounded-[0.875rem]"
          src="/images/image-7.png"
          alt="point of sale"
          fill
        />
      </figure>

      <div className="flex flex-col flex-1 gap-14">
        <article className="text-philippine-gray">
          <h3
            className={clsx(
              "clump:text-[clamp(1.5rem,4vw,2.25rem)] clump:leading-[clamp(2rem,3vw,2.5rem)]",
              "text-4xl font-bold text-violet"
            )}
          >
            Point-of-Sale System for Retail & Hospitality Businesses
          </h3>
          <p className="mt-5 text-xl">
            See more, Know more, and Sell more with our modern and integrated
            POS solution.
          </p>
          <ul
            className={clsx(
              "clump:text-[clamp(1rem,2vw,1.5rem)] clump:leading-[clamp(1.25rem,3vw,2rem)]",
              "list-disc text-2xl list-inside mt-2.5"
            )}
          >
            <li>Faster checkouts, happier customers</li>
            <li>Streamlined inventory management</li>
            <li>Sophisticated retail analytics</li>
            <li>Next-generation-ready payment</li>
            <li>Online. In-store. All in one.</li>
            <li>Multiple store capability</li>
          </ul>
        </article>

        <div className="flex flex-wrap gap-7">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                aria-label="Get Qoute"
                className="bg-violet IconButton rounded-lg px-5 py-2.5 text-white flex gap-0.5 items-center"
              >
                Get Quote
                <CaretDownIcon />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                side="bottom"
                sideOffset={5}
                className="grid gap-0.5"
              >
                <DropdownMenu.Item className="focus-visible:outline-none p-2.5 text-davys-grey hover:bg-violet/10 cursor-pointer rounded-lg">
                  Request Demo
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus-visible:outline-none p-2.5 text-davys-grey hover:bg-violet/10 cursor-pointer rounded-lg">
                  Get Quote
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <button className="rounded-lg px-5 py-2.5 flex gap-0.5 items-center">
            Find More <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
