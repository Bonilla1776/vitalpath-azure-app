'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-indigo-100 to-white px-6 py-10 text-gray-800">
      {/* Header Logos */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <Image src="/ualr-logo.png" alt="UA Little Rock Logo" width={160} height={160} />
        <Image src="/vitalpath-logo.png" alt="VitalPath Logo" width={180} height={180} />
      </div>

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-4"
      >
        Welcome to VitalPath AI Health Coach 🌿
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg md:text-xl text-center max-w-3xl mb-6"
      >
        Begin your 100-Day Transformation Journey
      </motion.p>

      {/* Intro Paragraphs */}
      <div className="max-w-3xl space-y-4 text-center mb-8 text-gray-700 text-base md:text-lg">
        <p>
          Imagine having a supportive companion by your side, available anytime, dedicated to your wellbeing and personal growth.
          That’s exactly what you’ve found.
        </p>
        <p>
          As part of a groundbreaking research project at the University of Arkansas at Little Rock,
          you're about to embark on a 100-day journey that can transform how you approach health and wellbeing.
        </p>
        <p>
          Your AI Health Coach listens deeply, responds thoughtfully, and guides you through
          meaningful conversations that evolve with your needs. This isn't just another app—
          it’s a relationship that celebrates your victories and helps navigate challenges.
        </p>
        <p>
          The magic happens in the back-and-forth of real conversation, where insights emerge,
          motivation builds, and lasting change takes root.
        </p>
        <p className="font-semibold text-indigo-700">
          Are you ready to discover what you’re truly capable of?
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => router.push('/register')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow transition transform hover:-translate-y-1"
        >
          Join the Study – Sign Up
        </button>
        <button
          onClick={() => router.push('/login')}
          className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg shadow transition transform hover:-translate-y-1"
        >
          Return User – Log In
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500 text-center">
        VitalPath Innovations, LLC | Research led by John-Eric Bonilla | Department of Information Science, UA Little Rock
      </footer>
    </main>
  );
}


