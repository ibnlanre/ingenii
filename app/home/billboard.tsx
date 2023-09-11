export function Billboard() {
  return (
    <section className="flex relative gap-6 px-2 clump:px-[clamp(8px,5vw,5rem)] max-w-screen-xl mx-auto">
      <article className="flex flex-col basis-7/12 gap-6 self-center py-[clamp(1rem,8vw,7.5rem)]">
        <h2 className="text-6xl font-bold">
          <span className="">Enabling Business Success in a</span>{" "}
          <span className="text-violet mix-blend-difference">
            Dynamic Landscape
          </span>
        </h2>
        <p className="text-lg lighten">
          We empower businesses to conquer the ever-changing business and
          technology landscape, achieve their goals, and thrive in fiercely
          competitive industries through comprehensive services.
        </p>
      </article>
      <div className="grid overflow-visible basis-5/12">
        <figure className="[grid-area:1/1]"></figure>
      </div>
      <svg
        width="739"
        height="423"
        viewBox="0 0 739 423"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 bottom-0 h-2/3 sm:clump:mr-[clamp(8px,5vw,5rem)] -z-10"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M582 0C260.57 0 0 260.57 0 582H0.874929C16.9381 298.191 252.171 73 540 73H1079V0H582Z"
          fill="#8F00FF"
        />
      </svg>
    </section>
  );
}
