"use client";

import { useState } from "react";

const tabs = ["3 Days", "7 Days", "10 Days", "30 Days"];

export default function FilterBar() {
  const [activeTab, setActiveTab] = useState("3 Days");

  return (
    <div className="bg-white shadow-md rounded-lg p-3 flex items-center justify-between mt-3">
      {/* Tabs */}
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-md text-sm font-medium transition ${
              activeTab === tab
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* View Report Button */}
      <button className="text-sm text-red-600 font-medium hover:underline">
        View Report
      </button>
    </div>
  );
}
