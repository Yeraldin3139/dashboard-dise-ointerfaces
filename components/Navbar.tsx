"use client";
import { Search, Bell } from "lucide-react";

const navLinks = ["Dashboard", "Reports", "Documents", "History", "Contacts"];

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-100">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-[#16a34a] text-white p-1.5 rounded-lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
        </div>
        <span className="font-bold text-gray-800 text-lg">Quixotic</span>
      </div>

      {/* Nav links */}
      <nav className="flex gap-6">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className={`text-sm ${link === "Dashboard" ? "font-semibold text-gray-900 border border-gray-200 rounded-full px-4 py-1.5" : "text-gray-500 hover:text-gray-800"}`}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Right icons */}
      <div className="flex items-center gap-4">
        <Search size={18} className="text-gray-400 cursor-pointer" />
        <Bell size={18} className="text-gray-400 cursor-pointer" />
        <img src="https://i.pravatar.cc/36?img=12" className="rounded-full w-9 h-9 object-cover" alt="avatar" />
        <span className="text-gray-400 text-sm">▾</span>
      </div>
    </div>
  );
}
