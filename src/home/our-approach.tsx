"use client";

import { Fragment, useEffect } from "react";
import { m, useAnimate } from "framer-motion";

import APPROACH from "../data/approach.json";
import Image from "next/image";

export function OurApproach() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      { transitionX: -2000 },
      { ease: "linear", repeat: Infinity }
    );
  }, []);

  return (
    <section className="flex flex-col gap-20 pt-16 pb-20 bg-lotion">
      <div className="flex flex-col max-w-screen-xl gap-7 px-2 mx-auto clump:px-[clamp(8px,5vw,5rem)]">
        <h2 className="text-5xl font-bold">Our approach</h2>
        <p className="text-2xl">
          We focus on delivering strategic insights and data-driven solutions to
          help clients tackle complex challenges.
        </p>
      </div>
      <m.ul
        ref={scope}
        className="grid auto-cols-[405px_auto] grid-flow-col overflow-hidden py-8 gap-3"
      >
        {APPROACH.map((approach) => {
          return (
            <Fragment key={approach.name}>
              <li className="relative flex flex-col flex-1 gap-3 p-6 w-[405px] max-w-full shadow-card">
                <figure className="p-2 rounded-full bg-pale-lavender w-fit">
                  <Image
                    src={`./sprites/${approach.name}.svg`}
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
      </m.ul>
    </section>
  );
}
