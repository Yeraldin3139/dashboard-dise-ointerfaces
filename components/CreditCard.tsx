"use client";

export default function CreditCard() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        <div className="bg-gray-100 p-1.5 rounded-lg">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
        </div>
        <span className="font-semibold text-gray-800">Amount of credit</span>
      </div>
      <p className="text-xs text-gray-400 mb-2">Total refund amount with fee</p>
      <div className="flex items-center gap-2">
        <p className="text-3xl font-bold text-gray-900">$8,945.<span className="text-xl">89</span></p>
        <span className="bg-[#dcfce7] text-[#16a34a] text-xs font-semibold px-2 py-1 rounded-full">+12.8%</span>
      </div>
    </div>
  );
}
