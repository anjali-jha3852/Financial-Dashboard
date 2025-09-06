"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function Charts() {
  const data = [
    { month: "Jan", aum: 4000, sip: 2400 },
    { month: "Feb", aum: 5000, sip: 1398 },
    { month: "Mar", aum: 6000, sip: 9800 },
    { month: "Apr", aum: 7000, sip: 3908 },
    { month: "May", aum: 8000, sip: 4800 },
  ];

  return (
    <div className="w-full my-8 px-2 md:overflow-visible overflow-x-auto">
      <div className="flex flex-row gap-10 min-w-[1200px] md:min-w-0 w-full">
        {/* AUM Growth */}
        <div className="flex flex-col flex-1 bg-white rounded-xl shadow p-6 justify-between h-80 min-w-[360px]">
          <h3 className="text-center font-semibold mb-3 text-lg text-gray-700">AUM Growth</h3>
          <div className="flex-1 min-h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="aum"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  isAnimationActive={true}
                  animationDuration={1200}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SIP Trends */}
        <div className="flex flex-col flex-1 bg-white rounded-xl shadow p-6 justify-between h-80 min-w-[360px]">
          <h3 className="text-center font-semibold mb-3 text-lg text-gray-700">SIP Trends</h3>
          <div className="flex-1 min-h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="sip"
                  fill="#10b981"
                  isAnimationActive={true}
                  animationDuration={1200}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Clients */}
        <div className="flex flex-col flex-1 bg-white rounded-xl shadow p-6 justify-between h-80 min-w-[360px]">
          <h3 className="text-center font-semibold mb-3 text-lg text-gray-700">Clients</h3>
          <div className="flex justify-around items-center flex-1">
            <div className="w-20 h-20 bg-red-500 text-white flex items-center justify-center rounded-full font-bold text-base shadow">541</div>
            <div className="w-32 h-32 bg-gray-700 text-white flex items-center justify-center rounded-full font-bold text-base shadow">3824</div>
            <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full font-bold text-sm shadow">2</div>
            <div className="w-14 h-14 bg-yellow-500 text-white flex items-center justify-center rounded-full font-bold text-sm shadow">60</div>
          </div>
          <div className="flex justify-center gap-4 mt-3 text-sm text-gray-600">
            <div className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>  Medium</div>
            <div className="flex items-center gap-1"><span className="w-3 h-3 bg-gray-700 rounded-full inline-block"></span>High </div>
            <div className="flex items-center gap-1"><span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span> Low</div>
            <div className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span> New</div>
          </div>
        </div>
      </div>
    </div>
  );
}
