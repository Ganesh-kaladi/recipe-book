import { useEffect, useState } from "react";
import { useAll } from "../context/allContext";
import { recomondRecipes, search } from "../api";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import NoResults from "./NoResults";

export default function Search() {
  const [text, setText] = useState("");
  const { loading, setLoading, searchedList, setSearchedList } = useAll();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Recipe Book | Search Recipe`;
    return () => {
      document.title = "Recipe Book";
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const res = await recomondRecipes();
      setSearchedList(res);
      setLoading(false);
    }
    fetchData();
  }, []);

  function handleChange(e) {
    setText(e.target.value);
  }

  async function handleSearch() {
    if (text.trim() === "") {
      return;
    }
    try {
      setLoading(true);
      const res = await search(text);
      setSearchedList(res);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex items-center w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search recipes by name..."
          value={text}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-teal-400 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={() => handleSearch()}
          className="px-4 py-2 text-sm lg:text-lg bg-gradient-to-r border from-orange-500 to-teal-500 text-white font-semibold rounded-r-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Search
        </button>
      </div>
      {loading && (
        <div className="mt-5">
          <Spinner />
        </div>
      )}
      <div class="mt-5 grid grid-cols-12 gap-6">
        {searchedList?.length > 0 &&
          searchedList?.map((el) => {
            return (
              <div
                key={el?.idMeal}
                class="col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div class="overflow-hidden">
                  <img
                    src={el?.strMealThumb}
                    class="w-full h-40 object-cover transform transition duration-500"
                    alt="Panner butter masala"
                  />
                </div>
                <div class="p-4 text-center">
                  <h5
                    class="font-bold text-sm sm:text-lg md:text-xl text-orange-600 group-hover:text-teal-600 transition cursor-pointer"
                    onClick={() => navigate(`/item/${el?.idMeal}`)}
                  >
                    {el?.strMeal}
                  </h5>
                </div>
              </div>
            );
          })}
      </div>
      {searchedList === null && <NoResults />}
    </>
  );
}
