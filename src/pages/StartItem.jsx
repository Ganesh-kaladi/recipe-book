import axios from "axios";
import { useEffect, useState } from "react";
import { getIngredient } from "../api";
import { useAll } from "../context/allContext";
import Spinner from "../component/Spinner";
import { useNavigate } from "react-router-dom";

function StartItem() {
  const { loading, setLoading, ingredient, setIngredient } = useAll();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Recipe Book | Core Ingredient`;
    return () => {
      document.title = "Recipe Book";
    };
  }, []);

  useEffect(() => {
    if (ingredient?.length > 0) {
      return;
    }
    setLoading(true);
    async function fectData() {
      const res = await getIngredient();
      setIngredient(res);
      setLoading(false);
    }
    fectData();
  }, [ingredient, loading]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div class="grid grid-cols-12 gap-6">
      {ingredient?.length > 0 &&
        ingredient?.map((el, i) => {
          return (
            <div
              key={i}
              class="col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div class="p-4">
                <h5
                  class="font-bold text-sm sm:text-lg md:text-xl text-orange-600 group-hover:text-teal-600 transition cursor-pointer"
                  onClick={() => navigate(`/list?i=${el?.strIngredient}`)}
                >
                  {el?.strIngredient}
                </h5>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default StartItem;
