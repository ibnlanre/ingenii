import { MediaQuery, Flex, Box } from "@mantine/core";
import { Card } from "../../components/card";

import DESKTOP_SERVICES from "../../data/services/desktop.json";

export function DesktopServices() {
  return (
    <MediaQuery
      largerThan="lg"
      styles={{
        display: "grid",
      }}
    >
      <Box>
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
      </Box>
    </MediaQuery>
  );
}
