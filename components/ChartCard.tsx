"use client";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { ArrowUpRight } from "lucide-react";

const data = [
  { name: "JAN", value: 2000 },
  { name: "FEB", value: 4000 },
  { name: "MAR", value: 3000 },
  { name: "APR", value: 5000 },
  { name: "MAY", value: 3500 },
  { name: "JUN", value: 4200 },
];

export default function ChartCard() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 p-1.5 rounded-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          </div>
          <span className="font-semibold text-gray-800">Engagement Rate</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-sm text-gray-400 px-3 py-1 rounded-full">Monthly</button>
          <button className="text-sm text-white bg-[#16a34a] px-3 py-1 rounded-full">Annually</button>
          <ArrowUpRight size={16} className="text-gray-400" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barCategoryGap="30%">
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
          <Tooltip
            cursor={false}
            contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
          />
          <Bar dataKey="value" radius={[10, 10, 10, 10]} maxBarSize={40}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.name === "APR" ? "#16a34a" : "#bbf7d0"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
