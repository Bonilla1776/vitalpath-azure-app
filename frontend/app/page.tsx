// frontend/app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-green-50 to-white text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-green-800">
          Welcome to VitalPath AI Health Coach 🌿
        </h1>
        <p className="text-xl font-medium mb-2 text-gray-700">
          Begin Your 100-Day Transformation Journey
        </p>
        <p className="text-md mb-4 text-gray-600">
          Imagine a companion that listens deeply, supports your growth, and helps you become your best self—available 24/7. That’s your AI Health Coach.
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-md text-gray-600 mb-6"
        >
          This isn’t just another app. As part of a research project at the University of Arkansas at Little Rock, you’ll experience what’s possible when advanced AI, Motivational Interviewing (MI), and real conversation combine to create real change.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => router.push("/register")}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded shadow-md transition-transform hover:-translate-y-0.5"
          >
            Join the Study – Sign Up
          </button>
          <button
            onClick={() => router.push("/login")}
            className="px-8 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded shadow-md transition-transform hover:-translate-y-0.5"
          >
            Return User – Log In
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-6 italic">
          VitalPath Innovations, LLC | Research led by John-Eric Bonilla | Department of Information Science, UA Little Rock
        </p>
      </motion.div>
    </main>
  );
}

