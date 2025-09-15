import { Link } from "react-router-dom";

export default function VersionSelector() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 transition-colors">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Choose Your Experience
      </h1>
      <div className="flex gap-6">
        <Link
          to="/v1"
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition"
        >
          🍔 Version 1 (Burger)
        </Link>
        <Link
          to="/v2"
          className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition"
        >
          ✨ Version 2 (Premium)
        </Link>
      </div>
    </div>
  );
}
