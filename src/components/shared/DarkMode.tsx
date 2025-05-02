"use client";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <div onClick={() => console.log("kko")}>Light</div>
      <div onClick={() => setTheme("dark")}>Dark</div>
    </div>
  );
}
