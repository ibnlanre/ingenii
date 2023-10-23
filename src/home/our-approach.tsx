import { Fragment } from "react";

import Marquee from "../components/marquee";
import APPROACH from "../data/approach.json";
import Image from "next/image";

// @ts-ignore
// import Marquee from "react-drag-marquee";

export function OurApproach() {

  return (
    <section
      id="our-approach"
      className="flex flex-col gap-20 pt-16 pb-20 bg-lotion"
    >
      <div className="flex flex-col max-w-8xl gap-7 px-2 mx-auto clump:px-[clamp(8px,5vw,5rem)] w-full">
        <h2 className="text-5xl clump:text-[clamp(2.05rem,4vw,3.75rem)] font-bold">
          Our approach
        </h2>
        <p className="text-2xl">
          We focus on delivering strategic insights and data-driven solutions to
          help clients tackle complex challenges.
        </p>
      </div>

      <Marquee>
        <ul className="grid grid-flow-col gap-3 py-8 overflow-hidden auto-cols-auto">
          {APPROACH.map((approach) => {
            return (
              <Fragment key={approach.name}>
                <li className="relative flex flex-col flex-1 gap-3 p-6 w-[405px] max-w-[90vw] shadow-card">
                  <figure className="p-2 rounded-full bg-pale-lavender w-fit">
                    <Image
                      src={`/sprites/${approach.name}.svg`}
                      alt={approach.name}
                      height={24}
                      width={24}
                    />
                  </figure>
                  <h4 className="text-xl font-bold">{approach.character}</h4>
                  <p className="text-lg text-philippine-gray">
                    {approach.description}
                  </p>
                </li>
                <svg
                  width="51"
                  height="25"
                  viewBox="0 0 51 25"
                  className="self-center text-violet"
                >
                  <use xlinkHref="/vectors/arrow.svg#arrow" />
                </svg>
              </Fragment>
            );
          })}
        </ul>
      </Marquee>
    </section>
  );
}
