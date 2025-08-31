import axios from "axios";

export const getCategories = async () => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    return res.data.categories;
  } catch (err) {
    console.log(err);
  }
};

export const getArea = async () => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );

    return res.data.meals;
  } catch (err) {
    console.log(err);
  }
};

export const getIngredient = async () => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    return res.data.meals;
  } catch (err) {
    console.log(err);
  }
};

export const getListItems = async ({ query }) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?${query}`
    );
    return res.data.meals;
  } catch (err) {
    console.log(err);
  }
};

export const getItem = async (id) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return res.data.meals[0];
  } catch (err) {
    console.log(err);
  }
};

export const search = async (text) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    );

    return res.data.meals;
  } catch (err) {
    console.log(err);
  }
};
