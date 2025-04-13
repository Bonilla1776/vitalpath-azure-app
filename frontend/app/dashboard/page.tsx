// app/dashboard/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      <p className="text-gray-600">Track your progress and connect with your AI Health Coach.</p>

      <div className="flex flex-wrap gap-4">
        {/* Example metric cards */}
        {["Energy", "Sleep Quality", "Stress"].map((metric) => (
          <div key={metric} className="bg-white shadow p-4 rounded w-48">
            <h3 className="text-lg font-medium">{metric}</h3>
            <p className="text-2xl font-bold text-blue-600">--</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => router.push("/coach")}
        className="mt-6 bg-green-600 text-white px-8 py-3 rounded"
      >
        Start AI Coaching Session
      </button>
    </div>
  );
}
