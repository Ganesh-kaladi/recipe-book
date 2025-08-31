import { createContext, useState, useContext } from "react";

const AllContext = createContext();

const AllProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [area, setArea] = useState([]);
  const [list, setList] = useState([]);
  const [item, setItem] = useState(null);
  const [searchedList, setSearchedList] = useState([]);

  return (
    <AllContext.Provider
      value={{
        loading,
        setLoading,
        category,
        setCategory,
        list,
        setList,
        area,
        setArea,
        ingredient,
        setIngredient,
        item,
        setItem,
        searchedList,
        setSearchedList,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export const useAll = () => {
  const context = useContext(AllContext);
  if (!context) {
    throw new Error("useAll must be used within an AllProvider");
  }
  return context;
};

export default AllProvider;
