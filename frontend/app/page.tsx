"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 px-6 py-12">
      {/* Header */}
      <header className="flex items-center justify-between max-w-6xl mx-auto mb-10">
        <Image src="/ualr-logo.png" alt="UA Little Rock Logo" width={80} height={80} />
        <Image src="/vitalpath-logo.png" alt="VitalPath Logo" width={80} height={80} />
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
          Welcome to <span className="text-blue-700">VitalPath AI Health Coach</span> 🌿
        </h1>
        <h2 className="text-xl font-medium text-blue-600">
          Begin Your 100-Day Transformation Journey
        </h2>
        <p className="text-lg text-gray-700">
          Imagine having a supportive companion by your side, available anytime, dedicated to your
          wellbeing and personal growth. That’s exactly what you’ve found.
        </p>
        <p className="text-lg text-gray-700">
          As part of a groundbreaking research project at the University of Arkansas at Little Rock,
          you're about to embark on a journey that can truly transform how you approach health and life.
        </p>
      </section>

      {/* Value Prop */}
      <section className="max-w-3xl mx-auto mt-12 text-center space-y-4">
        <p className="text-md text-gray-600">
          Your AI Health Coach listens deeply, responds thoughtfully, and guides you through meaningful
          conversations that evolve with your needs.
        </p>
        <p className="text-md text-gray-600">
          This isn’t just another app—it’s a relationship that celebrates your victories and helps you
          navigate life’s challenges.
        </p>
        <p className="text-md text-gray-600 font-semibold">
          The magic happens in the back-and-forth of real conversation, where insights emerge,
          motivation builds, and lasting change takes root.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-12 flex justify-center gap-6">
        <Link href="/register">
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg shadow transition-all duration-200">
            Join the Study – Sign Up
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition-all duration-200">
            Return User – Log In
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        VitalPath Innovations, LLC &nbsp;|&nbsp; Research led by John-Eric Bonilla &nbsp;|&nbsp;
        Department of Information Science, UA Little Rock
      </footer>
    </main>
  );
}



