import { Flex } from "@mantine/core";

import { Card } from "../../components/card";
import CHANNELS from "../../data/channels.json";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-smoky-black">
      <div className="py-14 px-2 relative clump:px-[clamp(8px,5vw,5rem)] max-w-8xl mx-auto gap-16 flex flex-col">
        <svg
          width="598"
          height="582"
          viewBox="0 0 598 582"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-7/12 h-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 0C337.43 0 598 260.57 598 582H597.125C581.062 298.191 345.829 73 58 73H-481V0H16Z"
            fill="#8F00FF"
            fillOpacity="0.21"
          />
        </svg>

        <svg
          width="719"
          height="429"
          viewBox="0 0 719 429"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 w-8/12 h-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M582 0C260.57 0 0 260.57 0 582H0.874929C16.9381 298.191 252.171 73 540 73H1079V0H582Z"
            fill="#8F00FF"
            fillOpacity="0.21"
          />
        </svg>
        <h2 className="text-5xl clump:text-[clamp(2.05rem,4vw,3.75rem)] font-bold text-white text-center">
          Multi-channel retail made easy
        </h2>
        {children}
      </div>
    </section>
  );
}

export function MultiChannel() {
  return (
    <Layout>
      <Flex wrap="wrap" gap={48}>
        {CHANNELS.map(({ service, name, description }) => {
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
    </Layout>
  );
}
