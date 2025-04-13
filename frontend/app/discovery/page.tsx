// frontend/app/discovery/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const goalsList = [
  "Longevity",
  "Stress reduction",
  "Weight management",
  "Better sleep quality",
  "Build strength and muscle",
  "Increase daily energy",
  "Healthier nutrition",
  "Improve mental health and resilience",
  "Boost cardiovascular fitness",
  "Explore new activities/hobbies",
];

export default function DiscoveryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    age: 30,
    gender: "",
    heightFeet: "5",
    heightInches: "6",
    weight: 160,
    location: "",
    maritalStatus: "",
    goals: ["", "", ""],
    otherGoal: "",
    wellness: {
      fulfillment: 50,
      happiness: 50,
      energy: 50,
      stress: 50,
      sleep: 50,
      activity: 50,
      nutrition: 50,
      purpose: 50,
      motivation: 50,
      confidence: 50,
    },
  });

  const handleSliderChange = (key: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      wellness: { ...prev.wellness, [key]: value },
    }));
  };

  const handleSubmit = async () => {
    console.log("Form data submitted", formData);
    router.push("/dashboard");
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-6 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center"
      >
        Welcome to Your Health Journey!
      </motion.h1>
      <p className="text-center text-gray-600">
        We’re excited you’re here. Your honest answers will help us tailor your coaching experience.
      </p>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="First Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <div>
          <label>Age: {formData.age}</label>
          <input type="range" min={18} max={100} value={formData.age} onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })} />
        </div>
        <select required value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Non-binary</option>
          <option>Prefer not to say</option>
        </select>
        <div className="flex space-x-2">
          <select value={formData.heightFeet} onChange={(e) => setFormData({ ...formData, heightFeet: e.target.value })}>
            {Array.from({ length: 4 }, (_, i) => i + 4).map((ft) => (
              <option key={ft}>{ft}</option>
            ))}
          </select>
          <select value={formData.heightInches} onChange={(e) => setFormData({ ...formData, heightInches: e.target.value })}>
            {Array.from({ length: 12 }, (_, i) => i).map((inch) => (
              <option key={inch}>{inch}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Weight (lbs): {formData.weight}</label>
          <input type="range" min={70} max={325} value={formData.weight} onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })} />
        </div>
        <input placeholder="Zip Code or City" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
        <select value={formData.maritalStatus} onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}>
          <option value="">Marital Status (optional)</option>
          <option>Single</option>
          <option>Married</option>
          <option>Divorced</option>
          <option>Widowed</option>
          <option>Separated</option>
          <option>In a Relationship</option>
          <option>Prefer not to say</option>
        </select>
      </div>

      {/* Health Goals */}
      <div className="space-y-2">
        <h2 className="font-semibold">Select and rank your top 3 health goals:</h2>
        {[0, 1, 2].map((idx) => (
          <select key={idx} value={formData.goals[idx]} onChange={(e) => {
            const newGoals = [...formData.goals];
            newGoals[idx] = e.target.value;
            setFormData({ ...formData, goals: newGoals });
          }}>
            <option value="">Select goal #{idx + 1}</option>
            {goalsList.map((goal) => (
              <option key={goal}>{goal}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        ))}
        {formData.goals.includes("Other") && (
          <input placeholder="Other goal" value={formData.otherGoal} onChange={(e) => setFormData({ ...formData, otherGoal: e.target.value })} />
        )}
      </div>

      {/* Wellness Sliders */}
      <div className="space-y-4">
        <h2 className="font-semibold">How do you feel today? (0–100)</h2>
        {Object.entries(formData.wellness).map(([key, val]) => (
          <div key={key}>
            <label className="block capitalize">{key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ")}: {val}</label>
            <input type="range" min={0} max={100} value={val} onChange={(e) => handleSliderChange(key, Number(e.target.value))} className="w-full" />
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-8 w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit & Continue →
      </button>
    </div>
  );
}
