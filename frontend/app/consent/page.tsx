// frontend/app/consent/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ConsentPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!agreed) {
      setError("You must agree to participate.");
      return;
    }
    try {
      setLoading(true);
      await axios.post(
        "/api/consent",
        { consented: true, version: "v1.0" },
        { withCredentials: true }
      );
      router.push("/discovery");
    } catch (err: any) {
      setError("Error submitting consent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Informed Consent Form</h1>
      <div className="bg-white p-6 shadow rounded mb-4 space-y-2 max-h-[500px] overflow-y-auto border">
        <p><strong>Title:</strong> AI-Driven Motivational Interviewing: A Scalable Digital Health Coaching Model...</p>
        <p>Introduction...</p>
        <p>[Insert full consent text or embed scrollable content here]</p>
      </div>
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="consent"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <label htmlFor="consent">
          I am 18 or older and I agree to participate in this study.
        </label>
      </div>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      <button
        onClick={handleSubmit}
        disabled={loading || !agreed}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {loading ? "Submitting..." : "I Agree"}
      </button>
    </div>
  );
}
