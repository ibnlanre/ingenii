import Image from "next/image";

interface ServiceProps {
  service: string;
  name: string;
  description: string;
}

export function Service({ service, name, description }: ServiceProps) {
  return (
    <article key={service} className="relative flex-1 text-white basis-56">
      <figure className="p-2 bg-white rounded-full w-fit">
        <Image
          src={`./sprites/${name}.svg`}
          alt={name}
          height={24}
          width={24}
        />
      </figure>
      <h3 className="text-lg font-bold mt-3.5">{service}</h3>
      <p className="text-philippine-gray text-sm mt-2.5">{description}</p>
    </article>
  );
}
