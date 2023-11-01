import { Flex } from "@mantine/core";

import { Footer, Header } from "../src/components";
import { Services } from "../src/home";
import { Card } from "../src/components/card";

import DESKTOP_SERVICES from "../src/data/services/desktop.json";

export default function ServicesPage() {
  return (
    <main>
      <Header title="Services" />
      <Services>
        <Flex wrap="wrap" gap={48}>
          {DESKTOP_SERVICES.map(({ service, name, description }) => {
            return (
              <Card
                key={service}
                title={service}
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
