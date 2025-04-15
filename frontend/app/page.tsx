// /frontend/app/page.tsx (your landing dashboard page)
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 text-gray-800 flex flex-col items-center justify-center p-4 md:p-10 font-sans animate-fadeIn">
      <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
        <Image
          src="/ualr-logo.png"
          alt="UA Little Rock Logo"
          width={150}
          height={150}
          className="rounded-md shadow-md animate-fadeIn delay-100"
        />
        <Image
          src="/vitalpath-logo.png"
          alt="VitalPath Logo"
          width={150}
          height={150}
          className="rounded-md shadow-md animate-fadeIn delay-200"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-slideUp">
        Welcome to <span className="text-primary">VitalPath</span> <span className="inline-block">🌿</span>
      </h1>

      <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 text-gray-700 animate-slideUp delay-200">
        Begin Your 100-Day AI Coaching Journey
      </h2>

      <div className="text-center max-w-3xl space-y-4 text-gray-600 animate-fadeIn delay-300">
        <p>
          Your personal AI Health Coach is here to listen, inspire, and support you in achieving sustainable well-being.
          This is more than an app — it’s a relationship.
        </p>
        <p>
          Through thoughtful conversation powered by cutting-edge motivational interviewing, you'll unlock deeper purpose,
          overcome roadblocks, and celebrate progress.
        </p>
        <p className="text-lg font-medium text-gray-800">
          Ready to explore what’s possible when technology truly cares?
        </p>
      </div>

      <div className="mt-8 flex gap-4 flex-wrap justify-center animate-fadeIn delay-500">
        <Link
          href="/register"
          className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/80 transition"
        >
          Join the Study → Sign Up
        </Link>
        <Link
          href="/login"
          className="border border-primary text-primary px-6 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition"
        >
          Return User → Log In
        </Link>
      </div>

      <footer className="mt-12 border-t pt-4 text-center text-sm text-gray-500 animate-fadeIn delay-700">
        VitalPath Innovations, LLC • Research led by John-Eric Bonilla • UA Little Rock
      </footer>
    </main>
  );
}




