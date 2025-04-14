"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-blue-50 px-6 py-10 flex flex-col items-center justify-start text-gray-800">
      <div className="flex justify-between w-full max-w-6xl mb-10">
        <Image src="/ualr-logo.png" alt="UA Little Rock Logo" width={120} height={120} />
        <Image src="/vitalpath-logo.png" alt="VitalPath Logo" width={120} height={120} />
      </div>

      <h1 className="text-4xl font-bold text-center mb-2">
        Welcome to VitalPath AI Health Coach 🌿
      </h1>
      <h2 className="text-xl text-center mb-6 text-blue-700 font-medium">
        Begin Your 100-Day Transformation Journey
      </h2>

      <p className="max-w-3xl text-center mb-4">
        Imagine having a supportive companion by your side, available anytime, dedicated to your wellbeing and personal growth. That’s exactly what you’ve found.
      </p>
      <p className="max-w-3xl text-center mb-4">
        As part of a groundbreaking research project at the University of Arkansas at Little Rock, you're about to embark on a 100-day journey that can transform how you approach health and wellbeing.
      </p>
      <p className="max-w-3xl text-center mb-4">
        Your AI Health Coach listens deeply, responds thoughtfully, and guides you through meaningful conversations that evolve with your needs. This isn’t just another app—it’s a relationship that celebrates your victories and helps navigate challenges.
      </p>
      <p className="max-w-3xl text-center mb-4">
        The magic happens in the back-and-forth of real conversation, where insights emerge, motivation builds, and lasting change takes root.
      </p>
      <p className="max-w-3xl text-center mb-6 font-semibold">
        Are you ready to discover what you’re truly capable of?
      </p>

      <div className="flex space-x-4">
        <Link href="/register">
          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Join the Study – Sign Up
          </button>
        </Link>
        <Link href="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Return User – Log In
          </button>
        </Link>
      </div>

      <p className="mt-10 text-sm text-center text-gray-600">
        VitalPath Innovations, LLC | Research led by John-Eric Bonilla | Department of Information Science, UA Little Rock
      </p>
    </main>
  );
}


