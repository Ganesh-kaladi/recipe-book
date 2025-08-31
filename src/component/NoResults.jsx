export default function NoResults({ text }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-teal-500 text-white shadow-lg mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-orange-600 mb-2">
        No Recipes Found
      </h2>
      <p className="text-gray-600 text-center max-w-md">
        We couldn’t find any recipes for&nbsp;
        <span className="font-semibold text-teal-600">“{text}”</span>. <br />
        Try searching with another name.
      </p>
    </div>
  );
}
