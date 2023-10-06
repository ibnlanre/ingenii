import { Text } from "@mantine/core";
import { ComponentProps } from "react";

export function Subtext({ children }: ComponentProps<"p">) {
  return (
    <Text
      component="h2"
      className="clump:text-[clamp(1.5rem,4vw,2.25rem)] clump:leading-[clamp(2rem,3vw,2.5rem)] text-4xl font-semibold"
    >
      {children}
    </Text>
  );
}
