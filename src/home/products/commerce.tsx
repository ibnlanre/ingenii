import clsx from "clsx";
import Image from "next/image";

export function Commerce() {
  return (
    <section className="flex flex-wrap gap-x-24 flex-col-reverse md:flex-row gap-y-8 clump:gap-x-[clamp(1rem,5vw,6rem)]">
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
              "list-disc text-2xl list-inside mt-2.5"
            )}
          >
            <li>Boost your conversion up to 94%</li>
            <li>Increase average order value by up to 40%</li>
            <li>Grow customer engagement up to x11</li>
            <li>Decrease returns up to 58%</li>
          </ul>
        </article>

        <div className="flex flex-wrap gap-7">
          <button className="bg-violet rounded-lg px-5 py-2.5 text-white flex">
            Get Quote
          </button>
          <button className="rounded-lg px-5 py-2.5 flex">Find More</button>
        </div>
      </div>

      <figure
        className={clsx(
          "flex-1 aspect-square rounded-[0.875rem] h-fit w-full min-[440px]:w-[clamp(30vw,60vw,100vw)]",
          "bg-gradient-to-b from-vampire-black from-0% to-davys-grey to-100%"
        )}
      >
        <Image
          className="!relative object-cover -rotate-[4deg] rounded-[0.875rem]"
          src="/images/image-16.png"
          alt="point of sale"
          fill
        />
      </figure>
    </section>
  );
}
