"use client";
import { ArrowUpRight } from "lucide-react";

const payments = [
  {
    name: "Dribbble Design",
    change: "+18.67%",
    date: "16 Jun 2025",
    time: "10: 30 PM",
    status: "Successful",
    amount: "89, 345. 23 USD",
    icon: "🏀",
    color: "bg-pink-100",
  },
  {
    name: "Google Pay",
    change: "+9.34%",
    date: "15 Jun 2025",
    time: "11: 45 PM",
    status: "Successful",
    amount: "12, 345. 89 USD",
    icon: "G",
    color: "bg-blue-100",
  },
  {
    name: "Amazon Shopping",
    change: "+12.23%",
    date: "14 Jun 2025",
    time: "10: 15 PM",
    status: "Successful",
    amount: "32, 123. 67 USD",
    icon: "a",
    color: "bg-orange-100",
  },
];

export default function PaymentHistory() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="font-semibold text-gray-800">Payment History</p>
          <p className="text-xs text-gray-400">Recent payments history</p>
        </div>
        <ArrowUpRight size={16} className="text-gray-400" />
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400 text-xs border-b border-gray-100">
            <th className="text-left pb-2 font-normal">Name</th>
            <th className="text-left pb-2 font-normal">Date</th>
            <th className="text-left pb-2 font-normal">Time</th>
            <th className="text-left pb-2 font-normal">Status</th>
            <th className="text-right pb-2 font-normal">Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p, i) => (
            <tr key={i} className="border-b border-gray-50 last:border-0">
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${p.color} flex items-center justify-center text-sm font-bold`}>
                    {p.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-xs">{p.name}</p>
                    <p className="text-[#16a34a] text-xs">{p.change}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 text-gray-500 text-xs">{p.date}</td>
              <td className="py-3 text-gray-500 text-xs">{p.time}</td>
              <td className="py-3 text-xs">
                <span className="flex items-center gap-1 text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] inline-block"></span>
                  {p.status}
                </span>
              </td>
              <td className="py-3 text-right text-gray-700 text-xs font-medium">{p.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
