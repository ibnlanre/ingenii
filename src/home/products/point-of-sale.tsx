import { ArrowRightIcon, CaretDownIcon } from "@radix-ui/react-icons";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { Menu } from "@mantine/core";

import { GetQuotePointOfSale, RequestDemoPointOfSale } from "../../forms";

import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export function PointOfSale() {
  const [getQuoteOpened, { toggle }] = useDisclosure(false);

  return (
    <section className="flex flex-col md:items-center flex-wrap gap-x-4 md:flex-row gap-y-8 clump:gap-x-[clamp(1rem,2vw,6rem)]">
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
              "list-disc text-2xl ml-4 mt-2.5"
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

        <div className="flex flex-wrap gap-4">
          <Menu
            width="target"
            opened={getQuoteOpened}
            onChange={toggle}
            offset={5}
            position="bottom"
            shadow="21.22677px 21.22677px 42.45354px 0px rgba(0, 0, 0, 0.10)"
            withArrow
          >
            <Menu.Target>
              <button
                aria-label="Get Qoute"
                className={clsx(
                  "rounded-lg px-5 py-2.5 flex gap-0.5 items-center",
                  "bg-violet text-white hover:bg-smoky-black"
                )}
              >
                Get Quote
                <CaretDownIcon
                  className={clsx("duration-300", {
                    "-rotate-180": getQuoteOpened,
                  })}
                />
              </button>
            </Menu.Target>
            <Menu.Dropdown className="grid gap-0.5 rounded-lg">
              <Menu.Item
                onClick={() => {
                  modals.open({
                    withCloseButton: false,
                    children: <RequestDemoPointOfSale />,
                  });
                }}
                className={clsx(
                  "hover:text-davys-grey hover:bg-violet/10 text-silver-foil",
                  "focus-visible:outline-none p-2.5 cursor-pointer rounded-md"
                )}
              >
                Request Demo
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  modals.open({
                    withCloseButton: false,
                    children: <GetQuotePointOfSale />,
                  });
                }}
                className={clsx(
                  "hover:text-davys-grey hover:bg-violet/10 text-silver-foil",
                  "focus-visible:outline-none p-2.5 cursor-pointer rounded-md"
                )}
              >
                Get Quote
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Link
            href={{
              pathname: "/products/point-of-sale",
            }}
          >
            <button
              className={clsx(
                "rounded-lg px-5 py-2.5 flex gap-0.5 items-center",
                "hover:bg-smoky-black hover:text-white"
              )}
            >
              Find More <ArrowRightIcon />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
