export function formatIngredients(item) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const name = item[`strIngredient${i}`];
    const qty = item[`strMeasure${i}`];

    if (name && name.trim() !== "") {
      ingredients.push({
        name: name.trim(),
        quantity: qty && qty.trim() !== "" ? qty.trim() : null,
      });
    }
  }

  return ingredients;
}
