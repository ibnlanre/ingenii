import { SVGProps } from "react";

export function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 2.5H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5v-10a5 5 0 00-5-5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 11.87a4 4 0 11-7.914 1.173A4 4 0 0116 11.869zM17.5 7h.01"
      />
    </svg>
  );
}
