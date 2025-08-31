import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-sky-100 text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold text-orange-500">404</h1>
      <h2 className="text-lg md:text-2xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-3 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded-xl shadow hover:bg-orange-600 transition"
      >
        🔙 Go Back Home
      </Link>
    </div>
  );
}
