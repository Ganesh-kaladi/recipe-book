import { Link, useLocation } from "react-router-dom";

function Aside() {
  const { pathname } = useLocation();
  return (
    <div class="mb-4 md:h-full md:bg-white md:rounded-xl md:shadow-lg">
      <ul class="py-2 md:p-5 flex justify-center md:flex-col gap-5">
        <li
          class={`text-xs sm:text:sm md:text-lg font-semibold p-2  md:rounded-lg md:shadow-sm  md:hover:shadow-md transition-all duration-300 ${
            pathname === "/search"
              ? `md:bg-teal-100 md:hover:bg-teal-200`
              : `md:bg-orange-100 md:hover:bg-orange-200`
          }`}
        >
          <Link
            to="search"
            className={` ${
              pathname === "/search"
                ? `border-b-2 border-teal-500 text-teal-500`
                : `border-b-2 border-orange-500 text-orange-700 md:border-0`
            }`}
          >
            Search
          </Link>
        </li>
        <li
          class={`text-xs sm:text:sm md:text-lg font-semibold p-2  md:rounded-lg md:shadow-sm  md:hover:shadow-md transition-all duration-300 ${
            pathname === "/categories"
              ? `md:bg-teal-100 md:hover:bg-teal-200`
              : `md:bg-orange-100 md:hover:bg-orange-200`
          }`}
        >
          <Link
            to="categories"
            className={` ${
              pathname === "/categories"
                ? `border-b-2 border-teal-500 text-teal-500`
                : `border-b-2 border-orange-500 text-orange-700 md:border-0`
            }`}
          >
            Categories
          </Link>
        </li>
        <li
          class={`text-xs sm:text:sm md:text-lg font-semibold p-2  md:rounded-lg md:shadow-sm  md:hover:shadow-md transition-all duration-300 ${
            pathname === "/origin"
              ? `md:bg-teal-100 md:hover:bg-teal-200`
              : `md:bg-orange-100 md:hover:bg-orange-200`
          }`}
        >
          <Link
            to="origin"
            className={` ${
              pathname === "/origin"
                ? `border-b-2 border-teal-500 text-teal-500`
                : `border-b-2 border-orange-500 text-orange-700 md:border-0`
            }`}
          >
            Origin
          </Link>
        </li>
        <li
          class={`text-xs sm:text:sm md:text-lg font-semibold p-2  md:rounded-lg md:shadow-sm  md:hover:shadow-md transition-all duration-300 ${
            pathname === "/start-items"
              ? `md:bg-teal-100 md:hover:bg-teal-200`
              : `md:bg-orange-100 md:hover:bg-orange-200`
          }`}
        >
          <Link
            to="start-items"
            className={` ${
              pathname === "/start-items"
                ? `border-b-2 border-teal-500 text-teal-500`
                : `border-b-2 border-orange-500 text-orange-700 md:border-0`
            }`}
          >
            Core Ingredient
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Aside;
