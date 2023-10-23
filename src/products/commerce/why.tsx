import { ComponentProps } from "react";

import Image from "next/image";
import NEED from "../../data/need.json";
import { Flex } from "@mantine/core";

interface CardProps extends ComponentProps<"article"> {
  name: string;
  text: string;
  research: string;
}

export function Card({ text, name, research }: CardProps) {
  return (
    <article className="relative flex flex-col justify-between flex-1 px-8 py-4 rounded-md basis-72 shadow-need">
      <div className="flex flex-col gap-5">
        <figure className="p-2 rounded-full bg-lavender w-fit">
          <Image
            src={`/sprites/${name}.svg`}
            alt={name}
            height={24}
            width={24}
          />
        </figure>
        <h3 className="text-lg font-medium">{text}</h3>
      </div>

      <p className="text-philippine-gray text-sm mt-2.5 text-center">
        {research}
      </p>
    </article>
  );
}

export function Why() {
  return (
    <section className="flex flex-col py-24 gap-y-20 clump:px-[clamp(8px,5vw,5rem)] max-w-8xl mx-auto px-2">
      <h3 className="text-center text-2xl clump:text-[clamp(1.15rem,3vw,1.5rem)] leading-normal">
        Why Does Your Business Need it?
      </h3>

      <Flex wrap="wrap" gap={48}>
        <div className="">
          {NEED.map((need, idx) => (
            <Card key={idx} {...need} />
          ))}
        </div>
      </Flex>
    </section>
  );
}
