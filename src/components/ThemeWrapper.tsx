"use client";

import { useTheme } from "@/context/ThemeContext";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#0a0a0f] text-gray-100"
          : "bg-[#fafafa] text-gray-900"
      }`}
    >
      {children}
    </div>
  );
};

export default ThemeWrapper;
