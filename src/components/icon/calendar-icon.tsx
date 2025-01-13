import type {SVGProps} from "react";
import * as React from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill={props.color}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={32}
      d="M96 80h320a48 48 0 0 1 48 48v288a48 48 0 0 1-48 48H96a48 48 0 0 1-48-48V128a48 48 0 0 1 48-48z"
    />
    <path
      d="M320 232a24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 48 0zM400 232a24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 48 0zM320 312a24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 48 0zM400 312a24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 48 0zM160 312a24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 48 0zM240 312a24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 48 0zM160 392a24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 48 0zM240 392a24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 48 0zM320 392a24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 48 0z"/>
    <path
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M128 48v32m256-32v32"
    />
    <path
      fill="none"
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={32}
      d="M464 160H48"
    />
  </svg>
);
export {SvgComponent as IconCalendar};
