"use client";

import { ShoppingCart, RefreshCw, List, XCircle, TrendingUp } from "lucide-react";

const stats = [
  { title: "Purchases", value: "0.00 INR", icon: ShoppingCart },
  { title: "Redemptions", value: "0.00 INR", icon: RefreshCw },
  { title: "Reg. Transactions", value: "0.00 INR", icon: List },
  { title: "SIP Rejections", value: "0.00 INR", icon: XCircle },
  { title: "New SIP", value: "0.00 INR", icon: TrendingUp },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
      {stats.map((stat, i) => (
        <div
          key={stat.title}
          className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center"
        >
          <stat.icon className="w-6 h-6 text-red-600 mb-2" />
          <h4 className="text-sm font-medium text-gray-700">{stat.title}</h4>
          <p className="text-gray-900 font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
