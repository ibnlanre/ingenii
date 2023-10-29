import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import type { AppProps } from "next/app";

import { FavIcon } from "../src/components";
import "../src/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        components: {
          Text: {
            styles: {
              root: {
                lineHeight: "normal",
              },
            },
          },
          Modal: {
            styles: {
              content: {
                flexBasis: 640,
                borderRadius: 8,
              },
              inner: {
                alignItems: "center",
                paddingInline: "3vw",
              },
            },
          },
          FileInput: {
            styles: {
              label: {
                fontWeight: "normal",
                color: "#4C433C",
              },
              input: {
                color: "#4C433C",
              },
              placeholder: {
                color: "#AA9D94 !important",
              },
            },
          },
          Select: {
            styles: {
              required: {
                color: "#8300EB",
              },
              label: {
                fontWeight: "normal",
                color: "#4C433C",
              },
              item: {
                borderRadius: 6,
                wordBreak: "keep-all",

                "&[data-hovered]": {
                  backgroundColor: "#D8D2CE",
                },

                "&[data-selected]": {
                  backgroundColor: "#E4D3F1",
                  color: "#0F0F0F",

                  "&:hover": {
                    backgroundColor: "#8F00FF",
                    color: "white",
                  },
                },
              },
              dropdown: {
                borderColor: "#D8D2CE",
                borderRadius: 10,
              },
              rightSection: {
                pointerEvents: "none",
              },
            },
          },
          Button: {
            styles: {
              root: {
                borderRadius: 10,
                "&:hover": {
                  backgroundColor: "#8F00FF",
                },
              },
            },
          },
          TextInput: {
            styles: {
              required: {
                color: "#8300EB",
              },
              label: {
                fontWeight: "normal",
                color: "#4C433C",
              },
            },
          },
          InputWrapper: {
            styles: {
              required: {
                color: "#8300EB",
              },
              label: {
                fontWeight: "normal",
                color: "#4C433C",
              },
            },
          },
          Input: {
            styles: {
              label: {
                fontWeight: "normal",
                color: "#4C433C",
              },
              input: {
                color: "#4C433C",
                height: "auto",
                minHeight: "min-content",
                paddingBlock: 20,
                paddingInline: 18,
                lineHeight: "normal",
                borderColor: "#D8D2CE",
                borderRadius: 10,

                "::placeholder": {
                  color: "#AA9D94",
                },

                "&:is(:focus,:focus-within)": {
                  borderColor: "#8F00FF",
                },
              },
            },
          },
          MediaQuery: {
            styles: {
              media: {
                display: "none",
              },
            },
          },
        },
      }}
    >
      <FavIcon />
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
  );
}
