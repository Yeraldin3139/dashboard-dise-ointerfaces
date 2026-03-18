"use client";
import { ArrowUpRight } from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/36?img=1",
  "https://i.pravatar.cc/36?img=2",
  "https://i.pravatar.cc/36?img=3",
];

export default function MandatoryPayments() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="font-semibold text-gray-800">Mandatory Payments</p>
          <p className="text-xs text-gray-400">Recent payments</p>
        </div>
        <ArrowUpRight size={16} className="text-gray-400" />
      </div>
      <div className="flex items-center gap-1">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="avatar"
            className="w-9 h-9 rounded-full border-2 border-white object-cover -ml-1 first:ml-0"
          />
        ))}
        <div className="w-9 h-9 rounded-full bg-[#16a34a] text-white text-xs font-bold flex items-center justify-center -ml-1">
          +2
        </div>
      </div>
    </div>
  );
}
