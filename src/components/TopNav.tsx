"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Search, Bell, Settings, LogOut, Menu, X, Sun, Moon } from "lucide-react";

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-red-600  text-white dark:text-gray-200 px-6 py-3 flex items-center justify-between shadow-md relative">
      {/* Left Section - Logo + Menu */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          Wealth<span className="text-yellow-300">Elite</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 font-medium text-sm">
          {[
            "Home",
            "CRM",
            "Utilities",
            "Insurance",
            "Assets",
            "Mutual",
            "Research",
            "Transact Online",
            "Goal GPS",
            "Financial Planning",
            "Wealth Report",
            "Other",
          ].map((item) => (
            <li key={item} className="hover:text-yellow-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center space-x-5">
        <Search className="w-5 h-5 cursor-pointer hover:text-yellow-300" />
        <Bell className="w-5 h-5 cursor-pointer hover:text-yellow-300" />
        <Settings className="w-5 h-5 cursor-pointer hover:text-yellow-300" />
        <LogOut className="w-5 h-5 cursor-pointer hover:text-yellow-300" />

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-gray-200" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-red-600 dark:bg-gray-900 shadow-md lg:hidden">
          <ul className="flex flex-col space-y-3 p-4 font-medium text-sm">
            {[
              "Home",
              "CRM",
              "Utilities",
              "Insurance",
              "Assets",
              "Mutual",
              "Research",
              "Transact Online",
              "Goal GPS",
              "Financial Planning",
              "Wealth Report",
              "Other",
            ].map((item) => (
              <li key={item} className="hover:text-yellow-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
