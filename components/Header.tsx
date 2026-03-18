"use client";
import { Search, Bell, Calendar, Plus } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-2">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome Back, <span className="text-gray-400 font-normal">Sujon</span>
      </h1>
      <div className="flex gap-3 items-center">
        <button className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 bg-white shadow-sm">
          <Calendar size={14} />
          29 Jun, 2025 - 29 August, 2025
          <span className="ml-1 text-gray-400">▾</span>
        </button>
        <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
          <Plus size={14} /> Add New Wallet
        </button>
        <Search size={18} className="text-gray-400 cursor-pointer" />
        <Bell size={18} className="text-gray-400 cursor-pointer" />
        <img src="https://i.pravatar.cc/36?img=12" className="rounded-full w-9 h-9 object-cover" alt="avatar" />
      </div>
    </div>
  );
}
