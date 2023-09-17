import { Divider } from "@mantine/core";
import { Facebook, Instagram, Linkedin, Twitter } from "./icons";
import Link from "next/link";
import { ComponentProps, ReactNode, SVGProps } from "react";

const MENU = [
  {
    label: "Get in touch",
    link: "",
  },
  {
    label: "About Us",
    link: "about-us",
  },
  {
    label: "Contact Us",
    link: "contact-us",
  },
  {
    label: "Terms of use",
    link: "terms-of-use",
  },
  {
    label: "Privacy Statement",
    link: "privacy-statement",
  },
];

const SOCIALS: Array<{
  icon: ReactNode;
  link: string;
}> = [
  {
    icon: <Facebook />,
    link: "",
  },
  {
    icon: <Linkedin />,
    link: "",
  },
  {
    icon: <Twitter width={24} height={25} />,
    link: "",
  },
  {
    icon: <Instagram />,
    link: "",
  },
];

export function Footer() {
  return (
    <footer className="pb-6 text-white bg-smoky-black pt-9">
      <div className="flex flex-col max-w-screen-xl gap-6 px-2 mx-auto clump:px-[clamp(8px,5vw,5rem)]">
        <section className="flex flex-wrap items-center justify-between gap-3.5">
          <address className="max-w-[20rem] not-italic">
            KM 18, Lekki Epe Expressway, Agungi bus stop, Lekki, Lagos.
          </address>
          <ul className="flex flex-wrap gap-8">
            {MENU.map(({ label, link }) => {
              return (
                <Link className="hover:text-silver-foil" href={link}>
                  <li>{label}</li>
                </Link>
              );
            })}
          </ul>
        </section>

        <Divider color="#BBBBBB" />

        <address className="flex gap-4">
          {SOCIALS.map(({ icon, link }, idx) => {
            return (
              <Link key={idx} href={link}>
                <figure className="p-2 rounded-full bg-violet hover:text-violet hover:bg-white">
                  {icon}
                </figure>
              </Link>
            );
          })}
        </address>
      </div>
    </footer>
  );
}
