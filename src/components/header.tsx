import { ActionIcon, Drawer, MediaQuery, Stack } from "@mantine/core";
import { ReactNode, useState } from "react";
import { Burger } from "./icons";

import Image from "next/image";
import Link from "next/link";

const NAVIGATION = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/", id: "services" },
  { name: "Products", to: "/", id: "products" },
  { name: "Our approach", to: "/", id: "our-approach" },
  { name: "Testimonials", to: "/", id: "testimonials" },
  { name: "Clients", to: "/", id: "clients" },
  { name: "About us", to: "/about-us" },
  { name: "Contact", to: "/contact" },
];

export function Header() {
  const [drawerProps, setDrawerProps] = useState<{
    isOpened: boolean;
    component: ReactNode;
  }>({
    isOpened: false,
    component: null,
  });

  return (
    <>
      <nav className="flex justify-between py-7 px-2 clump:px-[clamp(8px,5vw,5rem)] max-w-screen-xl mx-auto">
        <Link className="flex-grow" href="/">
          <Image
            className="!relative max-w-[100px]"
            src="/ingenii.png"
            alt="Ingenii Logo"
            fill
          />
        </Link>
        <MediaQuery
          largerThan={875}
          styles={{
            gap: 20,
            display: "flex",
          }}
        >
          <ul>
            {NAVIGATION.map(({ name, id, to }) => {
              const path = {
                pathname: "/",
                hash: id,
              };
              const href = !id ? to : path;

              return (
                <Link key={name} href={href}>
                  <li className="hover:text-violet">{name}</li>
                </Link>
              );
            })}
          </ul>
        </MediaQuery>
        <MediaQuery
          smallerThan={875}
          styles={{
            display: "block",
          }}
        >
          <ActionIcon
            size={30}
            fz={24}
            onClick={() => {
              setDrawerProps({
                isOpened: true,
                component: (
                  <Stack className="text-white" spacing={30}>
                    <p className="text-3xl font-semiboldclump:text-[clamp(1.25rem,3vw,1.875rem)]">
                      Menu
                    </p>
                    <ul className="flex flex-col gap-5">
                      {NAVIGATION.map(({ name, id }) => (
                        <a key={id} href={`#${id}`}>
                          <li
                            style={{
                              backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0) 95%, #FFF 0px)",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="py-1.5 duration-300  bg-[length:_0%_100%] hover:bg-[length:_100%_100%]"
                            key={id}
                          >
                            {name}
                          </li>
                        </a>
                      ))}
                    </ul>
                  </Stack>
                ),
              });
            }}
          >
            <Burger />
          </ActionIcon>
        </MediaQuery>
      </nav>

      <Drawer
        classNames={{
          content:
            "bg-smoky-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50",
          inner: "max-w-[75vw]",
        }}
        withCloseButton={false}
        opened={drawerProps.isOpened}
        onClose={() => setDrawerProps({ isOpened: false, component: null })}
      >
        {drawerProps.component}
      </Drawer>
    </>
  );
}
