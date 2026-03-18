"use client";
import { ArrowUpRight } from "lucide-react";

export default function PaymentGoalCard() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="font-semibold text-gray-800">Payment Goal</p>
          <p className="text-xs text-gray-400">Total amount goal</p>
        </div>
        <ArrowUpRight size={16} className="text-gray-400" />
      </div>

      {/* Visa Card */}
      <div className="bg-[#16a34a] rounded-2xl p-4 text-white mb-4">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-lg tracking-wide">VISA</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M1 6h22M1 10h22M5 6v12M19 6v12"/></svg>
        </div>
        <p className="text-xs opacity-70 mb-1">Credit Card</p>
        <p className="text-2xl font-bold">$ 78,989.09</p>
        <div className="flex justify-between mt-3 text-xs opacity-70">
          <span>•••• 909090</span>
          <span>EXP 09/26</span>
        </div>
      </div>

      {/* Weekly Revenue */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-400">Weekly Revenue</p>
          <p className="text-xl font-bold text-gray-800">+3,945 USD</p>
        </div>
        <span className="bg-[#dcfce7] text-[#16a34a] text-xs font-semibold px-2 py-1 rounded-full">+12.8%</span>
      </div>
    </div>
  );
}
