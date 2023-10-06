import { MediaQuery, Flex, Stack, clsx } from "@mantine/core";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Service } from "./service";

import TABLET_SERVICES from "../../data/services/tablet.json";
import Link from "next/link";

export function TabletServices() {
  return (
    <MediaQuery
      smallerThan="lg"
      largerThan="sm"
      styles={{
        position: "relative",
        display: "grid",
      }}
    >
      <Stack spacing={48}>
        <Flex wrap="wrap" gap={48}>
          {TABLET_SERVICES.map(({ service, name, description }) => {
            return (
              <Service
                key={service}
                service={service}
                name={name}
                description={description}
              />
            );
          })}
        </Flex>

        <Link href="/services">
          <button
            className={clsx(
              "rounded-lg px-5 py-2.5 flex gap-0.5 items-center w-fit",
              "bg-white text-smoky-black hover:bg-pale-lavender"
            )}
          >
            Find More <ArrowRightIcon />
          </button>
        </Link>
      </Stack>
    </MediaQuery>
  );
}
