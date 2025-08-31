import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getListItems } from "../api";
import { useAll } from "../context/allContext";
import Spinner from "../component/Spinner";
import BackButton from "../component/BackButton";

function List() {
  const { loading, setLoading, list, setList } = useAll();
  const [serchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function fectData() {
      const res = await getListItems({ query: serchParams });
      setList(res);
      setLoading(false);
    }
    fectData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <BackButton />
      <div class="grid grid-cols-12 gap-6">
        {list?.length > 0 &&
          list?.map((el) => {
            return (
              <div
                key={el?.idMeal}
                class="col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div class="overflow-hidden w-full">
                  <img
                    src={el?.strMealThumb}
                    class="w-full object-cover transform transition duration-500"
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
    </div>
  );
}

export default List;
