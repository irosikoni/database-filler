"use client";

import { useState } from "react";
import { Dropdown } from "../components/Dropdown/Dropdown";

export default function Example() {
  const data = ["item1", "item2", "item3"];
  const [activeElement, setActiveElement] = useState<string | null>(null);
  console.log(activeElement);
  return (
    <Dropdown
      element={activeElement}
      elements={data}
      setActiveElement={setActiveElement}
    />
  );
}
