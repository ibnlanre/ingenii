export function Intro() {
  return (
    <section>
      <h1>
        Revolutionary shopping experience with AR/3D models for online store
      </h1>
      <ul>
        {[
          ["Boost your conversion up to", "94%"],
          ["Increase average order value up to", "40%"],
          ["Grow customer engagement up to", "x11"],
          ["Decrease returns up to", "58%"],
        ].map(([item, retention], idx) => (
          <li key={idx} className="flex gap-4">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6.5L9 17.5L4 12.5"
                stroke="#8300EB"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="font-semibold leading-normal text-philippine-gray">
              {item}
              <span className="text-violet">{retention}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
