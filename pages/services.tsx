import { Flex } from "@mantine/core";

import { Footer, Header } from "../src/components";
import { Services } from "../src/home";
import { Service } from "../src/home/services/service";

import DESKTOP_SERVICES from "../src/data/services/desktop.json";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <Services>
        <Flex wrap="wrap" gap={48}>
          {DESKTOP_SERVICES.map(({ service, name, description }) => {
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
      </Services>
      <Footer />
    </main>
  );
}
