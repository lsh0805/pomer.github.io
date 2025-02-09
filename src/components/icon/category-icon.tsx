import type {SVGProps} from "react";
import * as React from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 700 1000"
    {...props}
  >
    <path
      d="M682 256c12 5.333 18 14.667 18 28v562c0 9.333-4 17.667-12 25-8 7.333-17.333 11-28 11-30.667 0-46-12-46-36V324c0-8-4-14-12-18L198 90c-21.333-6.667-44-3.333-68 10-29.333 13.333-48 28-56 44l408 228c12 5.333 18 14.667 18 28v550c0 14.667-6 24-18 28-4 2.667-9.333 4-16 4-9.333 0-16-1.333-20-4-5.333-4-72.667-46.333-202-127S44 726.667 32 720c-17.333-12-26-23.333-26-34L0 162c0-18.667 4.667-36 14-52 18.667-30.667 52.667-56.333 102-77s88-23.667 116-9l450 232"/>
  </svg>
);
export {SvgComponent as IconCategory};
