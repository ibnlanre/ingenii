import clsx from "clsx";
import Image from "next/image";

function KnowYourBest() {
  return (
    <section
      className={clsx(
        "flex flex-col-reverse md:items-center flex-wrap md:flex-row max-w-5xl",
        "gap-x-4 gap-y-8 clump:gap-x-[clamp(1rem,2vw,6rem)] ml-auto"
      )}
    >
      <article className="flex flex-col sm:basis-1/2 gap-3.5 text-smoky-black">
        <h3 className="text-3xl font-bold clump:text-[clamp(1.5rem,3vw,1.875rem)] leading-normal text-violet">
          Know your best and least sellers
        </h3>
        <p className="text-2xl clump:text-[clamp(1.15rem,3vw,1.5rem)] text-philippine-gray leading-normal">
          Feel confident that you have a winning lineup of best-sellers to meet
          demand. Both online and in-store sales automatically update inventory
          in POS, so there's no question about what's in-stock or when to
          re-order.
        </p>
      </article>

      <figure
        className={clsx(
          "flex-1 grid aspect-square h-fit w-full max-w-[400px] md:max-w-[500px]",
          "p-5 clump:py-[clamp(1.25rem,2vw,3.5rem)] clump:px-[clamp(0rem,2vw,3.5rem)] sm:p-0",
          "md:m-14 ml-0 md:clump:my-[clamp(1.25rem,8vw,3.5rem)] md:clump:mx-[clamp(0rem,6vw,3.5rem)]"
        )}
      >
        <div className="[grid-area:1/1] bg-gradient-to-b from-vampire-black from-0% to-davys-grey to-100% rounded-[0.875rem] rotate-2" />
        <Image
          className="!relative object-cover [grid-area:1/1] -rotate-[4deg] rounded-[0.875rem]"
          src="/images/image-15.png"
          alt="point of sale"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </figure>
    </section>
  );
}

function Reporting() {
  return (
    <section
      className={clsx(
        "flex flex-col md:items-center flex-wrap md:flex-row max-w-5xl",
        "gap-x-4 gap-y-8 clump:gap-x-[clamp(1rem,2vw,6rem)]"
      )}
    >
      <figure
        className={clsx(
          "flex-1 grid aspect-square h-fit w-full max-w-[400px] md:max-w-[500px]",
          "p-5 clump:py-[clamp(1.25rem,2vw,3.5rem)] clump:px-[clamp(0rem,2vw,3.5rem)] sm:p-0",
          "md:m-14 ml-0 md:clump:my-[clamp(1.25rem,8vw,3.5rem)] md:clump:mx-[clamp(0rem,6vw,3.5rem)]"
        )}
      >
        <div className="[grid-area:1/1] bg-gradient-to-b from-vampire-black from-0% to-davys-grey to-100% rounded-[0.875rem] rotate-2" />
        <Image
          className="!relative object-cover [grid-area:1/1] -rotate-[4deg] rounded-[0.875rem]"
          src="/images/image-6.jpeg"
          alt="point of sale"
          fill
        />
      </figure>

      <article className="flex flex-col sm:basis-1/2 gap-3.5 text-smoky-black">
        <h3 className="text-3xl font-bold clump:text-[clamp(1.5rem,3vw,1.875rem)] leading-normal text-violet">
          Get 360-degree reporting
        </h3>
        <p className="text-2xl clump:text-[clamp(1.15rem,3vw,1.5rem)] text-philippine-gray leading-normal">
          Manage your entire shop in real time. View, track, and report on
          anything you need, from sales and inventory, to customer behavior, to
          P&L. All in one place. Anytime you need to know.
        </p>
      </article>
    </section>
  );
}

function PeaceOfMind() {
  return (
    <section
      className={clsx(
        "flex flex-col-reverse md:items-center flex-wrap md:flex-row max-w-5xl",
        "gap-x-4 gap-y-8 clump:gap-x-[clamp(1rem,2vw,6rem)] ml-auto"
      )}
    >
      <article className="flex flex-col sm:basis-1/2 gap-3.5 text-smoky-black">
        <h3 className="text-3xl font-bold clump:text-[clamp(1.5rem,3vw,1.875rem)] leading-normal text-violet">
          Delegate with peace of mind
        </h3>
        <p className="text-2xl clump:text-[clamp(1.15rem,3vw,1.5rem)] text-philippine-gray leading-normal">
          Set permissions to control staff access in your POS system. When they
          can do their jobs efficiently, they have more time to sell—and you can
          rest assured that your proprietary information is secure.
        </p>
      </article>

      <figure
        className={clsx(
          "flex-1 grid aspect-square h-fit w-full max-w-[400px] md:max-w-[500px]",
          "p-5 clump:py-[clamp(1.25rem,2vw,3.5rem)] clump:px-[clamp(0rem,2vw,3.5rem)] sm:p-0",
          "md:m-14 ml-0 md:clump:my-[clamp(1.25rem,8vw,3.5rem)] md:clump:mx-[clamp(0rem,6vw,3.5rem)]"
        )}
      >
        <div className="[grid-area:1/1] bg-gradient-to-b from-vampire-black from-0% to-davys-grey to-100% rounded-[0.875rem] rotate-2" />
        <Image
          className="!relative object-cover [grid-area:1/1] -rotate-[4deg] rounded-[0.875rem]"
          src="/images/image-5.png"
          alt="point of sale"
          fill
        />
      </figure>
    </section>
  );
}

export function Details() {
  return (
    <div className="py-14 px-2 text-davys-gray clump:px-[clamp(8px,5vw,5rem)] max-w-8xl mx-auto flex flex-col gap-20">
      <header className="flex flex-col gap-5 text-center">
        <h2 className="text-4xl font-bold text-violet">
          Know more, Sell more with our POS Solution
        </h2>
        <p className="text-2xl">
          Sales are tracked, inventory is updated and customer files are current
        </p>
      </header>

      <div className="flex flex-col gap-16 md:gap-0">
        <KnowYourBest />
        <Reporting />
        <PeaceOfMind />
      </div>
    </div>
  );
}
