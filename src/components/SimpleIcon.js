import React from "react";

/**
 * Convenience wrapper for rendering Simple Icons (https://simpleicons.org/). Icons are stored in `simple-icons.svg`.
 *
 * How to add a new icon:
 * - Download desired icon in SVG format from https://simpleicons.org/
 * - Add new `<symbol>` to `simple-icons.svg`
 * - Copy downloaded svg content (= everything after `</title>` and before `</svg>`) to symbol.
 * */
export default function SimpleIcon({ name, title }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <title>{title}</title>
      <use href={`/simple-icons.svg#${name}`} />
    </svg>
  );
}
