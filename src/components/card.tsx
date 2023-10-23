import { ComponentProps } from "react";

import Image from "next/image";
import clsx from "clsx";

interface CardProps extends ComponentProps<"article"> {
  title: string;
  name: string;
  description: string;
}

export function Card({ title, name, description, className }: CardProps) {
  return (
    <article className={clsx("relative flex-1 text-white basis-56", className)}>
      <figure className="p-2 bg-white rounded-full w-fit">
        <Image src={`/sprites/${name}.svg`} alt={name} height={24} width={24} />
      </figure>
      <h3 className="text-lg font-bold mt-3.5">{title}</h3>
      <p className="text-philippine-gray text-sm mt-2.5">{description}</p>
    </article>
  );
}
