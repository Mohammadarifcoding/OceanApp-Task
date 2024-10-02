import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...props) {
  return twMerge(clsx(props));
}
