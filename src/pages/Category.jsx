import { useEffect } from "react";
import { useAll } from "../context/allContext";
import { getCategories } from "../api";
import { useNavigate } from "react-router-dom";
import Spinner from "../component/Spinner";

function Category() {
  const { loading, setLoading, category, setCategory } = useAll();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Recipe Book | Categories`;
    return () => {
      document.title = "Recipe Book";
    };
  }, []);

  useEffect(() => {
    if (category?.length > 0) {
      return;
    }
    setLoading(true);
    async function fectData() {
      const res = await getCategories();
      setCategory(res);
      setLoading(false);
    }
    fectData();
  }, [category]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div class="grid grid-cols-12 gap-6">
      {category?.length > 0 &&
        category?.map((el) => {
          return (
            <div
              key={el?.idCategory}
              class="col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div class="overflow-hidden w-full">
                <img
                  src={el?.strCategoryThumb}
                  class="w-full object-cover transform transition duration-500"
                  alt="Panner butter masala"
                />
              </div>
              <div class="p-4 text-center">
                <h5
                  class="font-bold text-sm sm:text-lg md:text-xl text-orange-600 group-hover:text-teal-600 transition cursor-pointer"
                  onClick={() => {
                    navigate(`/list?c=${el?.strCategory}`);
                  }}
                >
                  {el?.strCategory}
                </h5>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Category;
