import { modals } from "@mantine/modals";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { GetQuotePointOfSale, RequestDemoPointOfSale } from "../../forms";

import clsx from "clsx";

export function Retail() {
  return (
    <div>
      <section className="relative flex flex-col gap-6 mx-auto overflow-hidden text-center place-items-center py-36 bg-begonia">
        <svg
          width="643"
          height="410"
          viewBox="0 0 643 410"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-auto h-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M61 0C382.43 0 643 260.57 643 582H642.125C626.062 298.191 390.829 73 103 73H-436V0H61Z"
            fill="#8F00FF"
            fillOpacity="0.54"
          />
        </svg>

        <svg
          width="1042"
          height="82"
          viewBox="0 0 1042 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 w-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M582 0C260.57 0 0 260.57 0 582H0.874929C16.9381 298.191 252.171 73 540 73H1079V0H582Z"
            fill="#8F00FF"
            fillOpacity="0.54"
          />
        </svg>

        <svg
          width="502"
          height="390"
          viewBox="0 0 502 390"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full -right-1/3"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M582 0C260.57 0 0 260.57 0 582H0.874929C16.9381 298.191 252.171 73 540 73H1079V0H582Z"
            fill="#8F00FF"
            fillOpacity="0.54"
          />
        </svg>

        <h3 className="relative text-3xl font-bold">
          Powerful POS. Smarter retail.
        </h3>
        <div className="relative flex flex-wrap gap-4">
          <button
            onClick={() => {
              modals.open({
                withCloseButton: false,
                children: <GetQuotePointOfSale />,
              });
            }}
            className={clsx(
              "hover:text-davys-grey bg-violet hover:bg-white text-white",
              "focus-visible:outline-none py-2.5 px-5 cursor-pointer rounded-md"
            )}
          >
            Get Quote
          </button>

          <button
            onClick={() => {
              modals.open({
                withCloseButton: false,
                children: <RequestDemoPointOfSale />,
              });
            }}
            className={clsx(
              "rounded-lg px-5 py-2.5 flex gap-0.5 items-center",
              "hover:bg-smoky-black hover:text-white"
            )}
          >
            Request Demo <ArrowRightIcon />
          </button>
        </div>
      </section>
    </div>
  );
}
