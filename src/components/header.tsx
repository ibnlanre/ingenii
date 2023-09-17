import { ActionIcon, MediaQuery } from "@mantine/core";
import Image from "next/image";

const NAVIGATION = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Products", id: "products" },
  { name: "Our approach", id: "our-approach" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Clients", id: "clients" },
  { name: "About us", id: "about-us" },
  { name: "Contact", id: "contact" },
];

export function Header() {
  return (
    <>
      <nav className="flex justify-between py-7 px-2 clump:px-[clamp(8px,5vw,5rem)] max-w-screen-xl mx-auto">
        <Image
          className="!relative max-w-[100px]"
          src="/ingenii.png"
          alt="Ingenii Logo"
          fill
        />
        <MediaQuery largerThan="lg" styles={{}}>
          <ul className="flex gap-5">
            {NAVIGATION.map(({ name, id }) => (
              <a key={id} href={`#${id}`}>
                <li className="hover:text-violet" key={id}>
                  {name}
                </li>
              </a>
            ))}
          </ul>
        </MediaQuery>
        <MediaQuery smallerThan="lg" styles={{}}>
          <ActionIcon />
          <ul className="flex gap-5">
            {NAVIGATION.map(({ name, id }) => (
              <a key={id} href={`#${id}`}>
                <li className="hover:text-violet" key={id}>
                  {name}
                </li>
              </a>
            ))}
          </ul>
        </MediaQuery>
      </nav>
    </>
  );
}
