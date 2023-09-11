"use client";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  CaretDownIcon,
} from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function PointOfSale() {
  return (
    <section className="flex flex-wrap gap-12">
      <div className="flex-1 basis-16">
        <figure></figure>
      </div>

      <div className="flex flex-col flex-1 gap-14 basis-16">
        <article className="text-philippine-gray">
          <h3 className="text-4xl font-bold text-violet">
            Point-of-Sale System for Retail & Hospitality Businesses
          </h3>
          <p className="mt-5 text-xl">
            See more, Know more, and Sell more with our modern and integrated
            POS solution.
          </p>
          <ul className="list-disc text-2xl mt-2.5 list-inside">
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
              <DropdownMenu.Content side="bottom" sideOffset={5} className="grid gap-0.5">
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
