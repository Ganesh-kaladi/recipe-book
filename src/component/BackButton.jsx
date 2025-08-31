import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      class="text-xs sm:text-sm md:text-lg mb-5 flex items-center gap-2 px-6 py-1 md:py-[0.34rem] rounded-lg bg-gradient-to-r from-orange-400 to-teal-400 text-white font-semibold shadow-md hover:shadow-lg hover:from-orange-600 hover:to-teal-600 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back
    </button>
  );
}

export default BackButton;
