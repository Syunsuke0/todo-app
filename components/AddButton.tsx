import React, { MouseEventHandler } from "react";

export const AddButton: React.FC<{
  add: React.MouseEventHandler<SVGSVGElement>;
}> = ({ add }) => {
  return (
    <svg
      onClick={add}
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-md outline outline-sky-500 icon icon-tabler icon-tabler-plus shrink-0 px-2 cursor-pointer"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      stroke-width="4.5"
      stroke="#00abfb"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
};
