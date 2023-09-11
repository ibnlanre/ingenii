

export function Commerce() {
  return (
    <section className="flex flex-wrap gap-x-12">
      <div className="flex flex-col gap-14">
        <article className="text-philippine-gray">
          <h3 className="text-4xl font-bold text-violet">AR for E-commerce</h3>
          <p className="mt-5 text-xl">
            Revolutionize your customers' shopping experience with Augmented
            Reality/3D models for your online store.
          </p>
          <ul className="list-disc text-2xl list-inside mt-2.5">
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

      <div className="flex-1 basis-16 mt-36">
        <figure></figure>
      </div>
    </section>
  );
}
