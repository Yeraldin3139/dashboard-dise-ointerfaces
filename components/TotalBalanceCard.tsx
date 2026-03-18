"use client";
import { ArrowUpRight } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const sparkData = [
  { v: 30 }, { v: 20 }, { v: 35 }, { v: 25 }, { v: 40 }, { v: 30 }, { v: 45 }, { v: 35 },
];

export default function TotalBalanceCard() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <div className="flex justify-between items-start mb-1">
        <div>
          <p className="font-semibold text-gray-800">Payment Goal</p>
          <p className="text-xs text-gray-400">Total amount goal</p>
        </div>
        <ArrowUpRight size={16} className="text-gray-400" />
      </div>
      <p className="text-xs text-gray-400 mt-3">Total Balance</p>
      <p className="text-3xl font-bold text-gray-900 mb-3">$32,678.<span className="text-xl">90</span></p>
      <ResponsiveContainer width="100%" height={60}>
        <AreaChart data={sparkData}>
          <defs>
            <linearGradient id="balGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip hide />
          <Area type="monotone" dataKey="v" stroke="#16a34a" strokeWidth={2} fill="url(#balGrad)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex gap-3 mt-3">
        <button className="flex-1 bg-[#16a34a] text-white rounded-full py-2 text-sm font-medium flex items-center justify-center gap-1">
          Send <span className="text-xs">↑</span>
        </button>
        <button className="flex-1 bg-gray-100 text-gray-600 rounded-full py-2 text-sm font-medium flex items-center justify-center gap-1">
          Receive <span className="text-xs">↓</span>
        </button>
      </div>
    </div>
  );
}
