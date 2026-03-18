"use client";
import { LayoutGrid, BarChart2, Wallet, CreditCard, MessageSquare, Calendar, Settings, LogOut } from "lucide-react";

const topIcons = [LayoutGrid, BarChart2, Wallet, CreditCard, MessageSquare, Calendar];
const bottomIcons = [Settings, LogOut];

export default function Sidebar() {
  return (
    <div className="w-[72px] bg-white rounded-3xl flex flex-col items-center py-6 gap-5 shadow-sm mx-3 my-3">
      {/* Logo */}
      <div className="bg-[#16a34a] text-white p-2 rounded-xl mb-2">
        <LayoutGrid size={20} />
      </div>
      <div className="flex flex-col gap-5 flex-1">
        {topIcons.slice(1).map((Icon, i) => (
          <Icon key={i} size={20} className="text-gray-300 cursor-pointer hover:text-[#16a34a] transition-colors" />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        {bottomIcons.map((Icon, i) => (
          <Icon key={i} size={20} className="text-gray-300 cursor-pointer hover:text-[#16a34a] transition-colors" />
        ))}
      </div>
    </div>
  );
}
