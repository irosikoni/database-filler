"use client";

import { useState } from "react";

type DropdownProps = {
  elements: string[];
  element: string | null;
  setActiveElement: (element: string | null) => void;
  placeholderValue?: string;
};

export function Dropdown({
  elements,
  element,
  setActiveElement,
  placeholderValue,
}: DropdownProps) {
  const [search, setSearch] = useState<string | null>(null);
  return (
    <div className="flex flex-col items-center justify-center">
      {element && (
        <span className="text-2xl font-bold">Active element: {element}</span>
      )}
      <input
        className="w-12 m-2"
        placeholder={placeholderValue ?? ""}
        onChange={(e) => setSearch(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setActiveElement(search);
          }
        }}
      />
      <div>
        <ul className="flex flex-col items-center justify-center">
          {elements
            .filter((e) => e.includes(search ?? ""))
            .map((element) => (
              <li
                key={element}
                onClick={() => setActiveElement(element)}
                className="w-12 m-2"
              >
                {element}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
