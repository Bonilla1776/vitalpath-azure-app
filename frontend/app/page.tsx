// frontend/app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 text-gray-900">
      {/* Logos */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <motion.img
          src="/ualr-logo.png" // Place in /public
          alt="UALR Logo"
          className="h-14"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        />
        <motion.img
          src="/vitalpath-logo.png" // Place in /public
          alt="VitalPath Logo"
          className="h-16"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        />
      </div>

      {/* Heading */}
      <motion.h1
        className="text-4xl font-extrabold text-center mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Welcome to the VitalPath AI Health Coach 🌿
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg text-center max-w-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        This platform is part of an approved PhD research project at the University of Arkansas at Little Rock.
        For 100 days, you’ll partner with your personal AI Health Coach to explore how <strong>deep personalization</strong>,
        <strong>audio conversations</strong>, and <strong>Motivational Interviewing (MI)</strong> can transform your health and wellbeing.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-6 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <button
          onClick={() => router.push("/register")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
        >
          Join the Study – Sign Up
        </button>
        <button
          onClick={() => router.push("/login")}
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow transition"
        >
          Return User – Log In
        </button>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="text-sm text-gray-600 mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <p>
          VitalPath Innovations, LLC | Research led by John-Eric Bonilla | Department of Information Science,
          UA Little Rock
        </p>
      </motion.div>
    </div>
  );
}
