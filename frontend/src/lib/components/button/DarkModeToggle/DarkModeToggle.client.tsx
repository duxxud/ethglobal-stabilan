"use client";

import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

export function DarkModeToggle() {
  const { isDarkMode, toggle } = useDarkMode();
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <button type="button" onClick={toggle}>
      {!isDarkMode ? "⬛" : "🐻‍❄️"}
    </button>
  );
}
