import axios from "axios";
import { useEffect, useState } from "react";
import { getArea } from "../api";
import { useAll } from "../context/allContext";
import { useNavigate } from "react-router-dom";
import Spinner from "../component/Spinner";

function Origin() {
  const { loading, setLoading, area, setArea } = useAll();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Recipe Book | Origin`;
    return () => {
      document.title = "Recipe Book";
    };
  }, []);

  useEffect(() => {
    if (area?.length > 0) {
      return;
    }
    setLoading(true);
    async function fectData() {
      const res = await getArea();
      setArea(res);
      setLoading(false);
    }
    fectData();
  }, [area, loading]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div class="grid grid-cols-12 gap-6">
      {area?.length > 0 &&
        area?.map((el, i) => {
          return (
            <div
              key={i}
              class="col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div class="p-4">
                <h5
                  class="font-bold text-sm sm:text-lg md:text-xl text-orange-600 group-hover:text-teal-600 transition cursor-pointer"
                  onClick={() => navigate(`/list?a=${el?.strArea}`)}
                >
                  {el?.strArea}
                </h5>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Origin;
