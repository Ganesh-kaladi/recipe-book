import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAll } from "../context/allContext";
import { getItem } from "../api";
import Spinner from "../component/Spinner";
import BackButton from "../component/BackButton";
import { formatIngredients } from "../assets/formatIngredients";

function Item() {
  const { id } = useParams();
  const { loading, setLoading, item, setItem } = useAll();
  const [ingredient, setIngredient] = useState();

  useEffect(() => {
    if (item?.strMeal) {
      document.title = `Recipe Book | ${item.strMeal}`;
    } else {
      document.title = "Recipe Book";
    }
    return () => {
      document.title = "Recipe Book";
    };
  }, [item]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const res = await getItem(id);
      setItem(res);
      const ingredients = await formatIngredients(res);
      setIngredient(ingredients);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div class="w-full">
      <BackButton />
      <div class="w-full flex gap-4 flex-col md:flex-row md:justify-center md:p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <div class="md:w-[33%] overflow-hidden rounded-t-lg md:rounded-lg md:shadow-md">
          <img
            src={item?.strMealThumb}
            class="w-full sm:max-h-[36rem] md:h-auto object-cover transform hover:scale-110 transition duration-500"
            alt="Baked salmon with fennel & tomatoes"
          />
        </div>

        <div class="w-full md:w-[67%] px-3 md:px-6">
          <h5 class="text-xl md:text-2xl lg::text-3xl font-bold text-orange-600 hover:text-teal-600 transition mb-2 md:mb-4">
            {item?.strMeal}
          </h5>
          <span class="text:lg lg:text-2xl block text-teal-700 font-semibold mb-2 md:mb-2">
            {item?.strCategory}
          </span>
          <span class="text:lg lg:text-2xl block text-teal-700 font-semibold mb-2 md:mb-2">
            {item?.strArea}
          </span>
          <span>{item?.strTags}</span>
        </div>
      </div>

      <section class="mt-6 bg-white rounded-xl shadow-md p-4 md:p-6 hover:shadow-xl transition-all duration-300">
        <h3 class="text-lg md:text-xl font-semibold text-orange-600 mb-3">
          Ingredients
        </h3>
        <ul class="grid grid-cols-2 gap-4 text-gray-700">
          {ingredient?.length > 0 &&
            ingredient?.map((el, i) => {
              console.log(el);
              return (
                <li className="text-xs sm:text-sm md:text-lg" key={i}>
                  <span class="font-bold text-teal-600">{el?.name}</span> -
                  <span>{el?.quantity}</span>
                </li>
              );
            })}
        </ul>
      </section>

      <section class="mt-6 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <h3 class="text-lg md:text-xl font-semibold text-orange-600 mb-3">
          Instructions
        </h3>
        <p class="text-sm sm:text-lg text-gray-700 leading-relaxed">
          {item?.strInstructions}
        </p>
      </section>
    </div>
  );
}

export default Item;
