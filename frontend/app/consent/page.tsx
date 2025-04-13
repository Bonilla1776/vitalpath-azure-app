"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";

export default function ConsentPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!agreed) {
      setError("You must agree to participate to proceed.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/consent", { consented: true, version: "v1.0" });
      router.push("/discovery");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-xl rounded-2xl max-w-4xl w-full p-6 overflow-hidden"
      >
        <div className="mb-6">
          <p className="text-sm text-gray-500 font-medium">Step 2 of 3</p>
          <h1 className="text-2xl font-bold text-gray-800 mt-1">
            Informed Consent Form
          </h1>
          <p className="text-gray-600 text-sm">
            Please read carefully before proceeding.
          </p>
        </div>

        <div className="h-[400px] overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50 text-sm text-gray-800 space-y-3">
          <p><strong>Title of Study:</strong> AI-Driven Motivational Interviewing...</p>
          <p><strong>Introduction:</strong> You are invited to participate in...</p>
          <p><strong>Key Information:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Purpose: To develop and evaluate...</li>
            <li>Eligibility: You must be 18 or older...</li>
            <li>What You Will Do: Provide demographics, setup coach, interact weekly...</li>
            <li>Risks: Minimal...</li>
            <li>Benefits: Improved health behaviors, advancing digital health research...</li>
          </ul>
          <p><strong>Study Details:</strong> This research explores...</p>
          <p><strong>Procedures:</strong></p>
          <ol className="list-decimal list-inside ml-4">
            <li>Initial Setup (20–30 minutes)</li>
            <li>Weekly AI coach interactions</li>
            <li>Optional surveys & interviews</li>
          </ol>
          <p><strong>Risks and Discomforts:</strong> Minimal, primarily confidentiality...</p>
          <p><strong>Potential Benefits:</strong> Personal & societal benefits...</p>
          <p><strong>Confidentiality and Data Security:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Secure encrypted storage, limited access...</li>
            <li>3-year minimum data retention...</li>
            <li>Email not fully secure — use caution.</li>
          </ul>
          <p><strong>Your Rights:</strong> You may ask questions, stop at any time...</p>
          <p><strong>IRB & Contacts:</strong></p>
          <ul className="list-inside ml-4">
            <li>John-Eric Bonilla, jbonilla@ualr.edu</li>
            <li>Prof. Xiaowei Xu, xwxu@ualr.edu</li>
            <li>IRB: 501-916-6209, irb@ualr.edu</li>
          </ul>
        </div>

        <div className="mt-4 flex items-start space-x-2">
          <input
            id="agree"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1"
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            I am at least 18 years old and I agree to participate in this study.
          </label>
        </div>

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

        <button
          onClick={handleSubmit}
          disabled={!agreed || loading}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-all duration-200 disabled:opacity-50"
        >
          {loading ? "Processing..." : "I Agree → Continue to Discovery"}
        </button>
      </motion.div>
    </div>
  );
}

