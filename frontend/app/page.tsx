// frontend/app/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleRegister = () => router.push("/register");
  const handleLogin = () => router.push("/login");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to VitalPath 🌿</h1>
      <p className="mb-4 text-center">Start your journey by registering or signing in.</p>
      <div className="space-x-4">
        <button
          onClick={handleRegister}
          className="px-6 py-2 bg-blue-600 text-white rounded"
        >
          Register
        </button>
        <button
          onClick={handleLogin}
          className="px-6 py-2 bg-gray-700 text-white rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
