import { ArrowRightIcon, CaretDownIcon } from "@radix-ui/react-icons";
import { useDisclosure } from "@mantine/hooks";
import { Menu } from "@mantine/core";
import { modals } from "@mantine/modals";

import {
  GetQuoteAugmentedReality,
  RequestDemoAugmentedReality,
} from "../../forms";

import Image from "next/image";
import clsx from "clsx";

export function Commerce() {
  const [getQuoteOpened, { toggle }] = useDisclosure(false);

  return (
    <section className="flex flex-col-reverse md:items-center flex-wrap gap-x-4 md:flex-row gap-y-8 clump:gap-x-[clamp(1rem,2vw,6rem)]">
      <div className="flex flex-col flex-1 gap-14 clump:gap-[clamp(1rem,3vw,3.5rem)]">
        <article className="text-philippine-gray">
          <h3
            className={clsx(
              "clump:text-[clamp(1.5rem,4vw,2.25rem)] clump:leading-[clamp(2rem,3vw,2.5rem)]",
              "text-4xl font-bold text-violet"
            )}
          >
            AR for E-commerce
          </h3>
          <p className="mt-5 text-xl">
            Revolutionize your customers' shopping experience with Augmented
            Reality/3D models for your online store.
          </p>
          <ul
            className={clsx(
              "clump:text-[clamp(1rem,2vw,1.5rem)] clump:leading-[clamp(1.25rem,3vw,2rem)]",
              "list-disc text-2xl ml-4 mt-2.5"
            )}
          >
            <li>Boost your conversion up to 94%</li>
            <li>Increase average order value by up to 40%</li>
            <li>Grow customer engagement up to x11</li>
            <li>Decrease returns up to 58%</li>
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
                  "IconButton bg-violet text-white hover:bg-smoky-black"
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
                    children: <RequestDemoAugmentedReality />,
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
                    children: <GetQuoteAugmentedReality />,
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

          <button
            className={clsx(
              "rounded-lg px-5 py-2.5 flex gap-0.5 items-center",
              "hover:bg-smoky-black hover:text-white"
            )}
          >
            Find More <ArrowRightIcon />
          </button>
        </div>
      </div>

      <figure
        className={clsx(
          "flex-1 grid aspect-square h-fit w-full max-w-[500px]",
          "p-5 clump:py-[clamp(1.25rem,2vw,3.5rem)] clump:px-[clamp(0rem,2vw,3.5rem)] sm:p-0",
          "md:m-5 mr-0 md:clump:my-[clamp(1.25rem,8vw,3.5rem)] md:clump:ml-[clamp(0rem,6vw,3.5rem)]"
        )}
      >
        <div className="[grid-area:1/1] bg-gradient-to-b from-vampire-black from-0% to-davys-grey to-100% rounded-[0.875rem] rotate-2" />
        <Image
          className="!relative object-cover [grid-area:1/1] -rotate-[4deg] rounded-[0.875rem]"
          src="/images/image-16.png"
          alt="point of sale"
          fill
        />
      </figure>
    </section>
  );
}
