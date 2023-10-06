import { ActionIcon, Avatar, Divider } from "@mantine/core";
import { ComponentProps, ComponentPropsWithoutRef, ReactNode } from "react";

import { Facebook, Instagram, Linkedin, Twitter } from "./icons";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import clsx from "clsx";

const MENU: Array<{ label: string; link: Url }> = [
  {
    label: "Get in touch",
    link: {
      pathname: "/",
      hash: "get-in-touch",
    },
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
    label: "Privacy Policy",
    link: "privacy-policy",
  },
];

const SOCIALS: Array<{
  icon: ReactNode;
  link: string;
}> = [
  {
    icon: <Facebook />,
    link: "mailto:contact@ingeniihq.com",
  },
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/company/ingeniihq/",
  },
  {
    icon: <Twitter width={24} height={25} />,
    link: "https://www.x.com/ingeniihq",
  },
  {
    icon: <Instagram />,
    link: "https://instagram.com/ingeniihq",
  },
];

interface FooterProps extends ComponentPropsWithoutRef<"footer"> {
  socials?: string;
}

export function Footer({
  className = "text-white bg-smoky-black",
  socials = "hover:text-violet hover:bg-white",
}: FooterProps) {
  return (
    <footer className={clsx("pb-6 pt-9", className)}>
      <div className="flex flex-col max-w-screen-xl gap-6 px-2 mx-auto clump:px-[clamp(8px,5vw,5rem)]">
        <section className="flex flex-wrap items-center justify-between gap-x-3.5 gap-y-8">
          <address className="max-w-[20rem] not-italic">
            KM 18, Lekki Epe Expressway, Agungi bus stop, Lekki, Lagos.
          </address>
          <ul className="flex flex-wrap gap-x-8 gap-y-3.5">
            {MENU.map(({ label, link }) => {
              return (
                <Link
                  key={label}
                  className="hover:text-silver-foil"
                  href={link}
                >
                  <li>{label}</li>
                </Link>
              );
            })}
          </ul>
        </section>

        <Divider color="#BBBBBB" />

        <section className="flex items-center justify-between">
          <address className="flex gap-4">
            {SOCIALS.map(({ icon, link }, idx) => {
              return (
                <Link key={idx} href={link}>
                  <figure
                    className={clsx("p-2 rounded-full bg-violet", socials)}
                  >
                    {icon}
                  </figure>
                </Link>
              );
            })}
          </address>

          <Link href="https://www.ingeniihq.com/">
            <ActionIcon w="fit-content" h="fit-content">
              <Avatar src="/ingenii-icon.png" alt="Ingenii Icon" />
            </ActionIcon>
          </Link>
        </section>
      </div>
    </footer>
  );
}
