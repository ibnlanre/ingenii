import Image from "next/image";

export function Clients() {
  return (
    <section
      id="clients"
      className="flex flex-col max-w-8xl gap-6 py-8 mx-auto place-items-center"
    >
      <h2 className="text-3xl font-bold text-center clump:text-[clamp(1.25rem,3vw,1.875rem)]">
        Clients we have worked with
      </h2>
      <div className="flex flex-wrap gap-x-7 gap-y-2">
        <figure className="w-40 h-16 mx-auto">
          <Image
            width={346}
            height={186}
            src="/clients/keyla.png"
            alt="Keyla logo"
            className="object-contain h-full grayscale"
          />
        </figure>
        <figure className="w-40 h-16 mx-auto">
          <Image
            width={153}
            height={57}
            src="/clients/maishera.png"
            alt="Maishera logo"
            className="object-contain h-full brightness-50"
          />
        </figure>
        <figure className="w-40 h-16 mx-auto">
          <Image
            width={400}
            height={400}
            src="/clients/orvalon-digital.png"
            alt="Orvalon Digital logo"
            className="object-contain h-full grayscale"
          />
        </figure>
        <figure className="w-40 h-16 mx-auto">
          <Image
            width={361}
            height={106}
            src="/clients/koneqtor.png"
            alt="Koneqtor logo"
            className="object-contain h-full grayscale"
          />
        </figure>
      </div>
    </section>
  );
}
